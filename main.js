const options = {
  method: "GET",
  headers: {
    Authorization: "mXekCWebaljf",
    "X-RapidAPI-Key": "8c2859d215mshe2fda53e4aac4b6p1a3e5djsn9c7f87348272",
    "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
  },
};

// fetch(
//   "https://random-stuff-api.p.rapidapi.com/joke/random?exclude=dirty%2Cmoney",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const jokeBtn = document.querySelector("#generate-joke-btn");
const jokeParagraph = document.querySelector("#joke-text");
const jokeScreen = document.querySelector("#joke-screen");
const homeScreen = document.querySelector("#home-screen-container");
const jokeText = document.querySelector("#next-joke-text");
// console.log(homeScreen);
const nextJoke = document.querySelector("#another-joke-btn");
jokeBtn.addEventListener("click", (event) => {
  fetch(
    "https://random-stuff-api.p.rapidapi.com/joke/puns?exclude=dirty%2Csex%2racist",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      jokeParagraph.innerText = response.message;
      //   jokeParagraph.classList.add("box");
      jokeScreen.classList.remove("hidden");
      homeScreen.style.display = "none";
    })
    .catch((err) => console.error(err));
});

nextJoke.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(
    "https://random-stuff-api.p.rapidapi.com/joke/puns?exclude=dirty%2Csex%2racist",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //jokeText.innerText = response.message;
      //jokeParagraph.classList.remove("hidden");
      jokeText.innerText = response.message;
      jokeParagraph.classList.add("hidden");
      jokeScreen.style.display = "block";
      homeScreen.style.display = "none";
    })
    .catch((err) => console.error(err));
});
