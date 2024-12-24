import React , { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header'>
            <img src="/logo1.png"/>
            <FontAwesomeIcon 
                icon={faBars} 
                className='menu-icon'
                onClick={toggleMenu}
            /> 

            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/Product">Products</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;