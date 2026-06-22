import React, { useState } from "react";

function UsComponent() {
  const [name, setName] = useState("Ilyas");
  return (
    <div>
      <h3>Use State Component</h3>
      <h1>{name}</h1>
      <button onClick={() => setName("Ali")}> Change State</button>
    </div>
  );
}

export default UsComponent;
