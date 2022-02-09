import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';

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
                <h1>Create Transaction </h1>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="dep-svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>&nbsp;
                        Deposit
                    </section>
                    <section
                        className="witdhraw-section" 
                        onClick={() => {
                            setDeposit(false);
                            setWithdraw(true);
                            setTransfer(false);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="dep-svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>&nbsp;
                        Withdraw
                    </section>
                    <section 
                        className="transfer-section"
                        onClick={() => {
                            setDeposit(false);
                            setWithdraw(false);
                            setTransfer(true);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="dep-svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                            </svg>&nbsp;
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
        </div>
    )
}

export default Transaction;