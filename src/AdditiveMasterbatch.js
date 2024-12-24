import React from "react";
import "./AdditiveMasterbatch.css";

const AdditiveMasterbatch = () => {
  return (
    <div className="additive-masterbatch">
      <h1>Additive Masterbatch</h1>
      <p>
        Our Additive Masterbatches are designed to impart enhanced properties and 
        functionalities to plastic products, meeting the diverse needs of industries. 
        From UV protection to anti-static features, our solutions are tailored to perfection.
      </p>

      <br/>

      <div class="product-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="product-cards">
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 1" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">UV Stabilizer</h3>
                            {/* <p class="product-description">Description of product 1.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 2" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Antiblock/Slip</h3>
                            {/* <p class="product-description">Description of product 2.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Clarifiers/Nucleators</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Anti-static</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Chemical Foaming Agent</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Polymer Process Aid (PPA) M.B.</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
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
                      <h3>Excellent Color Strength</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K2.png" alt="High Dispersion" />
                    <div className="feature-text">
                      <h3>High Dispersion</h3>
                    </div>
                  </div>

                  <div className="feature-card">
                    <img src="/K3.png" alt="Compatible with Various Resins" />
                    <div className="feature-text">
                      <h3>Compatible with Various Resins</h3>
                   </div>
                  </div>
                </div>
        <div/>
      </div>
    </div>
  );
};

export default AdditiveMasterbatch;
