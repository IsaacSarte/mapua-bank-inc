import React,{useState} from 'react'

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
        <>
            <Sidebar/>
            <div className="admin-transactions-title">
                <h1>MU Bank Inc. Account Holders Transaction</h1>
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
        </>
    )
}

export default Transaction;