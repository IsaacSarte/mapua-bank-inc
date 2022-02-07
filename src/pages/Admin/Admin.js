import React, {useState, useEffect} from 'react';

// Spinner
import PropagateLoader from 'react-spinners/PropagateLoader';

// Components
import SignIn from '../../Components/Admin/SignIn/SignIn';
import SignUp from '../../Components/Admin/SignUp/SignUp';
import Hero from '../../Components/Admin/Hero/Hero';

// CSS
import './styles/admin.css';
import {css} from "@emotion/core";


const Admin = () => {
    /* State Management */

    const [loading, setIsLoading] = useState(false);

    const [adminActive, setAdminActive] = useState(false);
    const [newAdmin, setNewAdmin] = useState(false);

    // Initialize adminMembers
    if (JSON.parse(localStorage.getItem("adminMembers")) === null) {
      let adminMembers = [];
      localStorage.setItem("adminMembers", JSON.stringify(adminMembers));
    }

    // Initialize memberList, transactionHistory, totalBalance
    if (JSON.parse(localStorage.getItem("memberList")) === null) {
        let memberList = [];
        localStorage.setItem("memberList", JSON.stringify(memberList));
    }
    if (JSON.parse(localStorage.getItem("transactionHistory")) === null) {
        let transactionHistory = [];
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
    }
    if (JSON.parse(localStorage.getItem("totalBalance")) === null) {
        let totalBalance = 0;
        localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
    }

    const override = css`
        position: absolute;
        top: 40%;
        left: 50%;
    `;

    /* useEffect */

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    },[])

    useEffect(() => {
        // Initialize adminActive
        if (JSON.parse(localStorage.getItem("adminActive")) === null) {
            localStorage.setItem("adminActive", adminActive);
        } else {
            setAdminActive(JSON.parse(localStorage.getItem("adminActive")));
        }
    },[]);


    return (
      <div className="container">
        {
          loading ? <PropagateLoader color={"#94192F"} loading={loading} css={override} size={40}/> 
            : 
          <>
            {adminActive 
                ? <Hero
                setAdminActive={setAdminActive}/>
                : newAdmin 
                    ? <SignUp 
                        setAdminActive={setAdminActive}
                        setNewAdmin={setNewAdmin}/>
                    : <SignIn
                        setAdminActive={setAdminActive}
                        setNewAdmin={setNewAdmin}/>
            }
          </>
        }
      </div>
    );
};

export default Admin;