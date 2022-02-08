import React from 'react'
import { NavLink } from 'react-router-dom';

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
            <Sidebar />

                <div className="admin-transaction-history">
                    <h1>MU Bank Inc. Transaction History</h1>
                    <button>
                        <NavLink to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div className="transaction-list">
                    <div>
                        <h2>Deposit</h2>
                    </div>
                    <div>
                        {deposit.map(obj =>
                            <div>
                                <strong>Php {obj.amount}</strong>
                                <em>Account No. :{obj.sender}</em>
                            </div>)}
                    </div>

                    <div>
                        <h2>Withdraw</h2>
                    </div>
                    <div>
                        {withdraw.map(obj =>
                            <div>
                                <strong>Php {obj.amount}</strong>
                                <em>Account No. :{obj.sender}</em>
                            </div>)}
                    </div>

                    <div>
                        <h2>Transfer</h2>
                    </div>
                    <div>
                        {transfer.map(obj =>
                            <div>
                                <em>Account No. :{obj.sender}</em>
                                <strong>Php {obj.amount}</strong>
                                <em>Account No. :{obj.receiver}</em>
                            </div>)}
                    </div>

                </div>   
        </div>
    )
}

export default History
