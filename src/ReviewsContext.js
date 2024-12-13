import React, { useContext, useState } from 'react';
import { db } from './firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from './contexts/authContext/index.jsx';

const ReviewsContext = React.createContext();
const ReviewsUpdateContext = React.createContext();

export function useReviews() {
    return useContext(ReviewsContext)
}

export function useReviewsUpdate() {
    return useContext(ReviewsUpdateContext)
}

export function ReviewsProvider({ children }) {
    const [reviews, setReviews] = useState([]);

    const auth = useAuth();
    const user = auth.currentUser;
    const userEmail = user.email;

    const saveReview = async (movieId, reviewText) => {
        await addDoc(collection(db, 'reviews'), {
            userEmail: userEmail,
            movieId: movieId,
            reviewText: reviewText
        });
    };

    const handleReviewSubmit = (movieId, reviewText) => {
        setReviews([
            ...reviews,
            {
            movieId,
            reviewText,
            },
        ]);
    };

    return (
        <ReviewsContext.Provider value={reviews}>
            <ReviewsUpdateContext.Provider value={user ? saveReview : handleReviewSubmit}>
                {children}
            </ReviewsUpdateContext.Provider>
        </ReviewsContext.Provider>
    );
}