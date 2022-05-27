import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../images/logo/logo.png"


const Header = () => {
   
    return (
        <div className='header-container'>
            <img src={logo}alt='logo'></img>
            <nav>
                 
                <Link to="/">Home</Link>
                <Link to="/single-room">Single-Room</Link>
                <Link to="/double-room">Double-Room</Link>
                <Link to="/conference-room">Conference</Link>
                <Link to="/login">Login</Link>
                <Link to="/sing-up">SingUp</Link>
                    
            
            </nav>

        </div>
    );
};

export default Header;