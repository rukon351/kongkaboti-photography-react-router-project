import React, { useContext } from 'react';
import './Home.css';
import image from '../../Assets/home-img.png';
import { ReviewContext } from '../../App';
import HomeReview from './HomeReview';

const Home = () => {

    const [reviews, setReviews] = useContext(ReviewContext);
    console.log(reviews)

    return (
        <div>
            <section className='home-container'>
                <div className="home-half-width">
                    <img src={image} alt="" />
                </div>
                <div className="home-half-width">
                    <p>this is home</p>
                </div>
            </section>
            <section className='review-container'>
                <div>
                    {
                        reviews.map(review => <HomeReview key={review._id} review={review}></HomeReview>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;