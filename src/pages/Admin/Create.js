import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../images/logo.png';

// CSS
import './create.css';

// Framer Motion
import {motion} from 'framer-motion';

// Components
import AccountNo from '../../Components/Admin/Hero/Create/AccountNo'
import Sidebar from '../../Components/Sidebar/Sidebar';

const Create = () => {

    // Destructured Properties
    const adminActive = JSON.parse(localStorage.getItem("adminActive"));
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    let totalBalance = JSON.parse(localStorage.getItem("totalBalance"));

    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [balance, setBalance] = useState(2000);
    
    // Error States
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [disableButton, setDisableButton] = useState(false);
    const [disableUsername, setDisableUsername] = useState(false);
    const [disableEmail, setDisableEmail] = useState(false);
    const [disablePassword, setDisablePassword] = useState(false);
    const [disablePasswordCheck, setDisablePasswordCheck] = useState(false);

    // Effects
    useEffect(() =>{
        let target = memberList.find(obj => obj.username === username);
        if(target !== undefined) {
            setErrorUsername("Username already taken");
            setDisableButton(true);
            setDisableEmail(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorUsername("");
            setDisableButton(false);
            setDisableEmail(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    },[username]);

    useEffect(() => {
        let target = memberList.find(obj => obj.email === email);
        if(target !== undefined) {
            setErrorEmail("Email already in use");
            setDisableButton(true);
            setDisableUsername(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorEmail("");
            setDisableButton(false);
            setDisableUsername(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    },[email])

    useEffect(() => {
        if(password !== passwordCheck) {
            setErrorPassword("Passwords do not match");
            setDisableButton(true);
            setDisableUsername(true);
            setDisableEmail(true);
        } else {
            setErrorPassword("");
            setDisableButton(false);
            setDisableUsername(false);
            setDisableEmail(false);
        }
    },[password,passwordCheck])

    // Event Handlers
    const onGenerate = accountNo =>{
        setAccountNo(accountNo);
    }


    const handleCreate = (e) => {
        e.preventDefault();
        let memberData = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            username: username,
            password: password,
            accountNo: accountNo,
            balance: balance,
            expense: [],
            history: []
        }
        memberList.push(memberData);
        localStorage.setItem("memberList", JSON.stringify(memberList));
        totalBalance += parseInt(balance);
        localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
        window.location.reload();
        alert(`Account Created: ${firstName} ${lastName} | ${accountNo}`);
    }

    return (
        <div>
            {adminActive 
                ? 
                    <>
                        <NavLink to="/">
                            <img src={logo} alt="logo header" className="dashboard-logo" />
                        </NavLink>
                        <Sidebar />
                        <div className="admin-create-account">
                            <div className="admin-create-container">
                                <div className="admin-create-title">
                                    <h1>Create New Account Holder</h1>
                                </div>
                                <div className="admin-create-content">
                                <motion.form onSubmit={(e) => handleCreate(e)} className="form"
                                    initial={{ opacity: 0, marginLeft: '-5rem' }}
                                    animate={{ opacity: 1, marginLeft: '0rem' }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                >
                                    <div className="admin-create-details">
                                        <div className="input-box">
                                            <span className="details">First Name</span>
                                            <input 
                                                initial={{ opacity: 0, x: '-15vw' }}
                                                animate={{ opacity: 1, x: '0vw' }}
                                                transition={{ duration: 1, delay: 0 }}
                                                type="text" 
                                                value={firstName} 
                                                placeholder="First Name"
                                                onChange={(e) => {setFirstName(e.target.value)}}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Last Name</span>
                                            <input
                                                initial={{ opacity: 0, x: '15vw' }}
                                                animate={{ opacity: 1, x: '0vw' }}
                                                transition={{ duration: 1, delay: 0 }}
                                                type="text"
                                                value={lastName}
                                                placeholder="Last Name"
                                                onChange={(e) => {setLastName(e.target.value)}}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Phone Number</span>
                                            <input 
                                                type="tel"
                                                value={phone}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1 }}
                                                placeholder="Phone Number"
                                                pattern="[0][9][0-9]{2}-[0-9]{3}-[0-9]{4}"
                                                placeholder="09XX-XXX-XXXX"
                                                onChange={(e) => {setPhone(e.target.value)}}
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Email</span>
                                            <input 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1.15 }}
                                                type="email" 
                                                value={email}
                                                placeholder="Email"
                                                onChange={(e) => {setEmail(e.target.value.trim())}}
                                                disabled={disableEmail}
                                                required
                                            />
                                            <h5>{errorEmail}</h5>
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Username</span>
                                            <input 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1.25 }}
                                                type="text" 
                                                value={username}
                                                placeholder="Username"
                                                onChange={(e) => {setUsername(e.target.value.trim())}}
                                                disabled={disableUsername}
                                                required
                                            />
                                            <h5>{errorUsername}</h5>
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Password</span>
                                            <input 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1.35 }}
                                                type="password" 
                                                value={password}
                                                onChange={(e) => {setPassword(e.target.value)}}
                                                placeholder="Input password"
                                                disabled={disablePassword}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Confirm Password</span>
                                            <input 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1.35 }}
                                                type="password" 
                                                value={passwordCheck}
                                                onChange={(e) => {setPasswordCheck(e.target.value)}}
                                                placeholder="Confirm password"
                                                disabled={disablePasswordCheck}
                                                required
                                            />
                                            <h5>{errorPassword}</h5>
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Account Number</span>
                                            <AccountNo onGenerate = {onGenerate}/>
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Initial Deposit</span>
                                            <input
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1.5 }}
                                                type="number"
                                                value={balance}
                                                placeholder="Min: 2000"
                                                min="2000"
                                                onChange={(e) => {setBalance(e.target.value)}}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="button">
                                        <button 
                                            type="submit" 
                                            disabled={disableButton}
                                            className="btn solid left-btn"
                                        >
                                            Create Account
                                        </button>
                                        <div className="button-down">
                                            <button 
                                                type="button"
                                                className="btn solid right-btn"
                                            >
                                                <NavLink to="/admin" exact className="admin-back-btn">Cancel</NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </motion.form>
                                </div>
                            </div>
                        </div>
                    </>
                : 
                    <div>Please Log In to continue</div>}
        </div>
    )
}

export default Create;