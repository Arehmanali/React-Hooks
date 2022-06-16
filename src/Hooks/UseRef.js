import { useRef, useState } from "react";

function UseRef() {
  const inputValue = useRef(null);
  const [changeName, setChangeName] = useState("");

  const onClick = () => {
    if (inputValue.current.value !== "") {
      setChangeName(inputValue.current.value);
      inputValue.current.focus();
      inputValue.current.value = "";
    }
  };
  return (
    <div>
      <h1>Hello {changeName}!</h1>
      <div>
        <input
          type="text"
          placeholder="Type your Name"
          ref={inputValue}
        ></input>
        <button style={{ margin: 5 }} onClick={onClick}>
          Change Name
        </button>
      </div>
    </div>
  );
}

export default UseRef;
