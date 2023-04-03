// MAIN.JS

const options = {
  method: "GET",
  headers: {
    Authorization: "mXekCWebaljf",
    "X-RapidAPI-Key": "8c2859d215mshe2fda53e4aac4b6p1a3e5djsn9c7f87348272",
    "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
  },
};

// variables
const jokeBtn = document.querySelector("#generate-joke-btn");
const jokeParagraph = document.querySelector("#next-joke-text");
const jokeScreen = document.querySelector("#joke-screen");
const homeScreen = document.querySelector("#home-screen-container");
const jokeText = document.querySelector("#next-joke-text");
const nextJoke = document.querySelector("#another-joke-btn");

const generateJokeForm = document.querySelector("#generate_joke_form");
const generateAnotherJokeForm = document.querySelector("#another-joke-form");
const submitErrorP = document.querySelector("#submit_error");

generateJokeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formDataEntries = new FormData(event.target).entries();
  let areExternalRequestsAllowed = false;

  for (let [inputName, inputValue] of formDataEntries) {
    if (inputName === "ext_request_input" && inputValue === "on") {
      areExternalRequestsAllowed = true;
    }
  }

  if (areExternalRequestsAllowed) {
    fetch(
      "https://random-stuff-api.p.rapidapi.com/joke/puns?exclude=dirty%2Csex%2racist",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        jokeParagraph.innerText = response.message;
        jokeScreen.classList.remove("hidden");
        homeScreen.style.display = "none";
      })
      .catch((err) => console.error(err));
  } else {
    window.alert("YOU MUST ALLOW FOR EXTERNAL REQUESTS TO GET RANDOM JOKES");
  }
});

generateAnotherJokeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formDataEntries = new FormData(event.target).entries();
  let areExternalRequestsAllowed = false;

  for (let [inputName, inputValue] of formDataEntries) {
    if (inputName === "ext_request_input" && inputValue === "on") {
      areExternalRequestsAllowed = true;
    }
  }

  if (areExternalRequestsAllowed) {
    fetch(
      "https://random-stuff-api.p.rapidapi.com/joke/puns?exclude=dirty%2Csex%2racist",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        jokeText.innerText = response.message;
        jokeParagraph.classList.add("hidden");
        jokeScreen.style.display = "block";
        homeScreen.style.display = "none";
      })
      .catch((err) => console.error(err));
  } else {
    window.alert("YOU MUST ALLOW FOR EXTERNAL REQUESTS TO GET RANDOM JOKES");
  }
});
