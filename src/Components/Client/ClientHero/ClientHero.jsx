import React, { useState, useEffect } from 'react'

// CSS
import './clienthero.css';

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

            <div>
                <section>
                    <h1>Hi, <span>{clientUser.firstName}</span></h1>
                    <button onClick={handleLogout}>Log Out</button>
                </section>

                <div>

                    <div>
                        {/* <section className={styles.balance}> */}
                        <h2>Balance</h2>
                        <h1>Php{clientUser.balance}</h1>
                        {/* </section> */}
                    </div>

                    <div>
                        <section>
                            <strong>Username: {clientUser.username}</strong>
                            <strong>Account#: {clientUser.accountNo}</strong>
                        </section>

                        <section>
                            <strong>Email: {clientUser.email}</strong>
                            {clientUser.phone !== ""
                                ? <strong>Phone#: {clientUser.phone}</strong>
                                : <strong>No contact number available</strong>}
                        </section>
                    </div>

                </div>
                <section>
                    {clientUser.history.length !== 0
                        ? <>
                            <strong>Latest Transaction:</strong>
                            <div>
                                {clientUser.history[0].type === "deposit"
                                    ? <li>Deposit: Php{clientUser.history[0].amount}</li>
                                    : clientUser.history[0].type === "withdraw"
                                        ? <li>Withdraw: Php{clientUser.history[0].amount}</li>
                                        : clientUser.accountNo === clientUser.history[0].sender
                                            ? <li>Transfer: Sent Php{clientUser.history[0].amount} to Acct#&nbsp;{clientUser.history[0].receiver}</li>
                                            : <li>Transfer: Received Php{clientUser.history[0].amount} from Acct#&nbsp;{clientUser.history[0].sender}</li>}
                            </div>
                        </>
                        : <>
                            <strong>Latest Transaction:</strong>
                            <div>
                                <li>No Transactions Made</li>
                            </div>
                        </>}
                </section>

                <section>
                    <ClientTransactions
                        clientUser={clientUser}
                        setUpdate={setUpdate} />
                </section>
            </div>

            <div>
                <BudgetPlanner
                    clientUser={clientUser}
                    setUpdate={setUpdate} />
            </div>





        </div>
    )
}

export default ClientHero
