export let obj: any;

export async function getData() {


  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=20"
    );
    let data=(await response.json());
  } catch (e) {
    console.log(e);
  }  
      let data1 = data;
    console.log(`this is data1 ${data1}`);
  }

  useEffect(() => {
    setJsonData();
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
