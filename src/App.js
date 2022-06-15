import logo from "./logo.svg";
import "./App.css";

import UseReducer from "./Hooks/UseReducer";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>useState</h1>
        <UseState />
        <h1>useReducer</h1>
        <UseReducer />
      </header>
    </div>
  );
}

export default App;
