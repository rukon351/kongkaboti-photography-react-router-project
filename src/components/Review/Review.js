import React from 'react';
import './Review.css';

const Review = (props) => {
    const { admin, imageURL, review, star } = props.review;
    return (
        // <div className=''>
        //     <img className='w-[50px]' src={imageURL} alt="" />
        //     <h1>Name: {admin}</h1>
        //     <p>{review}</p>
        //     <p><small>{star}</small></p>
        // </div>



        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imageURL} alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        {admin}
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Rating: {star}
                    </div>
                </figcaption>
                <blockquote>
                    <p class="text-lg font-medium">
                        {review}
                    </p>
                </blockquote>
            </div>
        </div>




    );
};

export default Review;