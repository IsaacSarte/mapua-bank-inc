import React from 'react'
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';
import user from '../../images/programmer.png';

// CSS
import './members.css';
import './styles/memcard.css';

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
                <h1>Account Holders </h1>
                <button 
                    type="button"
                    className="btn solid"
                >
                    <NavLink to="/admin" exact className="admin-back-btn">GO Back</NavLink>
                </button>
            </div>

            <span className="hover-span">Hover to see account holder</span>

            {/*  */}
            <div className="member-list">
                <div className="container-mems">
                {memberList.map(obj => 
                        <div className= 'card-mems'>
                            <div className= 'image-mems'>
                                <img src={user} alt="augh" /><br/>
                            </div>
                        
                            <div className= 'content-mems'>
                                <span>Full Name: {obj.firstName}&nbsp;{obj.lastName}</span><br/><br/>
                                <span>Username: {obj.username }</span><br/><br/>
                                <span>Account No.: {obj.accountNo}</span><br/><br/>
                                <span className="bal">Account Balance: <span className="bal-act"><br/>Php {obj.balance}.00</span></span><br/>
                            </div>  
                        </div>
                )}
                </div>
            </div>
            {/*  */}     
        </div>
    )
}

export default Members
