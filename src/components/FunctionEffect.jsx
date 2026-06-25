import React, { useEffect, useState } from "react";

function FunctionEffect() {
  let [Count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello I am Effect =" + Count);
  });
  return (
    <div>
      <h3>Function Effect</h3>
      <h1>{Count}</h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default FunctionEffect;
