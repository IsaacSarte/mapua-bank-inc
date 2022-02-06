import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './index.css';

const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>Your personal banking needs</h3>
                <h1><span>MAPUA</span> BANKING<br /> INC.</h1>
                <p className="details">Bank with us now.</p>

                <div className='header-btns'>
                    <NavLink to="/admin" exact className="header-btn">Admin?</NavLink>
                    <NavLink to="/client" exact className="header-btn">Account Holder?</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Header;