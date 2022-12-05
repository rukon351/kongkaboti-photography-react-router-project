import React from 'react';

const HomeReview = (props) => {
    const { admin, imageURL, review, star } = props.review;
    return (
        <div>
            <h1>{admin}</h1>
        </div>
    );
};

export default HomeReview;