import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>MyClass</h1>
        <h2>My name is { this.props.name}</h2>
        <h2>My age is { this.props.age}</h2>
        
      </div>
    );
  }
}

MyClass.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}