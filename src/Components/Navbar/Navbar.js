import React from 'react'
import logo from '../../logo.svg';
import './navbar.scss';
export default function () {
    return (
    <nav className="navbar">
        <img src={logo} alt="city_tour logo"></img>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link" >
                about
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                tours
                </a>
            </li>
        </ul>
    </nav>
    )
}
