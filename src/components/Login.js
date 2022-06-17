import React, { useContext } from "react";

import { AppContext } from "../Hooks/UseContext";

function Login() {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
