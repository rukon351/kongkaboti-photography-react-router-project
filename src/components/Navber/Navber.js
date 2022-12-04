import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Navber.css';
import { FcCamera } from "react-icons/fc";

const Navber = () => {
    return (
        <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex justify-between items-center font-[Poppins] text-gray-800'>

                <FcCamera className='text-4xl mr-1 pt-1'></FcCamera>
                <p>Kongkaboti Photography</p>

            </div>
            <div className='md:flex md:items-center navlink-items'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Navber;