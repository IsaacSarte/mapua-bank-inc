import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';
import waves4 from '../../images/waves4.svg';

// CSS
import './transactions.css';

// Components
import Sidebar from '../../Components/Sidebar/Sidebar';
import Deposit from '../../Components/Admin/Hero/Transactions/Deposit/Deposit'
import Withdraw from '../../Components/Admin/Hero/Transactions/Withdraw/Withdraw'
import Transfer from '../../Components/Admin/Hero/Transactions/Transfer/Transfer'

const Transaction = () => {

    // States
    const [deposit, setDeposit] = useState(true);
    const [withdraw, setWithdraw] = useState(false);
    const [transfer, setTransfer] = useState(false);

    return (
        <div>
            <NavLink to="/" className="nav">
                <img src={logo} alt="logo header" className="dashboard-logo" />
            </NavLink>
            <Sidebar/>
            <div className="admin-logged-in">
                <h1>MU Bank Inc. <br/> Create Transaction </h1>
                <button 
                    type="button"
                    className="btn solid"
                >
                    <NavLink to="/admin" exact className="admin-back-btn">GO Back</NavLink>
                </button>
            </div>
            
            <div className="admin-transactions-container">
                <div className="admin-transactions-select">
                    <section 
                        className="deposit-section"
                        onClick={() => {
                            setDeposit(true);
                            setWithdraw(false);
                            setTransfer(false);
                            console.log(transfer);
                        }}>
                        Deposit
                    </section>
                    <section 
                        onClick={() => {
                            setDeposit(false);
                            setWithdraw(true);
                            setTransfer(false);
                        }}>
                        Withdraw
                    </section>
                    <section 
                        className="transfer-section"
                        onClick={() => {
                            setDeposit(false);
                            setWithdraw(false);
                            setTransfer(true);
                        }}>
                        Transfer
                    </section>
                </div>

                <div className="admin-transactions">
                    {deposit 
                        ? <Deposit/>
                        : withdraw 
                            ? <Withdraw/>
                            : <Transfer/>}
                </div>
            </div>
            <img src={waves4} alt="admin-logo" className="admin-wave"/>
        </div>
    )
}

export default Transaction;