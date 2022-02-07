import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import log from '../../../images/log.svg';

// CSS
import './clientmember.css';

const ClientMember = (props) => {

    // Destructured Properties
    const { setClientActive, setBankMember } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    // States
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error States
    const [errorUserEmail, setErrorUserEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");


    // Event Handlers
    const handleSignIn = () => {

        let target = memberList.find(obj => obj.email === userEmail || obj.username === userEmail);
        if (target === undefined) {
            setErrorUserEmail("User does not exist");
        } else {
            if (target.password !== password) {
                setErrorPassword("Incorrect password");
            } else {
                localStorage.setItem("clientActive", true);
                localStorage.setItem("clientUser", JSON.stringify(target));
                setClientActive(true);
            }
        }


    }

    return (
        <div className="client-login-container">
            <div className="forms-container">
                <div className="login-home">
                    <form className="log-in-form">
                        <h2 className="title">Log in to MU Bank Inc</h2>
                        <div className="input-field">
                            {/* log in icon user */}
                            <input
                                type="text"
                                placeholder="Enter your username or email"
                                value={userEmail}
                                onChange={(e) => { setUserEmail(e.target.value.trim()); setErrorUserEmail(""); }}
                                required
                            />
                            {/* <h5>{errorUserEmail}</h5> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setErrorPassword(""); }}
                                required
                            />
                        </div>
                        <button
                            onClick={handleSignIn}
                            className="btn solid"
                        >
                            Log In
                        </button>
                        <p className="social-text">Follow us with our social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>One of Us?</h3>
                        <p>Log in now using your Admin email to get admin privilages</p>
                        <div className="btn-left-panel">
                            <NavLink to="/admin">
                                <button className="btn transparent" id="admin-btn">
                                    Admin
                                </button>
                            </NavLink>
                            <NavLink to="/">
                                <button className="btn transparent" id="admin-btn">
                                    HOME
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <img src={log} alt="log bg" className="image-admin" />
                </div>
            </div>

            {/*             <label>
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

            <label>
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
            >Sign In
            </button> */}

        </div>
    )
}

export default ClientMember
