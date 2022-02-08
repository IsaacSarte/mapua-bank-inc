import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../../images/logo.png';
import waves from '../../../images/waves.svg';

// CSS
import './hero.css';

// Components
import Sidebar from '../../Sidebar/Sidebar.js';

// Framer Motion
import { motion, useAnimation } from 'framer-motion';

const Hero = (props) => {

    // Destructured Properties
    const { setAdminActive } = props;
    const adminUser = JSON.parse(localStorage.getItem("adminUser"));

    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    const totalBalance = JSON.parse(localStorage.getItem("totalBalance"));

    let bankMembers = memberList.length;
    let bankTransactions = transactionHistory.length;
    let bankBalance = totalBalance;

    // Event Handlers
    const handleLogout = () => {
        let adminUser = {};
        localStorage.setItem("adminUser", JSON.stringify(adminUser));
        localStorage.setItem("adminActive", false);
        setAdminActive(false);
    }

    return (
        <>
            <NavLink to="/">
                <img src={logo} alt="logo header" className="dashboard-logo" />
            </NavLink>
            <Sidebar />
            <div className="admin-logged-in">
                <h1>Hi {adminUser.firstName}!<br /> MU Bank Inc. Admin </h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>

            <div className="admin-trans-container">

                <div className="admin-trans-card">
                    <h2>MU Total Bank Balance: <br /> Php {bankBalance}</h2>
                </div>
                <div className="admin-trans-card">
                    <h2>MU All Bank Account Holders: <br /> {bankMembers}</h2>
                </div>
                <div className="admin-trans-card">
                    <h2>MU Total Bank Transactions: <br /> {bankTransactions}</h2>
                </div>

            </div>

            <img src={waves} alt="wave bg" className="admin-wave" />
        </>
    )
}

export default Hero
