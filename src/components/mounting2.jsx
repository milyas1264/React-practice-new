import React, { Component } from "react";

export default class Mounting2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lahori Munna",
    };
    console.log("Mounting 2 Construtor invoke...");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting 2 getDerivedStateFromProps invoke");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount2 invoke...");
  }

  render() {
    console.log("Mounting 2 render invoke....");
    return (
      <div>
        Mounting2
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}
