import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
            <Sidebar />
            <div className="admin-logged-in">
                <h1>Hi, {adminUser.firstName} || MU Bank Inc. Admin </h1>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="admin-trans-container">

                <div className="admin-trans-card">
                    <h2>MU Total Bank Balance: Php {bankBalance}</h2>
                </div>
                <div className="admin-trans-card">
                    <h2>MU All Bank Account Holders: {bankMembers}</h2>
                </div>
                <div className="admin-trans-card">
                    <h2>MU Total Bank Transactions: {bankTransactions}</h2>
                </div>

            </div>
        </>
    )
}

export default Hero
