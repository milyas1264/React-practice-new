import React, { Component } from "react";
import Mounting2 from "./mounting2";

export default class Mounting1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ilyas",
    };
    console.log("Mounting 1 Construtor invoke...");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting 1 getDerivedStateFromProps invoke");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount1 invoke...");
  }

  render() {
    console.log("Mounting 1 render invoke....");
    return (
      <div>
        Mounting1
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <Mounting2 city="Lahore" />
      </div>
    );
  }
}
