import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './index.css';

// Framer Motion
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    Your personal banking needs
                </motion.h3>
                <motion.h1
                    initial={{ opacity: 0, marginLeft: '-5rem' }}
                    animate={{ opacity: 1, marginLeft: '0rem' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <span>MAPUA</span> BANKING<br /> INC.
                </motion.h1>
                <p className="details">Bank with us now.</p>

                <motion.div className='header-btns'
                    initial={{ opacity: 0, marginLeft: '5rem' }}
                    animate={{ opacity: 1, marginLeft: '-2.5rem' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <NavLink to="/admin" exact className="header-btn">Admin?</NavLink>
                    <NavLink to="/client" exact className="header-btn">Account Holder?</NavLink>
                </motion.div>

            </div>
        </div>
    );
};

export default Header;