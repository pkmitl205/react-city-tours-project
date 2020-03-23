import React from "react";
import logo from '../../logo.svg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company"></img>
            <ul className="nav-links">
                <li href="/" className="nav-link">home</li>
                <li href="/" className="nav-link">about</li>
                <li href="/" className="nav-link active">tours</li>
            </ul>
        </nav>
    )
}

export default Navbar