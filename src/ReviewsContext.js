import React, { useContext, useState } from 'react';

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
            <ReviewsUpdateContext.Provider value={handleReviewSubmit}>
                {children}
            </ReviewsUpdateContext.Provider>
        </ReviewsContext.Provider>
    );
}