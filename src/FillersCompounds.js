import React from "react";
import "./FillersCompounds.css";

const FillersCompounds = () => {
  return (
    <div className="fillers-compounds">
      <h1>Fillers & Compounds</h1>
      <p>
        Our Fillers and Compounds are designed to enhance the performance and 
        cost-effectiveness of your plastic products. They are engineered to meet 
        diverse industrial needs with high quality and reliability.
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
                      <h3>Improved mechanical properties</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K2.png" alt="High Dispersion" />
                    <div className="feature-text">
                      <h3>Cost-effective solutions</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K3.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Excellent compatibility with various polymers</h3>
                   </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K3.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Customizable filler compositions</h3>
                   </div>
                  </div>
                </div>
        <div/>
      </div>
    </div>
  );
};

export default FillersCompounds;
