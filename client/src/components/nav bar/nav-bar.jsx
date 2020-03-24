import React, { Component } from "react";
import "../nav bar/nav-bar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  homeNav = () => {
    console.log("go to home");
  };

  labsNav = () => {
    console.log("go to labs");
  };

  infoNav = () => {
    console.log("go to info");
  };

  imagesNav = () => {
    console.log("go to images");
  };

  render() {
    return (
      <header className="header">
        <nav>
          <img
            className="virus-logo"
            src={require("../../images/virus.jpg")}
            alt=""
          />
          <h1 className="title">
            CoViD-19 Updates & Statistics <span className="live">Live</span>{" "}
          </h1>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
              >
                Labs
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
              >
                Info
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
              >
                Images
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
              >
                Symptoms
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html"
              >
                Protection
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
