const button = document.querySelector(".btn");
const image = document.querySelector(".image__cover");
const art = document.querySelector(".image__artist")
const link = "https://api.waifu.pics/sfw/neko";

async function fetchHandler() {
  try {
    const response = await fetch(link);
    const data = await response.json();
    image.src = data.url;
    art.text = data.artist;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});