import React, { Component } from "react";
import "./labs.css";
import Select from "react-select";
import LabInfo from "./lab-info/lab-info";
import axios from "axios";

class Labs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      labInfo: null,
      labsNames: []
    };
  }

  getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/labs");
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  setLabNames = async () => {
    const response = await this.getData();
    const labsNames = response.map(data => {
      return { value: data.name, label: data.name };
    });
    console.log(labsNames);
    this.setState({ labsNames });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log("option selected:", selectedOption);
    this.state.labInfo = (
      <LabInfo
        labName={selectedOption.value}
        successRate={null}
        status={null}
      />
    );
  };

  componentDidMount() {
    this.setLabNames();
  }

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1 className="heading-text">Our Labs</h1>
        </div>

        <div className="labs">
          <Select
            className="drop-down-list"
            options={this.state.labsNames}
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
