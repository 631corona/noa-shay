import React, { Component } from "react";
import "./home.css";
import Labs from "../labs/labs";
import ImageGallry from "../image-gallery/image-gallery";
import CoronaStats from "../corona-data/corona-stats";

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading-text font-weight-light">Corona App 631</h1>
      <div className="wrapper">
        <div className="corona-stats">
          <CoronaStats />
        </div>

        <div className="labs">
          <Labs />
        </div>

        <div className="image-gallery">
          <ImageGallry />
        </div>
      </div>
    </div>
  );
};

export default Home;
