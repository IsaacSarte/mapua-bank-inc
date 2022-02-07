import React, {useState, useEffect} from 'react';

// Spinner
import PropagateLoader from 'react-spinners/PropagateLoader';

// Components
import Navbar from '../../Components/Navbar';

// CSS
import './styles/admin.css';
import {css} from "@emotion/core";


const Admin = () => {
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
        }, 1500);
    },[])


    return (
      <div>
        {
          loading ? <PropagateLoader color={"#94192F"} loading={loading} css={override} size={40}/> 
            : 
          <>
            <div>
              
            </div>
          </>
        }
      </div>
    );
};

export default Admin;