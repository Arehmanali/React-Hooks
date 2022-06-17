import { useState, createContext } from "react";
import User from "../components/User";
import Login from "../components/Login";

export const AppContext = createContext({});

function UseContext({ children }) {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
      {children}
    </AppContext.Provider>
  );
}

export default UseContext;
