import React, { useState, useEffect } from 'react';

// CSS
import '../cltrans.css';

const ClientDeposit = (props) => {

    // Destructured Properties
    const { clientUser, setUpdate } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    let totalBalance = parseInt(JSON.parse(localStorage.getItem("totalBalance")));

    // States
    const [deposit, setDeposit] = useState("");
    const [filter, setFilter] = useState([]);

    // Effects
    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== clientUser.accountNo));
    }, [deposit])

    // Event Handlers
    const handleDeposit = (e) => {
        e.preventDefault();
        let history = {
            type: "deposit",
            amount: deposit,
            sender: clientUser.accountNo,
            receiver: ""
        }
        clientUser.history.unshift(history);
        transactionHistory.unshift(history);
        clientUser.balance = parseInt(clientUser.balance) + parseInt(deposit);
        totalBalance += parseInt(deposit);
        filter.push(clientUser);
        localStorage.setItem("memberList", JSON.stringify(filter));
        localStorage.setItem("totalBalance", totalBalance);
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
        alert(`Deposited ${deposit} to ${clientUser.firstName} ${clientUser.lastName}`);
        setUpdate(state => state + ".");
        setDeposit("");
    }

    return (
        <form onSubmit={(e) => { handleDeposit(e) }} className="form-trans-client">
            <label>
                Deposit Amount {""}
                <input
                    type="number"
                    value={deposit}
                    min={500}
                    onChange={(e) => { setDeposit(e.target.value) }}
                    required />
            </label>

            <br />

            <button
                type="submit"
                className="btn solid yellow"
            >
                Deposit
            </button>
        </form>
    )
}

export default ClientDeposit
