export let obj: any;

export async function getData() {
  const [data, setData] = [];

  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=100"
    );
    setData(await response.json());
  } catch (e) {
    console.log(e);
  } finally {
    let data1 = data;
    console.log(data1);
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
