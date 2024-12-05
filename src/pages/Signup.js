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
            <h1>Sign Up</h1>
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
                <button type='submit'>Sign Up</button>
            </form>
            <button onClick={handleGoogleSignIn} disabled={isRegistering}>
                {isRegistering ? 'Signing In...' : 'Sign In with Google'}
            </button>
        </div>
    )
};

export default Signup;