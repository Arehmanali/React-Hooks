import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
    case "Decrement":
      return { count: state.count - 1, showText: state.showText };
    case "ShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
  });
  return (
    <div>
      <p>{state.count}</p>
      <button
        style={{ margin: 5 }}
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "ShowText" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
          dispatch({ type: "ShowText" });
        }}
      >
        decrement
      </button>
      {state.showText && <p>Some Text</p>}
    </div>
  );
}

export default UseReducer;
