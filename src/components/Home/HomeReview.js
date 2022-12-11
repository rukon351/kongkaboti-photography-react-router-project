import React from 'react';

const HomeReview = (props) => {
    const { admin, imageURL, review, star, _id } = props.review;
    return (
        <div className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 mt-2 dark:bg-slate-800'>
            <div>
                <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src={imageURL} alt="" />
            </div>
            <div>
                <p>{admin}</p>
                <p>Rating: {star}</p>
            </div>
        </div>
    );
};

export default HomeReview;