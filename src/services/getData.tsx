import { useState, useEffect } from "react";
export let obj: any;

export async function getData() {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=20"
    );
    setData(await response.json());
  } catch (e) {
    console.log(e);
  } finally {
    let data1 = data;
    setJsonData(data);
    console.log(`this is data1 ${data1}`);
  }

  useEffect(() => {
    setJsonData(true);
    getData();
  }, []);
  return (
    <div className="">
      <header className="">
        {loading && <img src={"./"} className="App-logo" alt="logo" />}
        {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
      </header>
    </div>
  );
}
