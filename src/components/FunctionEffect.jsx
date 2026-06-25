import React, { useEffect, useState } from "react";

function FunctionEffect() {
  let [Count, setCount] = useState(0);
  let [name, setName] = useState("Adeel");

  //sirf aik bar chale ga
  // useEffect(() => {
  //   console.log("Hello I am Effect =" + Count);
  // }, []);

  // ye jub bhi count aur name update hongay chale ga
  // useEffect(() => {
  //   console.log("Hello I am Effect =" + Count);
  // }, [Count, name]);

  //alug alug chalen gay
  useEffect(() => {
    console.log("Hello I am Effect Count =" + Count);
  }, [Count]);

  useEffect(() => {
    console.log("Hello I am Effect Name =" + name);
  }, [name]);

  return (
    <div>
      <h3>Function Effect</h3>
      <h1>{Count}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Update State
      </button>
      <button
        onClick={() => {
          setName((name = "Fraz"));
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default FunctionEffect;
