import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navber.css';
import { FcCamera } from "react-icons/fc";

const Navber = () => {

    const navigate = useNavigate();

    return (
        <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div onClick={() => navigate('/')} className='font-bold text-2xl cursor-pointer flex justify-between items-center font-[Poppins] text-gray-800'>

                <FcCamera className='text-4xl mr-1 pt-1'></FcCamera>
                <p>Kongkaboti Photography</p>
            </div>
            <div>

            </div>
            <div className='md:flex md:items-center md:pb-0 pb-12 sm:grid'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Navber;