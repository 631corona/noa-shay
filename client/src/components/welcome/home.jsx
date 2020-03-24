import React, { Component } from "react";
import "./home.css";
import Labs from "../labs/labs.jsx"
import ImageGallry from '../image-gallery/image-gallery.jsx'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondHeading: ["ענבר מזרחי השליטע נלחמת בקורונה"]
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="heading-text">Corona App 631</h1>
        <h4>{this.state.secondHeading[0]}</h4>
        <Labs />
        <ImageGallry />
      </div>
    );
  }
}

export default Home;
