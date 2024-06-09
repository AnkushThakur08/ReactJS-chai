import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>

      <button onClick={(e) => setCount(count + 1)}>Add value</button>
      <br />
      <br />
      <button onClick={(e) => setCount(count - 1)}>Decrease value</button>
    </>
  );
};

export default App;
