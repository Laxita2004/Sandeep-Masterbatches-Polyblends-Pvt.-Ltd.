import React from "react";
import "./Product.css";
import ViewMore from "./ViewMore";

const Product = () => {
  return (
    <div className="product-page">
      <div className="products">
        <h1 className="pdt-title">Our Range of Products</h1>
        <br />
        <div className="categories">
          <div className="category">
            <img src="white-masterbatch.jpg" />
            <h2>Color Masterbatch</h2>
            <p>This is description</p>
            <ViewMore path="Product/ColorMasterbatch" />
          </div>

          <div className="category">
            <img src="white-masterbatch.jpg" />
            <h2>Additive Masterbatch</h2>
            <p>This is description</p>
            <ViewMore path="Product/AdditiveMasterbatch" />
          </div>

          <div className="category">
            <img src="white-masterbatch.jpg" />
            <h2>Fillers & Compounds</h2>
            <p>This is description</p>
            <ViewMore path="Product/FillersCompounds" />
          </div>

          <div className="category">
            <img src="white-masterbatch.jpg" />
            <h2>Polymer Blends/Alloys</h2>
            <p>This is description</p>
            <ViewMore path="Product/PolymerBlendAlloys" />
          </div>

          <div className="category">
            <img src="white-masterbatch.jpg" />
            <h2>Green Zone</h2>
            <p>This is description</p>
            <ViewMore path="Product/GreenZone" />
          </div>
        </div>

        <br />
        <br />
        <div className="pdt-applications">
          <h2>Our Masterbatches Find Applications </h2>
          <div className="applications">
            <div className="application-card">
                <h3>Injection Moulding</h3>
                <img src="injection-moulding.png"/>
            </div>

            <div className="application-card">
                <h3>Blow Moulding</h3>
                <img src="blow-moulding.png"/>
            </div>

            <div className="application-card">
                <h3>Roto Moulding</h3>
                <img src="roto-moulding.png"/>
            </div>

            <div className="application-card">
                <h3>Blown Films</h3>
                <img src="blow-film.png"/>
            </div>

            <div className="application-card">
                <h3>Multilayer Film</h3>
                <img src="multi-film.png"/>
            </div>

            <div className="application-card">
                <h3>Pipe Extrusion</h3>
                <img src="pipe.png"/>
            </div>

            <div className="application-card">
                <h3>Box Strappings</h3>
                <img src="box-strap.png"/>
            </div>

            <div className="application-card">
                <h3>Raffia Tapes & Woven Stacks</h3>
                <img src="raffia.png"/>
            </div>

            <div className="application-card">
                <h3>Fibres & Filaments</h3>
                <img src="fibres.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
