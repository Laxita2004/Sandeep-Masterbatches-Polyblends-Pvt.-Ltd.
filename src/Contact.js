import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    return (
        <div className="contact">
            <div className="form">
                <h2>Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Your email address" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message..."></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="contact-info">
                <div className="info-item">
                    <div className="info-icon"><FontAwesomeIcon icon={faMessage} style={{color: "#1b8755",}} /></div>
                    <span>+91 94240 23000</span>
                </div>

                <div className="info-item">
                    <div className="info-icon"><FontAwesomeIcon icon={faEnvelope} style={{color: "#13397c",}} /></div>
                    <span>manglam.polymers2000@gmail.com</span>
                </div>

                <div className="info-item">
                    <div className="info-icon"><FontAwesomeIcon icon={faLocationDot} style={{color: "#ca2320",}} /></div>
                    <span>
                    <span className="bold-text">Unit I: </span>
                    221, E - Sector, Behind Mehtab Tiles,
                    Sanwer Road, Industrial Area, Indore - 452015, India
                    <br/> <br/>
                    <span className="bold-text">Unit II: </span> 
                    4, Fortune Industrial Park, Survey No. 103/3,
                    Village Bhawrasla, Sector-E, Sanwer Road, Indore, M.P., India
                    </span>
                </div>

                <div className="info-item">
                    <div className="info-icon"><FontAwesomeIcon icon={faInstagram} style={{color: "#d43adf",}} /></div>
                    <span>sandeepmasterbatches</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
