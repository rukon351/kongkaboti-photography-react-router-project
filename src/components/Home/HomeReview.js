import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeReview = (props) => {
    const { admin, imageURL, star, _id } = props.review;
    const navigate = useNavigate();

    return (
        <div className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 mt-2 dark:bg-slate-800'>
            <div>
                <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src={imageURL} alt="" />
            </div>
            <div className='text-center px-[40%]'>
                <p className='text-xl font-bold text-gray-700 py-4'>{admin}</p>
                <p className='font-bold text-blue-600'>Rating: {star}</p>
                <button className='my-4 bg-blue-600 px-5 py-2 text-white rounded ease-in duration-300  hover:bg-yellow-600'
                    onClick={() => navigate(`/review-details/${_id}`)}>Review</button>
            </div>
        </div>
    );
};

export default HomeReview;