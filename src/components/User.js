import { useContext } from "react";
import { AppContext } from "../Hooks/UseContext";

function User() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Username: {username}</h1>
    </div>
  );
}

export default User;
