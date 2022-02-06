import React from 'react';

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
                    <a href="#" className="header-btn">Admin?</a>
                    <a href="#" className="header-btn">Account Holder?</a>
                </div>
            </div>
        </div>
    );
};

export default Header;