import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css';
import icon from '../../Assets/icon 3.png'

const Navber = () => {
    return (
        <nav className='nav-link text-center'>
            <Link to='/'>
                <img className='icon' src={icon} alt="" />
                <p className='icon-text'>Kongkaboti Photography</p>
            </Link>
            <div className='navlink-items'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "navlink"} to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Navber;