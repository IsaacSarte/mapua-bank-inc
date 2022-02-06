import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

// images
import logo from '../images/logo.png';

// CSS
import './index.css';

const Navbar = () => {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <NavLink to='/' className='logo' smooth={true} duration={1000}>
                <img src={logo} alt='' />
            </NavLink>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><NavLink to="/" smooth={true} duration={1000}>Home</NavLink></li>
                <li><Link to="products" smooth={true} duration={1000}>Services</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
