import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import './members.css';

// Components
import Sidebar from '../../Components/Sidebar/Sidebar';

const Members = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));


    return (
        <div>
            <Sidebar /> 
                <div className="admin-member-history">
                    <h1>MU Bank Inc. Account Holders</h1>
                    <button>
                        <NavLink to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div className="member-list">
                    {memberList.map(obj => 
                        <>
                            <br/>
                            <div>
                                <span>Full Name: {obj.firstName}&nbsp;{obj.lastName}</span><br/>
                                <span>Username: {obj.username }</span><br/>
                                <span>Account No.: {obj.accountNo}</span><br/>
                                <span>Account Balance: {obj.balance}</span><br/>
                            </div> 
                            <br/>
                        </>)}
                </div>        
        </div>
    )
}

export default Members
