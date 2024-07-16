import { useState } from "react";

export default function Home() {
  const [inputvalue, setInputValue] = useState(0);

  function incrementValue() {
    setInputValue(inputvalue + 1);
  }

  function decrementValue() {
    setInputValue(inputvalue - 1);
  }

  return (
    <div className="home">
      <input
        style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
        type="text"
        placeholder="Enter something"
        value={inputvalue}
      />

      <button
        onClick={incrementValue}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: 5,
          margin: 10,
        }}
      >
        +
      </button>

      <button
        onClick={decrementValue}
        style={{ background: "green", color: "white", padding: 5 }}
      >
        -
      </button>
    </div>
  );
}
