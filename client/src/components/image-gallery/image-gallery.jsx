import React, { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="heading-text">Image Gallery</h1>
          <h6>some of our best people in great situations</h6>
        </div>
        <div>
          <img src="./pics/0b04c15d-51e1-4707-923a-8b0ac59f407a.jpg" alt=""></img>
          <img src="./pics/1e988c56-0032-40a4-bba3-0262905f4531.jpg" alt=""></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
