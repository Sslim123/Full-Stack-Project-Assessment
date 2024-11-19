import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "./Header";
import Videos from "./images/videos.mp4";
import Footer from "./Footer";

function About() {
  return (
    <div className="about">
      <Header />
      <video autoPlay Loop muted playsInline className="bg-video">
        <source src={Videos} type="video/mp4" />
      </video>
      <CardGroup className="about-card">
        <card className="card-1">
          <h5>Who We Are</h5>
          <p>
            {" "}

            I junior developer tried to make this website to help people interact with youtube videos

          </p>
        </card>
        <card className="card-1">
          <h5>How Our Work</h5>
          <p>
            {" "}
            you can add videos , buy or watch our videos, also if you like you can download the videos it is simple
          </p>
        </card>{" "}
        <card className="card-1">
          <h5>Our Mission</h5>
          <p>
            {" "}
            Simplify your Watching , Buy or download the Movies do you like
          </p>
        </card>
      </CardGroup>
<div className="aboutFooter">
  
      <Footer />
</div>
    </div>
  );
}

export default About;
