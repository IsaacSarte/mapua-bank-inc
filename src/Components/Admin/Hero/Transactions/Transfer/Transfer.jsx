import React, { useState, useEffect } from 'react'

// CSS
import '../trans.css';

const Transfer = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));

    // States
    const [senderAccount, setSenderAccount] = useState("");
    const [receiverAccount, setReceiverAccount] = useState("");
    const [transfer, setTransfer] = useState("");
    const [targetSender, setTargetSender] = useState({});
    const [targetReceiver, setTargetReceiver] = useState({});
    const [filter, setFilter] = useState([]);
    const [error, setError] = useState("");

    // Effect
    useEffect(() => {
        let memberSender = memberList.find(obj => obj.accountNo === senderAccount);
        if (memberSender !== undefined) {
            setTargetSender(memberSender);
        } else {
            setTargetSender({});
        }
    }, [senderAccount]);

    useEffect(() => {
        let memberReceiver = memberList.find(obj => obj.accountNo === receiverAccount);
        if (memberReceiver !== undefined) {
            setTargetReceiver(memberReceiver);
        } else {
            setTargetReceiver({});
        }
    }, [receiverAccount]);

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== targetSender.accountNo && obj.accountNo !== targetReceiver.accountNo));
    }, [targetSender, targetReceiver, transfer]);

    // Event Handlers
    const handleTransfer = (e) => {
        e.preventDefault();
        let history = {
            type: "transfer",
            amount: transfer,
            sender: senderAccount,
            receiver: receiverAccount
        }
        if (parseInt(transfer) <= parseInt(targetSender.balance)) {
            targetSender.history.unshift(history);
            targetReceiver.history.unshift(history);
            transactionHistory.unshift(history);
            targetSender.balance = parseInt(targetSender.balance) - parseInt(transfer);
            targetReceiver.balance = parseInt(targetReceiver.balance) + parseInt(transfer);
            filter.push(targetSender, targetReceiver);
            localStorage.setItem("memberList", JSON.stringify(filter));
            localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
            alert(`Trasferred ${transfer} from ${targetSender.firstName} ${targetSender.lastName} to ${targetReceiver.firstName} ${targetReceiver.lastName}`);
            setSenderAccount(targetSender.accountNo);
            setReceiverAccount(targetReceiver.accountNo);
            setTransfer("");
        } else {
            alert(`Transaction Failed: Insufficient Bank Funds`);
            setError("Transaction Failed: Insufficient Bank Funds");
        }
    }

    return (

        <form onSubmit={(e) => { handleTransfer(e) }} className="form-trans trans">

            <h2>Sender</h2>
            <br />
            <label>
                Account Number {""}
                <input
                    type="text"
                    value={senderAccount}
                    onChange={(e) => { setSenderAccount(e.target.value) }}
                    required />
            </label>

            <br />

            <div className="trans-details">
                <h3>Account Name: <span>{targetSender.firstName} {targetSender.lastName}</span></h3>
                <h3>Balance: <span>Php {targetSender.balance}</span></h3>
            </div>

            <br />
            <h2>Receiver</h2>
            <br />
            <label>
                Account Number {""}
                <input
                    type="text"
                    value={receiverAccount}
                    onChange={(e) => { setReceiverAccount(e.target.value) }}
                    required />
            </label>

            <br />

            <div className="trans-details">
                <h3>Account Name: {targetReceiver.firstName} {targetReceiver.lastName}</h3>
                <h3>Balance: <span>Php {targetReceiver.balance}</span></h3>
            </div>

            <br />

            <label>
                Transfer Amount {""}
                <input
                    type="number"
                    value={transfer}
                    min={1}
                    onChange={(e) => { setTransfer(e.target.value); setError(""); }}
                    required />
                <h5>{error}</h5>
            </label>

            <br />

            <button
                type="submit"
                className="btn solid yellow"
            >
                Transfer
            </button>

        </form>
    )
}

export default Transfer
