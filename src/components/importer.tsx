import { requestOptions } from "../services/requestOptions";
export let obj: any;

export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";

  fetch(link, requestOptions)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => console.log(`this is obj rendered from importer ${obj}`));
  console.log();
}
