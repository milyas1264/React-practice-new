import React, { Component } from "react";
import "./CssStyleSheet.css";

export default class CssStyleSheet extends Component {
  render() {
    let x = this.props.check ? "myfont1" : "myfont2";
    return (
      <div>
        <h2>Css Style Sheet for test</h2>
        <h1 className={`${x} myfont3`}>My name is muhammad Ilyas</h1>
      </div>
    );
  }
}
