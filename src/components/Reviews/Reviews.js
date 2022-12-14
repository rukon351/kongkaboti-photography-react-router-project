import React, { useContext } from 'react';
import { ReviewContext } from '../../App';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useContext(ReviewContext);

    return (
        <div className='mx-2'>
            <p className='text-3xl mt-5 mb-3 text-center text-cyan-600'>Reviews</p>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;