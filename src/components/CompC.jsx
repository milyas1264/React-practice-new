import React, { useContext } from "react";
import { data, data1 } from "../App.jsx";

function CompC() {
  //yehan veriable mein change kerskte hain
  const Name = useContext(data);
  const gender = useContext(data1);

  return (
    <div>
      <h3>CompC</h3>
      <h1>
        Hi my name is {myName} and my gender is {gender}
      </h1>
    </div>
  );
}

export default CompC;
