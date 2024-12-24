import React from "react";
import "./ColorMasterbatch.css";

const ColorMasterbatch = () => {
    return (
        
            <div className="colormasterbatch">
              <h1>Color Masterbatch</h1>
              <p>
                Our Color Masterbatch is designed to provide vibrant and consistent colors for a variety of plastic products. 
                With our expertise, you can enhance the visual appeal and quality of your products.
              </p>

              <br/>

              <div class="product-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="product-cards">
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 1" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">White Masterbatch</h3>
                            {/* <p class="product-description">Description of product 1.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/black-masterbatch.png" alt="Product 2" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Black Masterbatch</h3>
                            {/* <p class="product-description">Description of product 2.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/special-effect.png" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Special-effect Masterbatch</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/color-masterbatch.png" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Custom Color Masterbatch</h3>
                            {/* <p class="product-description">Description of product 3.</p> */}
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/white-masterbatch.jpg" alt="Product 3" class="product-image"/>
                        <div class="product-info">
                            <h3 class="product-title">Metallic & Pearl Masterbatch</h3>
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
              </div>
            </div>
          
    );
}

export default ColorMasterbatch;