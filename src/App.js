import logo from "./logo.svg";
import "./App.css";

import UseReducer from "./Hooks/UseReducer";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>useState</h1>
        <UseState />
        <h1>useReducer</h1>
        <UseReducer />
        <h1>useEffect</h1>
        <UseEffect />
      </header>
    </div>
  );
}

export default App;
