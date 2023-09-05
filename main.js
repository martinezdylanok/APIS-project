import callTheCats from "./js_modules/callTheCats.js";
import callTheDogs from "./js_modules/callTheDogs.js";

callTheCats();

const BUTTON = document.querySelector("button");
BUTTON.addEventListener("click", callTheDogs);
