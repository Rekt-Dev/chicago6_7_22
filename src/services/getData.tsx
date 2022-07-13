export async function getData() {
  let data;
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=20"
    );
    data = await response.json();
  } catch (e) {
    console.log(e);
  }

  console.log(`this is data ${data}`);

  return data;
}
