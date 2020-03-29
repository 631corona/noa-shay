import React, { Component } from "react";
import pic1 from "../../images/1e988c56-0032-40a4-bba3-0262905f4531.jpg";
import pic2 from "../../images/0b04c15d-51e1-4707-923a-8b0ac59f407a.jpg";
import "./image-gallery.css";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="heading-text font-weight-light">Image Gallery</h1>
          <h6>some of our best people in great situations</h6>
        </div>

        <div className="images">
          <img src={pic1} alt="yossi"></img>
          <img src={pic2} alt="ears of aman"></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
