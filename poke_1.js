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
const link = "https://api.catboys.com/img";

async function fetchHandler() {
  try {
    const response = await fetch(link);
    const data = await response.json();
    image.src = data.url;
  } catch (error) {
    console.log('Возникли проблемы',error.message);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});