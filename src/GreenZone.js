import React from "react";
import "./GreenZone.css";

const GreenZone = () => {
  return (
    <div className="green-zone">
      <h1>Green Zone</h1>
      <h2 className="brick-text manglam">By Manglam Polymers</h2>
      <p>
        Our Green Zone products are focused on sustainability and environmental 
        responsibility. These products are designed with eco-friendly materials 
        to help reduce environmental impact while maintaining superior quality.
      </p>
      <br/>

      <div class="product-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="product-cards">
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 1" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Reprocessed Plastic Granules </h3>
                            <p class="product-description">PP, HD, LD, LLDPE, ABS, HIPS, Nylon-6, EVA, etc.</p>
                        </div>
                    </div>                  
                </div>
            </div>

      <br/>
      
      <div className="key-features">
                <h2>Key Features</h2>
                <div className="feature-cards">
                  <div className="feature-card">
                    <img src="/K1.png" alt="Excellent color strength" />
                    <div className="feature-text">
                      <h3>Made from recycled or renewable materialss</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K2.png" alt="High Dispersion" />
                    <div className="feature-text">
                      <h3>Energy-efficient and low carbon footprint</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K3.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Biodegradable and compostable options available</h3>
                   </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K1.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Safe for human health and the environment</h3>
                   </div>
                  </div>
                </div>
        <div/>
      </div>
    </div>
  );
};

export default GreenZone;
