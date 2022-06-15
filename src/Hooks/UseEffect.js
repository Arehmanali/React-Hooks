import { useEffect, useState, useRef } from "react";
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log(response.data[0].email);
      });
  }, []);
  return <div>{data}</div>;
}

export default UseEffect;
