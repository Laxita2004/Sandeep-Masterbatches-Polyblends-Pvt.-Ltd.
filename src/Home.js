import React from "react";
import "./Home.css";
import Slideshow from "./Slideshow";
import KnowMoreButton from "./KnowMoreButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faStar,
  faPlaneDeparture,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>;

const Home = () => {
  return (
    <div className="home">
      <section className="intro">
        <div className="who-we-are">
          <div className="overview">
            <h2>Who we are?</h2>
            <p>
              {" "}
              We are one of India’s leading manufacturers of White, Black,
              Color, and Additive masterbatches, catering to a wide range of
              applications such as Film Extrusion, Pipe Extrusion, Injection
              Moulding, Blow Moulding, and Rotational Moulding.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="icon-feature">
                <FontAwesomeIcon icon={faGem} style={{ color: "#f1cb02" }} />
              </div>
              <span className="red-text">Perfection</span>
              <p>
                Our masterbatches have optimal color strength, dispersion, and
                stability, resulting in superior end-products.
              </p>
            </div>

            <div className="feature">
              <div className="icon-feature">
                <FontAwesomeIcon icon={faStar} style={{ color: "#f1cb02" }} />
              </div>
              <span className="red-text">Quality</span>
              <p>Details about quality...</p>
            </div>

            <div className="feature">
              <div className="icon-feature">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  style={{ color: "#f1cb02" }}
                />
              </div>
              <span className="red-text">Modern</span>
              <p>Details about modern...</p>
            </div>

            <div className="feature">
              <div className="icon-feature">
                <FontAwesomeIcon icon={faFlask} style={{ color: "#f1cb02" }} />
              </div>
              <span className="red-text">Tested</span>
              <p>Details about tested...</p>
            </div>
          </div>
        </div>

        <div className="benefits">
          <h3>
            <span>Applications</span> of Our Compounds
          </h3>
          <div className="properties">
            <div className="property">
              <div className="front">
                <div className="circle-image">
                  <img src="Furniture Industries.png" />
                </div>
                <p className="front-text">Furniture Industries</p>
              </div>
              <div className="back">
                <p>
                  Our compounds are widely used in the manufacturing of various
                  furniture products, ensuring durability, strength, and
                  aesthetic appeal. Used in Chairs, Tables, Teapoys, and more.
                </p>
              </div>
            </div>

            <div className="property">
              <div className="front">
                <div className="circle-image">
                  <img src="Automobile Industries.png" />
                </div>
                <p className="front-text">Automobile Industries</p>
              </div>
              <div className="back">
                <p>
                  The automobile sector extensively utilizes our compounds to
                  enhance performance, reliability, and design of components.
                  Applications include Dashboards, Mudguards, Radiators, Grills,
                  Fan Blades, Oil Filter Housings, Door Hinges, Wipers, Battery
                  Components, Side Panels, and Gears.
                </p>
              </div>
            </div>

            <div className="property">
              <div className="front">
                <div className="circle-image">
                  <img src="Household.png" />
                </div>
                <p className="front-text">Household Appliances</p>
              </div>
              <div className="back">
                <p>
                  Our compounds play a crucial role in improving the
                  functionality, design, and durability of household appliances.
                  Found in Washing Machines, Aircooler Bodies, Vacuum Cleaners,
                  Water Filters, Bath Tubs, Picnic Wares, Electric Heaters, and
                  Toys.
                </p>
              </div>
            </div>

            <div className="property">
              <div className="front">
                <div className="circle-image">
                  <img src="Electrical.png" />
                </div>
                <p className="front-text">Electrical Appliances</p>
              </div>
              <div className="back">
                <p>
                  Our high-quality compounds are integral to the electrical
                  industry, delivering precision, safety, and reliability. Ideal
                  for MCB’s Electrical Connectors, Electrical Motor Housings,
                  Mixer Bodies, Electrical Switches, and Plugs.
                </p>
              </div>
            </div>
          </div>
          <br />
          <KnowMoreButton />
        </div>
      </section>

      <section className="tech-edge-section">
        <h2 className="tech-edge-heading">Technical Edge</h2>
        <p>
          {" "}
          <span className="brick-text">
            Sandeep Masterbatches & Polyblends Pvt. Ltd.{" "}
          </span>
          (SMPPL) is dedicated to excellence in quality, performance, and
          customer service. The company is committed to providing superior
          quality to its esteemed customers through rigorous quality control
          tests, approval phases, and extensive research and development in
          laboratory settings. The color matching process begins with the
          expertise of engineers, specialists, and trained staff who utilize
          advanced color matching software and spectrophotometers to ensure
          precise shades. Compounds are custom-tailored to meet customers' exact
          specifications after thorough physical and chemical testing.
          <br /> <br />
          Today, SMPL is a leader in technology, staying ahead of competitors
          through continuous advancements. Its laboratory experts conduct
          in-depth research on new materials, color pigments, and dye tests on
          raw materials. The company ensures consistency and reliability by
          carefully preparing samples and performing checks on each lot, meeting
          all application requirements. SMPL offers high-quality products that
          adhere to international standards, solidifying its strong position in
          the masterbatches and compounds industry.
        </p>
        <br /> <br />
        <Slideshow />
      </section>
    </div>
  );
};

export default Home;
