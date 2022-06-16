import { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="Rehman"></input>
    </div>
  );
}

export default UseLayoutEffect;
