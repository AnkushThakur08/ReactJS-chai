import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>("black");

  const handleBackground = (value: string) => {
    setColor(value);
  };

  return (
    <>
      <div className={`${color} flex items-centers justify-center w-full h-screen`}>
        <div className="bg-white flex h-14 w-7xl rounded-xl justify-between p-1 m-6">
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-red-500")}>
            Red
          </button>
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-black")}>
            Black
          </button>
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-green-500")}>
            green
          </button>
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-yellow-500")}>
            yellow
          </button>
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-orange-500")}>
            orange
          </button>
          <button className="border-2 p-2 rounded-xl cursor-pointer" type="button" onClick={() => handleBackground("bg-pink-500")}>
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
