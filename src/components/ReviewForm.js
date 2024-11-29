import React from 'react';
import './ReviewForm.css';

const ReviewForm = ({ reviewText, handleInputChange, handleSubmitReview }) => {
  return (
    <div className="review-form">
      <textarea
        value={reviewText}
        onChange={handleInputChange}
        placeholder="Write your review here..."
      ></textarea>
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
