import React, { Component } from "react";

export default class Udating2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name2: this.props.name1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Called..");
    if (props.name1 !== state.name2) {
      return { name2: props.name1 };
    }
    return null;
  }
  render() {
    return (
      <div>
        Udating2
        <h1>{this.state.name2}</h1>
      </div>
    );
  }
}
