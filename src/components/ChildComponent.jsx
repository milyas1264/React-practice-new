import React, { Component } from "react";

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h3>ChildComponent</h3>
//         {/* <button onClick={this.props.callMethod}>Click Me</button> */}
//         <button onClick={() => this.props.callMethod("Ilyas", "ansari")}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }

// Functional Component

export default function ChildComponent(props) {
  return (
    <div>
      ChildComponent
      <button onClick={() => props.callMethod("Ilyas", "ansari")}>
        Clik Me
      </button>
    </div>
  );
}
