import React, { Component } from "react";

export default class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  handleForm = (e) => {
    // console.log(e.target.value);
    this.setState({
      // data: e.target.value.toUpperCase(),
      data: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value.toUpperCase());
  };
  render() {
    return (
      <div>
        <h3>ControlledForm</h3>
        <form onSubmit={this.handleFormSubmit}>
          <h1>{this.state.data}</h1>
          <label htmlFor="">Enter Name:</label>
          <input
            type="text"
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
