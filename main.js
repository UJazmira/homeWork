const container = document.querySelector(".container");

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((first) => first.json())
  .then((second) => {
    console.log(second);
    second.Search.forEach((item) => {
      container.innerHTML += `
    <div class="window">
      <div class="poster">
        <img class = "image" src='${item.Poster}' />
      </div>
      <p class="title">${item.Title}</p>
      <p class="release">${item.Year}</p>
    </div>`;
    });
  });
