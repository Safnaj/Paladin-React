import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow'>
            <div className='navbar-brand'>
                <Link to="/">
                    <img src='./logo.svg' height='28' alt="logo" />
                </Link>
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        Careers
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
