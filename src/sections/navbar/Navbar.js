import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo/logo.svg';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
        </div>
    );
}