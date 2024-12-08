import React, { useState } from 'react';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/index.jsx';
import './Signup.css';

const Signup = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!isRegistering) {
                setIsRegistering(true);
                await doCreateUserWithEmailAndPassword(email, password);
            }
        } catch (err) {
            setIsRegistering(false);
            setError('Signup failed. Please try again.');
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            if (!isRegistering) {
                setIsRegistering(true);
                await doSignInWithGoogle();
            }
        } catch (err) {
            setIsRegistering(false);
            setError('Sign in with Google failed. Please try again.');
        }
    };

    if (userLoggedIn) {
        return <Navigate to='/' replace />;
    }

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-text'>Sign Up</div>
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
                    <button className='signup-button' type='submit' disabled={isRegistering}>
                        {isRegistering ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
                <button className='google-button' onClick={handleGoogleSignIn} disabled={isRegistering}>
                    <img src='/review-fusion/icons/google.png' alt='Google' />
                    <div>{isRegistering ? 'Signing In...' : 'Sign In with Google'}</div>
                </button>
            </div>
        </div>
    )
};

export default Signup;