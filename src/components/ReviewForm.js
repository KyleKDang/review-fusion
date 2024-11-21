import React from 'react';
import './ReviewForm.css';

const ReviewForm = ({ reviewText, onInputChange, onSubmitReview }) => {
  return (
    <div className="review-form">
      <textarea
        value={reviewText}
        onChange={onInputChange}
        placeholder="Write your review here..."
      ></textarea>
      <button onClick={onSubmitReview}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
