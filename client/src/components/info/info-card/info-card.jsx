import React, { Component } from "react";

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>soliders in bidud</h1>
          <h3>20</h3>
          <icon></icon>
        </div>

        <div>
          <h1>names of soliders in bidud</h1>
          <h3></h3>
          <icon></icon>
        </div>

        <div>
          <h1>Distance between soliders</h1>
          <h3>1.8</h3>
          <icon></icon>
        </div>
      </div>
    );
  }
}

export default InfoCard;
