import React, { Component } from "react";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "Hellow World",
    //   age: 23,
    //   gender: "male"
    // };
  }

  //without contructor

  state = {
    name: "This is a without construtor",
    age: 23,
    gender: "male",
  };
  
  textChange = () => {
    this.setState({
      name: this.props.name,
      age: 56,
      gender: "female",
    });
  };

  render() {
    return (
      <div>
        Employee class
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.gender}</h1>
        <input
          type="button"
          value="Click"
          onClick={() => {
            this.textChange();
          }}
        />
      </div>
    );
  }
}
