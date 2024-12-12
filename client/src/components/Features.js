import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { a } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Features = () => {
  return (
    <div className="feature">
      <Header />
      <div className="features-body">
        <div className="features-li">
          <a href="/home">Action</a>
          <a href="/romantic">Romantic</a>
          <a href="/documentary">Documentary</a>
        </div>
        <div className="features-h">
          <p>Through your favorite a , will find That will Match your desire</p>
          <i className="features-i" style={{ color: "black" }}>
            <AiOutlineArrowLeft />
          </i>
        </div>
      </div>
      <div className="block-div">
        <Footer />
      </div>
    </div>
  );
};

export default Features;
