import React, { useState } from "react";

function UsWithObj() {
  let obj = {
    name: "Ilyas",
    age: 55,
    height: 5.6,
    isYoung: false,
  };
  let [person, setPerson] = useState(obj);
  let changeState = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Kashif",
        age: 25,
        isYoung: true,
      };
    });
    // setPerson({
    //   name: "Rashid",
    //   age: 25,
    //   height: 5.2,
    //   isYoung: true,
    // });
  };

  return (
    <div>
      <h3>Use State with Oject</h3>
      <h1>{"name:" + person.name}</h1>
      <h1>{"Age =" + person.age}</h1>
      <h1>{`Height : ${person.height} `}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default UsWithObj;
