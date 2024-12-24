import React from "react";
import "./PolymerBlendsAlloys.css";

const PolymerBlendsAlloys = () => {
  console.log("c")
  return (
    <div className="polymer-blends-alloys">
      <h1>Polymer Blends & Alloys</h1>
      <p>
        Our Polymer Blends and Alloys are engineered to provide unique performance 
        characteristics by combining different polymers. They offer exceptional 
        flexibility, strength, and resilience for a wide range of applications.
      </p>
      <br/>

      <div class="product-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="product-cards">
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 1" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Calcium/TALC filled PP</h3>
                            <p class="product-description">Description of product 1.</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 2" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Calcium/TALC filled PE</h3>
                            <p class="product-description">Description of product 2.</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Desiccant Anti Moisture Masterbatches</h3>
                            <p class="product-description">Description of product 3.</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Sodium Filler</h3>
                            <p class="product-description">Description of product 3.</p>
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
                      <h3>Enhanced mechanical properties</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K2.png" alt="High Dispersion" />
                    <div className="feature-text">
                      <h3>Better chemical compatibility</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K3.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Tailored solutions for specific applications</h3>
                   </div>
                  </div>
                </div>
        <div/>
      </div>
    </div>
  );
};

export default PolymerBlendsAlloys;
