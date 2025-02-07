import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "@#$%^&*()!";
    let res = "";
    for (let i = 0; i < count; i++) {
      res = res + charset.charAt(Math.ceil(Math.random() * charset.length));
    }
    setPassword(res);
  }, [count, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generatePassword();
  }, [count, includeNumbers, includeSpecialChars]);

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-gray-500 rounded-2xl flex flex-col h-32 justify-center w-2xl px-2">
        <div>
          <input className="bg-white p-2 w-xl" type="text" value={password} readOnly />
          <button
            className="text-white bg-blue-400 py-1.5 px-4 text-lg cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert("Text Copied Successfully");
            }}
          >
            Copy
          </button>
        </div>

        <div className="my-4 flex gap-5">
          <div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
              ref={passwordRef}
            />
            <label>Length({count})</label>
          </div>

          <div>
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers((prev) => !prev)} />
            <label>Numbers</label>
          </div>

          <div>
            <input type="checkbox" checked={includeSpecialChars} onChange={() => setIncludeSpecialChars((prev) => !prev)} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
