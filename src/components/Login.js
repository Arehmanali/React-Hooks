import React, { useContext } from "react";

import AppContext from "../Hooks/UseContext";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default Login;
