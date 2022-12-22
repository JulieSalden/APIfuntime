// ophalen van de dadjoke
const getDadJoke = async () => {
  try {
    const dadJoke = await fetch(`https://icanhazdadjoke.com/`, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    return await dadJoke.json();
  } catch (error) {
    console.log("error");
  }
};
getDadJoke();

// plaatsen van dadjoke in de dom
const jokeUl = document.querySelector("#joke");

const addDadJokeToDom = async () => {
  const dadJokeLine = await getDadJoke();
  console.log(dadJokeLine);
  const newJoke = document.createElement("li");
  newJoke.innerHTML = dadJokeLine.joke;
  jokeUl.appendChild(newJoke);
};

const clearJoke = () => {
  while (jokeUl.firstChild) {
    jokeUl.removeChild(jokeUl.firstChild);
  }
};

// zorgen dat het geplaatst wordt wanneer button geklikt wordt
const jokeButtonClick = () => {
  const jokeButton = document.querySelector("#jokeButton");
  jokeButton.addEventListener("click", clearJoke);
  jokeButton.addEventListener("click", addDadJokeToDom);
};
jokeButtonClick();

// ophalen van dadjoke als plaatje
const getDadJokeImg = async () => {
  try {
    const dadJoke = await fetch(`https://icanhazdadjoke.com/j/<joke_id>.png`, {
      method: "GET",
    });
    return dadJoke;
  } catch (error) {
    console.log(error);
  }
};

getDadJoke();

// plaatje in de dom plaatsen
const addDadJokeImgToDom = async () => {
  const dadJokeImg = await getDadJokeImg();
  console.log(dadJokeImg);
  const newJokeImg = document.createElement("li");
  const NewJokeImgImg = document.createElement("img");
  NewJokeImgImg.src = dadJokeImg.url;
  jokeUl.appendChild(newJokeImg);
};

// zorgen dat het geplaatst wordt als button wordt geklikt
const jokeButtonImgClick = () => {
  const jokeButton = document.querySelector("#jokeButtonImg");
  jokeButton.addEventListener("click", clearJoke);
  jokeButton.addEventListener("click", addDadJokeImgToDom);
};
jokeButtonImgClick();
