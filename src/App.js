import logo from "./logo.svg";
import "./App.css";

import UseReducer from "./Hooks/UseReducer";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseContext from "./Hooks/UseContext";

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
        <h1>useRef</h1>
        <UseRef />
        <h1>useLayoutEffect</h1>
        <UseLayoutEffect />
        <h1>useContext & createContext</h1>
        <UseContext />
      </header>
    </div>
  );
}

export default App;
