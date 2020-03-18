import React, { Component } from "react";

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
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={this.homeNav()}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.labsNav()}>
                  Labs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.infoNav()}>
                  Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.imagesNav()}>
                  Images
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
