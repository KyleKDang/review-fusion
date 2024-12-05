import React from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/index.jsx';
import { doSignOut } from '../firebase/auth.js';
import './Navbar.css';

export default function Navbar() {
    const { userLoggedIn } = useAuth()

    const navigate = useNavigate()

    const handleSignOut = async () => {
        await doSignOut();
        navigate('/login', { replace: true });
    }

    return <nav className='nav'>
        <Link to='/' className='site-title'>Review Fusion</Link>
        <ul>
            <CustomLink to='review'>Reviews</CustomLink>
            <CustomLink to='about'>About</CustomLink>
            {
                userLoggedIn ? (
                    <>
                    <button className='logout-button' onClick={handleSignOut}>Log Out</button>
                    </>
                ) : (
                    <>
                    <CustomLink to='login'>Login</CustomLink>
                    <CustomLink to='signup'>Sign Up</CustomLink>
                    </>
                )
            }
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}