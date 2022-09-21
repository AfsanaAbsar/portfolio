import React from 'react';
import './MyHeader.css'
import { Link } from "react-router-dom";
const MyHeader = () => {
    return (
        <>
            <nav className='nav-bar'>

                <div>

                    <Link to="/home" className='nav-item'>Home</Link>
                    <Link to="/projects" className='nav-item'>PROJECTS</Link>
                    <Link to="/about" className='nav-item'>ABOUT ME</Link>


                </div>
            </nav>
        </>
    );
};

export default MyHeader;