import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import register from '../../../images/register.svg';

// CSS
import './signin.css';

// Framer Motion
import { motion } from 'framer-motion';

const SignIn = (props) => {

    // Destructured Properties
    const { setAdminActive, setNewAdmin } = props;
    const adminMembers = JSON.parse(localStorage.getItem("adminMembers"));

    // States
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error States
    const [errorUserEmail, setErrorUserEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    // Event Handlers
    const handleSignIn = () => {
        let target = adminMembers.find(obj => obj.email === userEmail || obj.username === userEmail);
        if (target === undefined) {
            setErrorUserEmail("User does not exist");
        } else {
            if (target.password !== password) {
                setErrorPassword("Incorrect password");
            } else {
                localStorage.setItem("adminActive", true);
                localStorage.setItem("adminUser", JSON.stringify(target));
                setAdminActive(true);
                console.log('Admin logged in successfully');
            }
        }
    }

    const handleSignUp = () => {
        setNewAdmin(true);
    }

    return (
        <div className="admin-login-container">
            <div className="forms-container">
                <div className="login-signup">
                    <form className="log-in-form">
                        <h2 class="title">MU Bank Admin Log in</h2>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Enter your username or email"
                                value={userEmail}
                                onChange={(e) => { setUserEmail(e.target.value.trim()); setErrorUserEmail(""); }}
                                required
                            />
                        </div>
                        <h5>{errorUserEmail}</h5>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setErrorPassword(""); }}
                                required
                            />
                        </div>
                        <h5>{errorPassword}</h5>
                        <button
                            type="button"
                            onClick={handleSignIn}
                            className="btn solid"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <motion.h3
                            initial={{ opacity: 0, marginLeft: '-5rem' }}
                            animate={{ opacity: 1, marginLeft: '0rem' }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            New to MU Bank Inc?
                        </motion.h3>
                        <p>Sign Up now if you are an employee to MU Bank Inc</p>
                        <div className="btn-left-panel">
                            <button className="btn transparent" id="admin-btn" onClick={handleSignUp}>
                                Sign Up
                            </button>
                            <NavLink to="/">
                                <button className="btn transparent" id="admin-btn">
                                    HOME
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <motion.img src={register} alt="log bg" className="image-admin"
                        initial={{ opacity: 0, marginLeft: '-5rem' }}
                        animate={{ opacity: 1, marginLeft: '0rem' }}
                        transition={{ duration: 1, delay: 0 }}
                    />
                </div>
            </div>
        </div>
        /*         <div>
                    <div>
        
                        <section>
        
                            <label
                                initial={{ opacity: 0, x: '-15vw' }}
                                animate={{ opacity: 1, x: '0vw' }}
                                transition={{ duration: 1, delay: 0 }}
                            >
                                Username | Email <br /><br />
                                <input
                                    type="text"
                                    placeholder="Enter your username or email"
                                    value={userEmail}
                                    onChange={(e) => { setUserEmail(e.target.value.trim()); setErrorUserEmail(""); }}
                                    required
                                />
                                <h5>{errorUserEmail}</h5>
                            </label>
        
                            <label
                                initial={{ opacity: 0, x: '15vw' }}
                                animate={{ opacity: 1, x: '0vw' }}
                                transition={{ duration: 1, delay: 0 }}
                            >
                                Password <br /><br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrorPassword(""); }}
                                    required
                                />
                                <h5>{errorPassword}</h5>
                            </label>
        
                            <button
                                onClick={handleSignIn}
                            >Sign In</button>
        
                            <p>
                                Don't have an Admin account?
                                &nbsp;
                                <span
                                    onClick={handleSignUp}>
                                    Sign Up
                                </span>
                            </p>
        
                        </section>
        
                    </div>
                </div> */
    )
}

export default SignIn
