import React, {useState, useEffect} from "react";
import "./Slideshow.css";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "MachineA.png",
            
        },
        {
            image: "MachineB.png",
            
        },
        {
            image: "MachineC.png",
           
        },
        {
            image: "MachineD.png",
            
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => 
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                    className={`slide ${index === currentSlide ? "active" : ""}`}
                    key={index}
                >
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
            ))}

            {/* Navigation Arrows */}
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>

            {/* Dots */}
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;