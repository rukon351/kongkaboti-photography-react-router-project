import React from 'react';
import './Home.css';
import image from '../../Assets/home-img.png';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-half-width">
                <img src={image} alt="" />
            </div>
            <div className="home-half-width">
                <p>this is homne</p>
            </div>
        </div>
    );
};

export default Home;