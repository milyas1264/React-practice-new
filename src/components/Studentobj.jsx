import React from "react";

function Studentobj({ val }) {
  return (
    <div>
      <h1>
        {" "}
        I am {val.name} and I am {val.age} old.{" "}
      </h1>
    </div>
  );
}

export default Studentobj;
