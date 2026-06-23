import React, { useState } from "react";

function UsArray() {
  let num = [11, 22, 33, 44];
  let [numbers, setNumbers] = useState(num);
  // let changeValue = () => {
  //   setNumbers([22, 44, 66, 88]);
  // };

  let changeValue = () => {
    setNumbers((previousState) => {
      return [
        ...previousState,
        //99
        Math.floor(Math.random() * 50),
      ];
    });
  };
  return (
    <div>
      <h3>Use State Array</h3>
      <ul>
        {numbers.map((n, i) => {
          return <li key={i}>{n}</li>;
        })}
      </ul>
      <button onClick={changeValue}>Change value</button>
    </div>
  );
}

export default UsArray;
