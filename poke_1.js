// var status = function (response) {
//   if (response.status !== 200) {
//     return Promise.reject(new Error(response.statusText))
//   }
//   return Promise.resolve(response)
// }
// var json = function (response) {
//   return response.json()
// }

//   let s = document.getElementById('image');
//   fetch(`https://api.catboys.com/img`)
//     .then((response) => {
//       document.getElementById('images').src = response.url;
//     });

const button = document.querySelector(".btn");
const image = document.querySelector(".image__cover");
const art = document.querySelector(".image__artist")
const link = "https://api.waifu.pics/nsfw/blowjob";

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