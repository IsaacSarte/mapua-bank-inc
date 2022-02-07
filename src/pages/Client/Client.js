import React, {useState, useEffect} from 'react';

// Spinner
import PropagateLoader from 'react-spinners/PropagateLoader';

// Components
import Navbar from '../../Components/Navbar';
// Components
import ClientHero from '../../Components/Client/ClientHero/ClientHero'
import GuestHero from '../../Components/Client/GuestHero/GuestHero'

import ClientMember from '../../Components/Client/ClientMember/ClientMember'
import GuestMember from '../../Components/Client/GuestMember/GuestMember'
import NewGuestMember from '../../Components/Client/NewGuestMember/NewGuestMember'

// CSS
import './styles/client.css';
import {css} from "@emotion/core";


const Client = () => {
    /* State Management */

    const [loading, setIsLoading] = useState(false);

    const [clientActive, setClientActive] = useState(false);
    const [guestActive, setGuestActive] = useState(false);
    const [bankMember, setBankMember] = useState(true);
    const [guestMember, setGuestMember] = useState(true);

    // Initialize guestMembers
    if (JSON.parse(localStorage.getItem("guestMembers")) === null) {
      let guestMembers = [];
      localStorage.setItem("guestMembers", JSON.stringify(guestMembers));
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

        // Initialize clientActive
        if (JSON.parse(localStorage.getItem("clientActive")) === null) {
            localStorage.setItem("clientActive", clientActive);
        } else {
            setClientActive(JSON.parse(localStorage.getItem("clientActive")));
        }

        // Initialize guestActive
        if (JSON.parse(localStorage.getItem("guestActive")) === null) {
            localStorage.setItem("guestActive", guestActive);
        } else {
            setGuestActive(JSON.parse(localStorage.getItem("guestActive")));
        }
    },[]);


    return (
      <div className="container">
        {
          loading ? <PropagateLoader color={"#94192F"} loading={loading} css={override} size={40}/> 
            : 
          <>
            {clientActive
                ?   <ClientHero 
                        setClientActive={setClientActive}/>
                :   guestActive
                        ?   <GuestHero 
                                setGuestActive={setGuestActive}/>
                        :   bankMember 
                                ?   <ClientMember
                                        setClientActive={setClientActive} 
                                        setBankMember={setBankMember}/>
                                :   guestMember
                                        ?   <GuestMember
                                                setGuestActive={setGuestActive}
                                                setGuestMember={setGuestMember}/>
                                        :   <NewGuestMember
                                                setGuestActive={setGuestActive}/>}
          </>
        }
      </div>
    );
};

export default Client;
