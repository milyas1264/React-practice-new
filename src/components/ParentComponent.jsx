import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  parentMethod = (name, surname) => {
    // alert("Hellow from Parent " + name + " " + surname);
    alert(`Hellow from Parent: Name = ${name} Surname = ${surname}`);
  };

  render() {
    return (
      <div>
        <h3>ParentComponent</h3>
        <h1>Hello parent</h1>
        <ChildComponent callMethod={this.parentMethod} />
      </div>
    );
  }
}
