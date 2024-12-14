import React, { useContext, useState, useEffect } from 'react';
import { db } from './firebase/firebase.js';
import { collection, query, orderBy, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
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
    const userEmail = user ? user.email : null;

    const getSavedReviews = async () => {
        const reviewsArray = [];

        const q = query(collection(db, 'reviews'), orderBy("timestamp"))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            reviewsArray.push(doc.data());
        });

        setReviews(reviewsArray);
    };

    useEffect(() => {
        getSavedReviews();
    }, []);

    const saveReview = async (movieId, reviewText) => {
        await addDoc(collection(db, 'reviews'), {
            timestamp: serverTimestamp(),
            userEmail: userEmail,
            movieId: movieId,
            reviewText: reviewText
        });

        handleReviewSubmit(movieId, reviewText);
    };

    const handleReviewSubmit = (movieId, reviewText) => {
        setReviews([
            ...reviews,
            {
                timestamp: null,
                userEmail: userEmail,
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