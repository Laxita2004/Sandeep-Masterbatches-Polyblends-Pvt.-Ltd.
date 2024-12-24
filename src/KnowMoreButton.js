import React from "react";
import { useNavigate } from "react-router-dom";
import './KnowMoreButton.css'

function KnowMoreButton() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/Product");
    };

    return (
        <div>
            <button onClick={handleRedirect} className="know-more-btn">
                Know More
            </button>
        </div>
    );
}

export default KnowMoreButton;