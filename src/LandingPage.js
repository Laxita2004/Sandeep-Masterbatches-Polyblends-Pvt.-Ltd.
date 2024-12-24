import React from "react";
import './LandingPage.css';
import KnowMoreButton from "./KnowMoreButton";
import './KnowMoreButton.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Quicksand:wght@300..700&display=swap');
</style>

const LandingPage = () => {
    return (
        <div className="landing">
            <img src="/Welcome To.png"/>
            <KnowMoreButton />
        </div>
    );
};

export default LandingPage;