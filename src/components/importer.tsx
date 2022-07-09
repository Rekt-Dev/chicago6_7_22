import { requestOptions } from "../services/requestOptions";
export let obj: any;

export async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    setTodos(await response.json());
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
}

/* export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";

  fetch(link, requestOptions)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => console.log(`this is obj rendered from importer ${obj}`));
  console.log();
} */
