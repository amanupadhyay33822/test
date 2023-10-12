import React from "react";

import "./Partners.css" 

import teific_logo from "../../assets/Home-images/teific.png";

function Partners() {
  return (
    <>
      <div className="ourPartners">
        <a href="/inactive url">Our Partners</a>
      </div>
      <div className="partners">
      <a href="https://www.teific.in" className="side-partner">
          <img loader="lazy" src={teific_logo} alt="" />
          <figcaption>Teific</figcaption>
        </a>
        <a href="https://www.teific.in">
          <img loader="lazy" src="./images/Home-images/kiet.png" alt="" />
          <figcaption>KIET Group Of Institutions</figcaption>

        </a>
        
        <a href="https://www.teific.in" className="side-partner">
          <img loader="lazy" src={teific_logo} alt="" />
          <figcaption>Teific</figcaption>

        </a>

        {/* <img loader="lazy" src={carzilla_logo} alt=""/> */}
      </div>
    </>
  );
}

export default Partners;
