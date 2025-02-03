const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
let listen = document.querySelector(".listen");
let randomJoke;
let speech = new SpeechSynthesisUtterance();

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  joke.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      randomJoke = joke.textContent = `${item.joke}`;
      joke.classList.add("fade");
      speech.text = randomJoke;
    });
};
listen.addEventListener("click", () => {
  if (randomJoke) {
    speech.text = randomJoke;
    window.speechSynthesis.speak(speech);
  }
});
btn.addEventListener("click", () => {
  getJoke();
});
