import React from 'react';
import './Home.css';
import image from '../../Assets/home-img.png';
import { ReviewContext } from '../../App';
import HomeReview from './HomeReview';
import { useContext } from 'react';
import { BsFacebook, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useContext(ReviewContext);

    const navigate = useNavigate();

    return (
        <div>
            <section className='home-container md:px-20 md:py-20 md:flex block'>
                <div className="home-half-width ">
                    <img className='h-[350px] px-5 pb-2' src={image} alt="" />

                </div>
                <div className="home-half-width md:px-10 md:py-15 px-10 py-5">
                    <h1 className='text-4xl text-cyan-700 font-bold'>World Class Photography</h1>
                    <p className='pt-2 md:pt-5 text-xl text-gray-700'>Any Kind Of Photography Service Find Here. We Makes Your Memory With Our Photography. Happy Photography! 📷📷</p>
                    <div className='flex py-5 px-2'>
                        <a href="https://facebook.com/profile.php?id=100034880760996"><BsFacebook className='mr-4 text-4xl text-blue-700 hover:text-5xl ease-in duration-300'></BsFacebook></a>
                        <a href="http://www.linkedin.com/in/"><BsLinkedin className='mr-4 text-4xl text-blue-500 hover:text-5xl ease-in duration-300'></BsLinkedin></a>
                        <a href="https://www.youtube.com/@rukonuzzamanshiem2225"><BsYoutube className='mr-4 text-4xl text-red-700 hover:text-5xl ease-in duration-300'></BsYoutube></a>
                    </div>
                    <button onClick={() => navigate('/review')} className='bg-cyan-700 text-white text-xl px-4 py-2 rounded ease-in duration-300  hover:bg-yellow-600'>See All Reviews</button>
                </div>
            </section>
            <section className=' px-5 py-4'>
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