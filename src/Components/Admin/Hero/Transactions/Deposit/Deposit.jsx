import React, { useState, useEffect } from 'react'

// CSS
import '../trans.css';

const Deposit = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    let totalBalance = parseInt(JSON.parse(localStorage.getItem("totalBalance")));

    // States
    const [accountNo, setAccountNo] = useState("");
    const [deposit, setDeposit] = useState("");
    const [target, setTarget] = useState({});
    const [filter, setFilter] = useState([]);

    //Effects
    useEffect(() => {
        let memberUser = memberList.find(obj => obj.accountNo === accountNo);
        if (memberUser !== undefined) {
            setTarget(memberUser);
        } else {
            setTarget({});
        }
    }, [accountNo])

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== target.accountNo));
    }, [target, deposit])

    // EventHandlers
    const handleDeposit = (e) => {
        e.preventDefault();
        let history = {
            type: "deposit",
            amount: deposit,
            sender: accountNo,
            receiver: ""
        }
        target.history.unshift(history);
        transactionHistory.unshift(history);
        target.balance = parseInt(target.balance) + parseInt(deposit);
        totalBalance += parseInt(deposit);
        filter.push(target);
        localStorage.setItem("memberList", JSON.stringify(filter));
        localStorage.setItem("totalBalance", totalBalance);
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
        alert(`Deposited ${deposit} to ${target.firstName} ${target.lastName}`);
        setAccountNo(target.accountNo);
        setDeposit("");
    }

    return (
        <form onSubmit={(e) => { handleDeposit(e) }} className="form-trans">

            <label>
                Account Number {""}
                <input
                    type="text"
                    value={accountNo}
                    onChange={(e) => { setAccountNo(e.target.value) }}
                    required
                />
            </label>

            <br />

            <div className="trans-details">
                <h3>Account Name: <span>{target.firstName} {target.lastName}</span></h3>
                <h3>Balance: <span>Php {target.balance}</span></h3>
            </div>

            <br />

            <label>
                Deposit Amount {""}
                <input
                    type="number"
                    value={deposit}
                    onChange={(e) => { setDeposit(e.target.value) }}
                    min={1000}
                    required
                />
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

export default Deposit
