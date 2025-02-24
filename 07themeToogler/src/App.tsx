import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
