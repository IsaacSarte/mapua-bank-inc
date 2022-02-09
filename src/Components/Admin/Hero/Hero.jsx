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
        <div>
            <NavLink to="/">
                <img src={logo} alt="logo header" className="dashboard-logo" />
            </NavLink>
            <Sidebar />
            <div className="admin-logged-in">
                <h1>Hi {adminUser.firstName}!<br /> MU Bank Inc. Admin </h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
            {/*  */}
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>Total Bank Account Holders</h2>
                    <br />
                    <p>Total = <strong>{bankMembers}</strong> Account Holders</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div className="box red">
                    <h2>Total Bank Balance</h2>
                    <br />
                    <p>Total = <strong>Php {bankBalance}.00</strong></p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div className="box box-down blue">
                    <h2>Total Bank Transactions</h2>
                    <br />
                    <p>Total = <strong>{bankTransactions}</strong> Transactions</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>Mapua Bank Inc Admin</h2>
                    <br />
                    <p>Isaac Sarte | JR Franco | Ruby Ledda | Marc Arceo | Steve Feria</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>

            {/*  */}


            <img src={waves} alt="wave bg" className="admin-wave" />
        </div>
    )
}

export default Hero
