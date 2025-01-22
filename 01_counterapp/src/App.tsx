import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    // count >= 20 ? alert("Counter value can't be more than 20") : setCount(count + 1);

    // InterView Question
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    /* My State will be 1 only */
    /* Now if we use setCount(count + 1) 5 times, it will be 5 */

    /* But what if i Want to update it like normal  */
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
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
