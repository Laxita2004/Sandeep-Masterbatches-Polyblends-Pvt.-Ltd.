import React from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBullseye, faPersonHiking } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about">
            <div className="image-container">
                <img src="Granules.png"/>
                <div class="text-overlay">About Us</div>
            </div>

            <div className="about-firm">
                <div className="img-container">
                    <img src="Factory.jpeg"/>
                    <div className="hover-text">Building</div>
                </div>
                
                <p>
                    <span className="we-are">We are...</span> <br/>
                    <span className="firm-name">
                        <span className="brick-text">Sandeep </span> 
                        Masterbatches & Polyblends Pvt. Ltd.
                    </span> <br/> <br/>
                    is one of India’s leading manufacturers of White, Black, Color, and Additive masterbatches, catering to a wide range of applications such as Film Extrusion, Pipe Extrusion, Injection Moulding, Blow Moulding, and Rotational Moulding. Our expertise lies in producing polymer-specific masterbatches, including LDPE, LLDPE, HDPE, PP, HIPS, ABS, and Nylon-based solutions.
                    <br/>
                    In addition to our diverse product range, we excel in creating customized masterbatches with unique characteristics tailored to meet the specific needs of our customers. Despite our significant growth, we remain committed to operating with the flexibility, personalized attention, and responsiveness of a small company. This approach enables us to deliver practical and innovative solutions designed to address the individual requirements of each client.
                </p>
            </div>

            <div className="about-director">
                    <h3>About <span className="brick-text">The Director</span></h3>
                    <div className="director-container">
                        <div className="img-container">
                            <img src="hero.png" alt="Director" />
                            <div className="hover-text">Mr. Sandeep K. Thakur</div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien et nulla suscipit, non convallis libero dignissim. Integer id dui sed magna pellentesque aliquet. Curabitur viverra, tortor a tincidunt pellentesque, purus est tincidunt libero, at dapibus justo sapien nec ligula. Fusce id ligula sed elit.
                        </p>
                    </div>
            </div>

            <div className="points">
                <div className="point">
                    <div className="icon-point"><FontAwesomeIcon icon={faFlag} style={{color: "#f1cb02",}} /></div>
                    <span className="brick-text">Our Vision</span>
                    <p>About our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien et nulla suscipit, non convallis libero dignissim. Integer id dui sed magna pellentesque aliquet. Curabitur viverra, tortor a tincidunt pellentesque, purus est.</p>
                </div>

                <div className="point">
                    <div className="icon-point"><FontAwesomeIcon icon={faBullseye} style={{color: "#f1cb02",}} /></div>
                    <span className="brick-text">Our Mission</span>
                    <p>About our mission Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien et nulla suscipit, non convallis libero dignissim. Integer id dui sed magna pellentesque aliquet. Curabitur viverra, tortor a tincidunt pellentesque, purus est.</p>
                </div>

                <div className="point">
                    <div className="icon-point"><FontAwesomeIcon icon={faPersonHiking} style={{color: "#f1cb02",}} /></div>
                    <span className="brick-text">Our Values & Purpose</span>
                    <p>About our values and purpose Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien et nulla suscipit, non convallis libero dignissim. Integer id dui sed magna pellentesque aliquet. Curabitur viverra, tortor a tincidunt pellentesque, purus est.</p>
                </div>
            </div>
        </div>
    );
}

export default About;