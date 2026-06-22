import React from "react";
import Studentobj from "./Studentobj";

function Students() {
  let students = ["Ali", "Kamal", "Zhaoor", "Jamal"];
  // let numbers = [2, 4, 6, 8, 10];
  // let Result = numbers.map((num) => <h1> {(num = num * 3)}</h1>);

  const objStudents = [
    {
      name: "Ali",
      age: 23,
    },
    {
      name: "Aliza",
      age: 21,
    },
    {
      name: "Blina",
      age: 20,
    },
  ];

  let objResult = objStudents.map(
    (val) => <Studentobj val={val} />,
    // <h1>
    //   I am {val.name} and I am {val.age} old.
    // </h1>
  );
  return (
    <div>
      <h3>Students array or List</h3>
      {students.map((std) => (
        <h1>{std}</h1>
      ))}

      {/* {numbers.map((num) => (
        <h1> numbers :{(num = num * 3)}</h1>
      ))} */}
      {/* {Result} */}
      {objResult}
    </div>
  );
}

export default Students;
