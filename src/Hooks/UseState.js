import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <p>{counter}</p>
      <button
        style={{ margin: 5 }}
        onClick={() => {
          setCounter(counter + 1);
          setShowText(!showText);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          setShowText(!showText);
        }}
      >
        decrement
      </button>
      {showText && <p>Some Text...</p>}
    </div>
  );
}

export default UseState;
