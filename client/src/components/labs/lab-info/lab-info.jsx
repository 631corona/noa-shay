import React, { Component } from "react";
import "./lab-info.css";

const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
];

class LabInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRandomColorClass = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      console.log("color selected:", randomColor);
      const className = "card text-white bg-" + randomColor + " mb-3"
      return className;
  }

  render() {
    return (
      <div>
        <div class={this.getRandomColorClass()}>
          <div class="card-header">
            Lab Name: {this.props.labName}
            <button type="button" class="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Success Rate:</h5>
            <p class="card-text">{this.props.successRate}</p>
            <h5 class="card-title">Status:</h5>
            <p class="card-text">{this.props.status}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LabInfo;
