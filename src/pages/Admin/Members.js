import React from 'react'
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';
import waves3 from '../../images/waves3.svg';

// CSS
import './members.css';

// Components
import Sidebar from '../../Components/Sidebar/Sidebar';

const Members = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    return (
        <div>
            <NavLink to="/" className="nav">
                <img src={logo} alt="logo header" className="dashboard-logo" />
            </NavLink>
            <Sidebar /> 
            <div className="admin-logged-in">
                <h1>MU Bank Inc. <br/> Account Holders </h1>
                <button 
                    type="button"
                    className="btn solid"
                >
                    <NavLink to="/admin" exact className="admin-back-btn">GO Back</NavLink>
                </button>
            </div>

            <hr className="hr-line"/>

            <div className="member-list">
                {memberList.map(obj => 
                     <>
                        <div className="members">
                            <br/>
                            <span>Full Name: {obj.firstName}&nbsp;{obj.lastName}</span><br/><br/>
                            <span>Username: {obj.username }</span><br/><br/>
                            <span>Account No.: {obj.accountNo}</span><br/><br/>
                            <span className="bal">Account Balance: <span className="bal-act">Php {obj.balance}</span></span><br/>
                        </div> 
                    </>)}
            </div>
            <img src={waves3} alt="wave bg" className="admin-wave" />        
        </div>
    )
}

export default Members
