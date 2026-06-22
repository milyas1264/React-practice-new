import { useState } from "react"; 

// ⬅️ React ka hook import ho raha hai jo state banane ke liye use hota hai

function App() {
  
  const [count, setCount] = useState(0);
  // ⬅️ count ek state variable hai, setCount usay update kare ga, default value 0 hai

  function increase() {
    setCount(count + 1);
    // ⬅️ Jab button click hoga to count me 1 add hoga aur UI update hogi
  }

  function decrease() {
    setCount(count - 1);
    // ⬅️ Jab button click hoga to count me se 1 kam hoga aur UI update hogi
  }

  function reset() {
    setCount(0);
    // ⬅️ Reset button count ko dobara 0 kar dega
  }

  return (
    <div>
      {/* ⬅️ Yeh main container hai jo center me content dikha raha hai */}

      <h1>React Counter App</h1>

      <h2>Count :{count}</h2>
      {/* ⬅️ Yahan state ki value show ho rahi hai */}

      <button onClick={increase}>Increase</button>
      {/* ⬅️ Is button par click se increase function chale ga */}

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      {/* ⬅️ Is button par click se decrease function chale ga */}

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      {/* ⬅️ Is button par click se count reset ho jaye ga */}
      

    </div>
  );
}


export default App;
// ⬅️ Is component ko export kiya ja raha hai taake main.jsx use kar sake