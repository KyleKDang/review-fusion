import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/index.jsx';
import './Login.css'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const[error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isSigningIn) {
                setIsSigningIn(true);
                await doSignInWithEmailAndPassword(email, password);
            }
        } catch (err) {
            setIsSigningIn(false);
            setError('Login failed. Please check your credentials.');
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            if (!isSigningIn) {
                setIsSigningIn(true);
                await doSignInWithGoogle();
            }
        } catch (err) {
            setIsSigningIn(false);
            setError('Sign in with Google failed. Please try again.');
        }
    };

    if (userLoggedIn) {
        return <Navigate to='/' replace />;
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='login-text'>Login</div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className='login-button' type='submit' disabled={isSigningIn}>
                        {isSigningIn ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                <button className='google-button' onClick={handleGoogleSignIn} disabled={isSigningIn}>
                    <img src='/review-fusion/icons/google.png' alt='Google' />
                    <div>{isSigningIn ? 'Signing In...' : 'Sign In with Google'}</div>
                </button>
            </div>
        </div>
    );
};

export default Login;