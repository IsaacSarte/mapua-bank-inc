import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

// CSS

// Components
/* import Sidebar from '../../components/Sidebar/Sidebar'; */
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
        
        <div>
        {/* <Sidebar /> */}

            <button>
                <NavLink to="/admin" exact>Go Back</NavLink>
            </button>

            <div>
                <section 
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
                    onClick={() => {
                        setDeposit(false);
                        setWithdraw(false);
                        setTransfer(true);
                     }}>
                    Transfer
                </section>
            </div>

            <div>
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

export default Transaction
