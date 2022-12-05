import React from 'react';
import './Review.css';

const Review = (props) => {
    const { admin, imageURL, review, star } = props.review;
    return (
        <div>
            <h1>Name: {admin}</h1>
            <img className='w-[50px]' src={imageURL} alt="" />
            <p>{review}</p>
            <p><small>{star}</small></p>
        </div>
    );
};

export default Review;