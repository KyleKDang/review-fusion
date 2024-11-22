import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return <nav className='nav'>
        <Link to='/review-fusion' className='site-title'>Review Fusion</Link>
        <ul>
            <CustomLink to='review'>Review</CustomLink>
            <CustomLink to='about'>About</CustomLink>
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