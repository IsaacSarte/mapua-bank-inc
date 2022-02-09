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
                <h1>Transaction History</h1>
                <button className="btn solid">
                    <NavLink to="/admin" exact>Go Back</NavLink>
                </button>
            </div>

            <caption>Transaction Summary</caption>

            <table>
                <thead>
                    <tr>
                    <th scope="col">Deposit</th>
                    <th scope="col">Withdraw</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td data-label="Deposit">
                        {deposit.map(obj =>
                            <>
                                <div className="trans-dets">
                                    <strong>Php {obj.amount}.00</strong><br/>
                                    <em>Account No. :{obj.sender}</em>
                                </div>
                                <br/>
                            </>
                        )}
                    </td>
                    <td data-label="Withdraw">
                        {withdraw.map(obj =>
                            <>
                                <div className="trans-dets">
                                    <strong>Php {obj.amount}.00</strong><br/>
                                    <em>Account No. :{obj.sender}</em>
                                </div>
                                <br/>
                            </>
                        )}
                    </td>
                    <td data-label="Sender">
                        {transfer.map(obj =>
                            <>
                                <div className="trans-dets">
                                    <strong>Php {obj.amount}.00</strong><br/>
                                    <em>Account No. :{obj.sender}</em>
                                </div>
                                <br/>
                            </>
                        )}
                    </td>
                    <td data-label="Receiver">
                        {transfer.map(obj =>
                            <>
                                <div className="trans-dets">
                                    <strong>Php {obj.amount}.00</strong><br/>
                                    <em>Account No. :{obj.receiver}</em>
                                </div>
                                <br/>
                            </>
                        )}
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default History
