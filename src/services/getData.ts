import { useState, useEffect } from "react";
export let obj: any;

export async function getData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=20"
    );
    setData(await response.json());
  } catch (e) {
    console.log(e);
  } finally {
    let data1 = data;
    setLoading(false);
    console.log(`this is data1 ${data1}`);
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
}
/* export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";

  fetch(link, requestOptions)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => console.log(`this is obj rendered from importer ${obj}`));
  console.log();
} */
