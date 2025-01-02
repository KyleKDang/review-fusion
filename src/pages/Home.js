import React from 'react';
import MovieList from '../components/MovieList.js';
import { useAuth } from '../contexts/authContext/index.jsx';
import './Home.css';

export default function Home({ movies }) {
    const { userLoggedIn, currentUser } = useAuth();

    return (
        <>
        <MovieList movies={movies} />
        <em className='logged-in-as'>{userLoggedIn && `Logged in as ${currentUser.email}`}</em>
        </>
    )
}