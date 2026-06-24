import React, { Component } from "react";

export default class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Counter: 0,
    };
  }

  Increase = () => {
    this.setState({ Counter: this.state.Counter + 1 });
  };

  Decrease = () => {
    this.setState({ Counter: this.state.Counter - 1 });
  };

  Reset = () => {
    this.setState({ Counter: (this.state.Counter = 0) });
  };

  render() {
    return (
      <div>
        <h3>Class State</h3>
        <h1>{this.state.Counter}</h1>
        <button onClick={this.Increase}>Increase</button>
        <button onClick={this.Decrease}>Decrease</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}
