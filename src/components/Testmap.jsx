 
/* eslint-disable no-unused-vars */
 
import React from 'react';

function Testmap() {
  let l = [1, 2, 3, 4, 5];
   
  let obj = {
    name : "John",
    age : 30,
    city : "New York" 
  }

  let status = "true"
  return (
    <>
      <h3 style={{color:"yellow", backgroundColor:"pink", padding:"5px"}}>map and object</h3>
      <div>{l.map((item) => <p key={item}>{item}</p>)}</div>
      <div>{"Age: " + obj.age + ", Name: " + obj.name}</div>
      <div><p>ternary operator</p>{(status === "true") ? <h2>Welcom</h2> : ""}</div>
    </>
  )

};

export default Testmap;