import React, { Component } from "react";
import "./labs.css";
import Select from "react-select";
import LabInfo from "./lab-info/lab-info";

const labs = [
  { label: "Adi", value: "Adi" },
  { label: "Roy", value: "Roy" },
  { label: "Hen", value: "Hen" },
  { label: "Dan", value: "Dan" },
  { label: "Dvir", value: "Dvir" },
  { label: "Amit", value: "Amit" },
  { label: "Ariel", value: "Ariel" },
  { label: "Yoni", value: "Yoni" },
  { label: "Liat", value: "Liat" },
  { label: "Ofir", value: "Ofir" },
  { label: "yael", value: "yael" }
];

class Labs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      labInfo: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log("option selected:", selectedOption);
    this.state.labInfo = 
    <LabInfo 
    labName={selectedOption.value}
    successRate={}
    status={}
    />;
  };

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1 className="heading-text">Our Labs</h1>
        </div>
        <div className="labs">
          <Select
            className="drop-down-list"
            options={labs}
            onChange={this.handleChange}
            placeholder="Choose a lab"
          />
        </div>
        <div className="lab-info">{this.state.labInfo}</div>
      </div>
    );
  }
}

export default Labs;
