import React from 'react';
import './Header.css' ;
import logo from '../../logo.svg';

function Header(){
    const log="../public/logo192.png"
    return (
        <div className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <h1  className="Header-h1">My Website</h1>
        </div>
    );


}

export default Header;