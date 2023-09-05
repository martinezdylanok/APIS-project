import callTheCats from "./js_modules/callTheCats.js";
import callTheDogs from "./js_modules/callTheDogs.js";
import callTheGifs from "./js_modules/callTheGifs.js";

const FORM = document.querySelector("form");
FORM.addEventListener("submit", callTheGifs);

callTheCats();

const BUTTON = document.getElementById("dog-button");
BUTTON.addEventListener("click", callTheDogs);
