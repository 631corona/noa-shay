import React, { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>Image Gallery</h1>
          <text>some of our best people in great situations</text>
        </div>
        <div>
          <img src="./pics/0b04c15d-51e1-4707-923a-8b0ac59f407a.jpg"></img>
          <img src="./pics/1e988c56-0032-40a4-bba3-0262905f4531.jpg"></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
