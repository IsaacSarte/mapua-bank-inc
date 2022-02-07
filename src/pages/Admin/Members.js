import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS

// Components
/* import Sidebar from '../../components/Sidebar/Sidebar'; */

const Members = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));


    return (
        <div>
            {/* <Sidebar /> */}

            <section> 

                <div>
                    <h1>IchiBank Members</h1>
                    <button>
                        <NavLink to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div>
                    {memberList.map(obj => 
                        <div>
                            <span>{obj.firstName}&nbsp;{obj.lastName}</span>
                            <span>{obj.username }</span>
                            <span>{obj.accountNo}</span>
                            <span>{obj.balance}</span>  
                        </div>)}
                </div>

            </section>

            
        </div>
    )
}

export default Members
