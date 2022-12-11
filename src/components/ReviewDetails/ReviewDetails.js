import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewContext } from '../../App';
import './ReviewDetails.css';

const ReviewDetails = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useContext(ReviewContext);

    const review = reviews.find(review => review._id === id);

    return (
        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 mt-2 dark:bg-slate-800">
            {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={review?.imageURL} alt="" width="384" height="512" /> */}
            <img src={review?.imageURL} alt="" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {review?.admin}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Rating: {review?.star}
                    </div>
                </figcaption>
                <blockquote>
                    <p className="text-lg font-medium">
                        {review?.review}
                    </p>
                </blockquote>
            </div>
        </div>
    );
};

export default ReviewDetails;