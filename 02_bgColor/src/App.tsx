import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");
  const handleBackgroundColor = () => {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);
    setColor("#" + colorCode);
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: color }}>
        <button onClick={handleBackgroundColor}>Change BG</button>
      </div>
    </>
  );
};

export default App;
