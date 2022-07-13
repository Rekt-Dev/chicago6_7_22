export async function getData() {
  let data;
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?limit=20"
    );
    data = await response.json();
    let data1 = data;
    console.log(`this is data1${data1}`);
  } catch (err) {
    console.log(`this is the error :${err}` );
  }

  console.log(`this is data ${data}`);
  return data;
}
