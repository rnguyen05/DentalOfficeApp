import React from "react";
import Img from "../img/dental-studio.jpg";
import "./banner.css";
import Navbar from "../Navbar";

const Banner = () => {
  return (
    <div className="w3-display-container">
      <img className="img-style" src={Img} alt="banner" />
      <div className="w3-display-topright container">
        <Navbar />
      </div>
    </div>
  );
};

export default Banner;
