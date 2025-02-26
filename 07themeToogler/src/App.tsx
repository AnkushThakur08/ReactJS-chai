import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleThemeToggle }}>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <button className="text-xl bg-blue-500 text-white px-4 py-2 my-6 rounded-lg uppercase cursor-pointer" onClick={handleThemeToggle}>
          {theme}
        </button>
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
