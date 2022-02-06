import React, {useState, useEffect} from 'react';

// Spinner
import PropagateLoader from 'react-spinners/PropagateLoader';

// Components
import Navbar from '../../Components/Navbar.jsx';
import Header from '../../Components/Header.jsx';

// CSS
import {css} from "@emotion/core";

const Home = () => {

    /* State Management */

    const [loading, setIsLoading] = useState(false);

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
        }, 2000);
    },[])

    return (
        <div className="home">
            {
                loading ? <PropagateLoader color={"#94192F"} loading={loading} css={override} size={40}/> 
                    : 
                <>
                    <Navbar />
                    <Header />
                </>
            }
        </div>
    );
};

export default Home;