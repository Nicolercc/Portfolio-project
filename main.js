fetch(`https://random-stuff-api.p.rapidapi.com/joke/random`)
  .then((response) => response.json())
  .then((data) => console.log(data));
