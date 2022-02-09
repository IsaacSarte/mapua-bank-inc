import React, { useState, useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../../images/logo.png';

// CSS
import './signup.css';

// Framer Motion
import { motion } from 'framer-motion';

const emailReducer = (state, action) => {
    return {};
};

const SignUp = (props) => {

    // Destructured Properties
    const { setAdminActive, setNewAdmin } = props;
    const adminMembers = JSON.parse(localStorage.getItem("adminMembers"));


    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // useReducer
    const [emailState, dispatchEmail] = useReducer();

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
    useEffect(() => {
        let target = adminMembers.find(obj => obj.username === username);
        if (target !== undefined) {
            setErrorUsername("Username already taken");
            setDisableButton(true);
            // setDisableUsername(true);
            setDisableEmail(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorUsername("");
            setDisableButton(false);
            // setDisableUsername(false);
            setDisableEmail(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    }, [username]);

    useEffect(() => {
        let target = adminMembers.find(obj => obj.email === email);
        if (target !== undefined) {
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
    }, [email])

    useEffect(() => {
        if (password !== passwordCheck) {
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
    }, [password, passwordCheck])

    // Event Handlers
    const handleSignUp = (e) => {
        e.preventDefault();

        let adminUser = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
        };

        adminMembers.push(adminUser);
        localStorage.setItem("adminMembers", JSON.stringify(adminMembers));
        localStorage.setItem("adminUser", JSON.stringify(adminUser));
        localStorage.setItem("adminActive", true);
        setAdminActive(true);
        setNewAdmin(false);
    }

    const handleSignIn = () => {
        setNewAdmin(false);
    }

    return (
        <>
            <NavLink to="/">
                <img src={logo} alt="logo header" className="sign-up-logo" />
            </NavLink>
            <div className="admin-sign-up">
                <div className="admin-signup-container">
                    <div className="signup-title">
                        <h2>Welcome to MU Bank Inc Admin Privilages</h2>
                    </div>
                    <div className="signup-content">
                        <motion.form onSubmit={(e) => { handleSignUp(e) }} className="form"
                            initial={{ opacity: 0, marginLeft: '-5rem' }}
                            animate={{ opacity: 1, marginLeft: '0rem' }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <div className="admin-details">
                                <div className="input-box">
                                    <span className="details">First Name</span>
                                    <input
                                        type="text"
                                        value={firstName}
                                        placeholder="Input first name"
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name</span>
                                    <input
                                        type="text"
                                        value={lastName}
                                        placeholder="Input last name"
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input
                                        type="text"
                                        value={username}
                                        placeholder="Input username"
                                        onChange={(e) => { setUsername(e.target.value.trim()) }}
                                        disabled={disableUsername}
                                        required
                                    />
                                    <h5>{errorUsername}</h5>
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder="Input email"
                                        onChange={(e) => { setEmail(e.target.value.trim()) }}
                                        disabled={disableEmail}
                                        required
                                    />
                                    <h5>{errorEmail}</h5>
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="Input password"
                                        disabled={disablePassword}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input
                                        type="password"
                                        value={passwordCheck}
                                        onChange={(e) => { setPasswordCheck(e.target.value) }}
                                        placeholder="Confirm password"
                                        disabled={disablePasswordCheck}
                                        required
                                    />
                                    <h5>{errorPassword}</h5>
                                </div>
                            </div>

                            <div className="button">
                                <button
                                    type="submit"
                                    disabled={disableButton}
                                    className="btn solid left-btn"
                                >
                                    Sign Up
                                </button>
                                <div className="button-down">
                                    <span>Already have a MU Bank Admin Account? </span>
                                    <button
                                        className="btn solid right-btn"
                                        onClick={handleSignIn}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </>

        /*         <div>
        
                    <form onSubmit={(e) => { handleSignUp(e) }}>
        
                        <h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Welcome to IchiBank Admin Privilages! &nbsp;
                            <span>Sign Up</span> Now
                        </h1>
        
                        <br />
        
                        <label
                            initial={{ opacity: 0, x: '-15vw' }}
                            animate={{ opacity: 1, x: '0vw' }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            First Name
                            <input
                                type="text"
                                value={firstName}
                                placeholder="Input first name"
                                onChange={(e) => { setFirstName(e.target.value) }}
                                required />
                        </label>
        
                        <label
                            initial={{ opacity: 0, x: '15vw' }}
                            animate={{ opacity: 1, x: '0vw' }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            Last Name
                            <input
                                type="text"
                                value={lastName}
                                placeholder="Input last name"
                                onChange={(e) => { setLastName(e.target.value) }}
                                required />
                        </label>
        
                        <label
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Username
                            <input
                                type="text"
                                value={username}
                                placeholder="Input username"
                                onChange={(e) => { setUsername(e.target.value.trim()) }}
                                disabled={disableUsername}
                                required />
                            <h5>{errorUsername}</h5>
                        </label>
        
                        <label
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.15 }}
                        >
                            Email
                            <input
                                type="email"
                                value={email}
                                placeholder="Input email"
                                onChange={(e) => { setEmail(e.target.value.trim()) }}
                                disabled={disableEmail}
                                required />
                            <h5>{errorEmail}</h5>
                        </label>
        
                        <br />
        
                        <label
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.25 }}
                        >
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="Input password"
                                disabled={disablePassword}
                                required />
                            <br />
                            <input
                                type="password"
                                value={passwordCheck}
                                onChange={(e) => { setPasswordCheck(e.target.value) }}
                                placeholder="Confirm password"
                                disabled={disablePasswordCheck}
                                required />
                            <h5>{errorPassword}</h5>
                        </label>
        
                        <button
                            type="submit"
                            disabled={disableButton}>
                            Sign Up
                        </button>
        
                        <br />
        
                        <p>
                            Already have an Admin account?
                            &nbsp;
                            <span
                                onClick={handleSignIn}>
                                Sign in
                            </span>
                        </p>
        
                    </form>
        
                </div> */
    )
}

export default SignUp
