import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';

const Review = (props) => {
    const { admin, imageURL, review, star, _id } = props.review;
    const navigation = useNavigate();
    return (
        // <div className=''>
        //     <img className='w-[50px]' src={imageURL} alt="" />
        //     <h1>Name: {admin}</h1>
        //     <p>{review}</p>
        //     <p><small>{star}</small></p>
        // </div>

        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 mt-2 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={review?.imageURL} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {admin}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Rating: {star}
                    </div>
                </figcaption>
                <blockquote>
                    <p className="text-lg font-medium">
                        {/* {review.length < 50 ? review.length : review.length(0, 50)} */}
                        {review.length < 150 ? review.length : review.slice(0, 150)}
                        <span className="text-2xl font-bold text-gray-600 cursor-pointer" onClick={() => navigation(`/review-details/${_id}`)}>
                            ...Read More
                        </span>
                    </p>
                </blockquote>
            </div>
        </div>




    );
};

export default Review;