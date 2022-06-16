import { useState, createContext } from "react";
import User from "../components/User";
import Login from "../components/Login";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default UseContext;
