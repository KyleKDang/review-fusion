import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
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
            setError('Login failed. Please check your credentials.');
        }
    };

    if (userLoggedIn) {
        return <Navigate to='/' replace />;
    }

    return (
        <div className='login-page'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                <label>Password:</label>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit' disabled={isSigningIn}>
                    {isSigningIn ? 'Logging In...' : 'Login'}
                </button>
            </form>
            <button onClick={handleGoogleSignIn} disabled={isSigningIn}>
                {isSigningIn ? 'Signing In...' : 'Sign In with Google'}
            </button>
        </div>
    );
};

export default Login;