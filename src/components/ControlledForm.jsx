import React, { Component } from "react";

export default class ControlledForm extends Component {
  render() {
    return (
      <div>
        <h3>ControlledForm</h3>
        <form>
          <label htmlFor="">Enter Name:</label>
          <input type="text" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
