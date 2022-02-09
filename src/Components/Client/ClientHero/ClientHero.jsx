import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../../images/logo.png';

// CSS
import './clienthero.css';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import ClientTransactions from './ClientTransactions/ClientTransactions'
import BudgetPlanner from '../BudgetPlanner/BudgetPlanner'

const ClientHero = (props) => {

    // Destructured Properties
    const { setClientActive } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    // State
    const [clientUser, setClientUser] = useState(JSON.parse(localStorage.getItem("clientUser")));
    const [update, setUpdate] = useState("");

    // Effect
    useEffect(() => {
        let target = memberList.find(obj => obj.accountNo === clientUser.accountNo);
        setClientUser(target);
    }, [update]);

    // Event Handlers 
    const handleLogout = () => {
        let clientUser = {};
        localStorage.setItem("clientUser", JSON.stringify(clientUser));
        localStorage.setItem("clientActive", false);
        setClientActive(false);
    }

    return (
        <div>
            <NavLink to="/" className="nav">
                <img src={logo} alt="logo header" className="dashboard-logo-client" />
            </NavLink>
            <div className="client-logged-in">
                <h1>Welcome <span>{clientUser.firstName}</span> to Your Personal Account</h1>
                <button onClick={handleLogout} className="btn solid">Log Out</button>
            </div>

            <div className="client-details">
                <div className="client-details-container">

                    <motion.div className="client-details-card cyan bal"
                        initial={{ opacity: 0, transform: 'translateY(5rem)' }}
                        animate={{ opacity: 1, transform: 'translateY(0rem)' }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        {/* <section className={styles.balance}> */}
                        <h2>Balance: </h2>
                        <h1>Php{clientUser.balance}.00</h1>
                        {/* </section> */}
                    </motion.div>

                    <br />

                    <motion.div className="client-details-card cldet red dets"
                        initial={{ opacity: 0, transform: 'translateY(5rem)' }}
                        animate={{ opacity: 1, transform: 'translateY(0rem)' }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <section>
                            <strong>Account No.: {clientUser.accountNo}</strong>
                        </section>

                        <section>
                            <strong>Email: {clientUser.email}</strong>
                            {clientUser.phone !== ""
                                ? <><strong>Phone No.: {clientUser.phone}</strong><br /></>
                                : <><br /><strong>No contact number available</strong></>
                            }
                        </section>
                    </motion.div>

                    <br />

                    <motion.div className="client-details-card blue tra"
                        initial={{ opacity: 0, transform: 'translateY(5rem)' }}
                        animate={{ opacity: 1, transform: 'translateY(0rem)' }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        {clientUser.history.length !== 0
                            ? <>
                                <h2>Latest Transaction:</h2>
                                <div>
                                    {clientUser.history[0].type === "deposit"
                                        ? <li>Deposit: <span>Php {clientUser.history[0].amount}.00</span></li>
                                        : clientUser.history[0].type === "withdraw"
                                            ? <li>Withdraw: Php{clientUser.history[0].amount}</li>
                                            : clientUser.accountNo === clientUser.history[0].sender
                                                ? <li>Transfer: Sent Php{clientUser.history[0].amount} to Acct#&nbsp;{clientUser.history[0].receiver}</li>
                                                : <li>Transfer: Received Php{clientUser.history[0].amount} from Acct#&nbsp;{clientUser.history[0].sender}</li>}
                                </div>
                            </>
                            : <>
                                <h2>Latest Transaction:</h2>
                                <div>
                                    <li>No Transactions Made</li>
                                </div>
                            </>}
                    </motion.div>
                </div>

                <hr className="hr-line" />

                <div>
                    <ClientTransactions
                        clientUser={clientUser}
                        setUpdate={setUpdate} />
                </div>
            </div>

            <div>
                <BudgetPlanner
                    clientUser={clientUser}
                    setUpdate={setUpdate} />
            </div>
        </div>
    )
}

export default ClientHero;