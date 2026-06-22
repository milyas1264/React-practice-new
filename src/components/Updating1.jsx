import React, { Component } from "react";
import Updating2 from "./Udating2";

export default class Updating1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Ilyas Khan",
    };
  }

  stateChange = () => {
    this.setState({
      name1: "Adil Murad",
    });
  };

  render() {
    return (
      <div>
        Updating1
        <h1>{this.state.name1}</h1>
        <Updating2 name={this.state.name1} />
        <button onClick={this.stateChange}>State Change</button>
      </div>
    );
  }
}
