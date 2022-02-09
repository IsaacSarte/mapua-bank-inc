import React from 'react'
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';

// CSS
import './history.css';

// Components
import Sidebar from '../../Components/Sidebar/Sidebar';

const History = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    console.log(memberList);
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    const deposit = transactionHistory.filter(obj => obj.type === "deposit");
    const withdraw = transactionHistory.filter(obj => obj.type === "withdraw");
    const transfer = transactionHistory.filter(obj => obj.type === "transfer");

    return (
        <div>
            <NavLink to="/">
                <img src={logo} alt="logo header" className="dashboard-logo" />
            </NavLink>
            <Sidebar />
            <div className="admin-logged-in">
                <h1>MU Bank Inc. <br/> Transaction History</h1>
                <button className="btn solid">
                    <NavLink to="/admin" exact>Go Back</NavLink>
                </button>
            </div>

            <div className="transaction-list">
                <div className="trans-card dep">
                    <h2>Deposit</h2>
                    <br/>
                    <div>
                        {deposit.map(obj =>
                            <div className="trans-dets">
                                <strong>Php {obj.amount}</strong><br/>
                                <em>Account No. :{obj.sender}</em>
                            </div>)}
                    </div>
                </div>

                <div className="trans-card witd">
                    <h2>Withdraw</h2>
                    <br/>
                    <div>
                        {withdraw.map(obj =>
                            <div className="trans-dets">
                                <strong>Php {obj.amount}</strong><br/>
                                <em>Account No. :{obj.sender}</em>
                            </div>)}
                    </div>
                </div>

                <div className="trans-card trans">
                    <h2>Transfer</h2>
                    <br/>
                    <div>
                        {transfer.map(obj =>
                            <div className="trans-dets">
                                <em>Account No. :{obj.sender}</em>
                                <strong>Php {obj.amount}</strong>
                                <em>Account No. :{obj.receiver}</em>
                            </div>)}
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default History
