import React from 'react';
import rukon from '../../Assets/rukon-about.jpg';
import { BsFacebook, BsYoutube, BsLinkedin } from 'react-icons/bs';

const About = () => {
    return (
        <div className=" bg-slate-100 rounded-xl p-8 md:p-0 mt-2 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-full rounded mx-auto" src={rukon} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400 text-center font-bold text-2xl">
                        <h1>Rukonuzzaman Shiem</h1>
                    </div>
                </figcaption>
                <blockquote>
                    <p className="text-lg font-medium">
                        This website is made for entertainment purposes only. But believe me I can't do any kind of photography, I could before but now I can't at all. But I know a girl who can take very nice photography. Her name is Kongkaboti. She has many flowering plants and he constantly takes pictures.  She takes very beautiful pictures like she.💚
                    </p>
                    <div className='flex py-5 px-40'>
                        <a href="https://facebook.com/profile.php?id=100034880760996"><BsFacebook className='mr-4 text-4xl text-blue-700 hover:text-5xl ease-in duration-300'></BsFacebook></a>
                        <a href="http://www.linkedin.com/in/"><BsLinkedin className='mr-4 text-4xl text-blue-500 hover:text-5xl ease-in duration-300'></BsLinkedin></a>
                        <a href="https://www.youtube.com/@rukonuzzamanshiem2225"><BsYoutube className='mr-4 text-4xl text-red-700 hover:text-5xl ease-in duration-300'></BsYoutube></a>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default About;