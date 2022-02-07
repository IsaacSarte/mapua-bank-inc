import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS

// Components
/* import Sidebar from '../../components/Sidebar/Sidebar'; */

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
            {/* <Sidebar /> */}

            <section>

                <div>
                    <h1>IchiBank Transaction History</h1>
                    <button>
                        <NavLink to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div>

                    <section>
                        <div>
                            <h2>Deposit</h2>
                        </div>
                        <div>
                            {deposit.map(obj =>
                                <div>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.sender}</em>
                                </div>)}
                        </div>
                    </section>

                    <section>
                        <div>
                            <h2>Withdraw</h2>
                        </div>
                        <div>
                            {withdraw.map(obj =>
                                <div>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.sender}</em>
                                </div>)}
                        </div>
                    </section>

                    <section>
                        <div>
                            <h2>Transfer</h2>
                        </div>
                        <div>
                            {transfer.map(obj =>
                                <div>
                                    <em>Acct# :{obj.sender}</em>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.receiver}</em>
                                </div>)}
                        </div>
                    </section>



                </div>   
                
            </section>   
            

        </div>
    )
}

export default History
