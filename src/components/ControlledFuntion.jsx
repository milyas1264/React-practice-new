import React, { use, useState } from "react";
import "../index.css";

function ControlledFuntion() {
  const [name, setName] = useState("");
  let handleSubmission = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <h3>Controlled Form Function</h3>
      <form onSubmit={handleSubmission}>
        <label htmlFor="">Enter Your Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(
              e.target.value.toUpperCase().substring(0, 10).replace("&", "-"),
            );
          }}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledFuntion;
