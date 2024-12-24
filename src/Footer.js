import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="contact-info">
                <img className="footer-logo" src="logo1.png"/>
                <p><span className='bold-text'>Phone:</span> +91 94240 23000</p>
                <p><span className='bold-text'>Email Address:</span> mangalm.polymers2000@gmail.com</p>
                <p><span className='bold-text'>Unit I:</span> 221, E - Sector, Behind Mehtab Tiles,<br/> Sanwer Road, Industrial Area, Indore - 452015, India</p> <br/>
                <p><span className='bold-text'>Unit II:</span> 4, Fortune Industrial Park, Survey No. 103/3, <br/> Village Bhawrasla, Sector-E, Sanwer Road, Indore, M.P., India </p>
            </div>
            <div className='footer-text'>
            <p>Copyright © 2025 <span className ="brick-text">Sandeep Masterbatches & Polyblends Pvt. Ltd.</span> - All Rights Reserved.</p>
            <p>Powered by LaxiWebs</p>
            </div>
        </footer>
    );
};

export default Footer;