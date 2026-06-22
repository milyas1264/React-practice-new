// import React from 'react'

// function DesturcrProps({name,age}) {
//   return (
//     <div>
//       <h1>Destructure of props</h1>
//       <h2>{name}</h2>
//       <h2>{age }</h2>
//     </div>
//   )
// }

// function DesturcrProps(props) {
//   let {name,age} = props
//     return (
//       <div>
//         <h1>Destructure of props</h1>
//         <h2>{name}</h2>
//         <h2>{age }</h2>
//       </div>
//     )
//   }

//Class component destructur
import React, { Component } from "react";

// class DesturcrProps extends Component {
//   render() {
//     let { name, age } = this.props;
//     return (
//       <div>
//         DesturcrProps
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//       </div>
//     );
//   }
// }

// Destructuring in State

class DesturcrProps extends Component {
  state = {
    name: "John",
    age: 30,
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        Destructuring in state
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    );
  }
}

export default DesturcrProps;
