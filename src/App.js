
import React, { useEffect, useState } from "react";
import  Pages  from "./components/Pages";

function App() {
  const [data, setData] = useState([]);
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    paginationFunc();
  }, []);
  return (
    <div>
    {data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p> }
    </div>
  );
}

export default App;
