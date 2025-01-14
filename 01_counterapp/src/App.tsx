import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    count >= 20 ? alert("Counter value can't be more than 20") : setCount(count + 1);
  };

  const decreaseCounter = () => {
    count <= 0 ? alert("Counter value can't be less than 0") : setCount(count - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>

      <button onClick={addCounter}>Add value</button>
      <br />
      <br />
      <button onClick={decreaseCounter}>Decrease value</button>
    </>
  );
};

export default App;
