function callTheDogs() {
   const DOG_GIF = document.getElementById("dog-gif");
   const BUTTON = document.getElementById("dog-button");

   BUTTON.remove();
   DOG_GIF.style.display = "flex";
   fetch("https://api.giphy.com/v1/gifs/translate?api_key=wKXpOjRC2bbTrBrQNVCiGI7fQOxsRhzI&s=dogs", { mode: "cors" })
      .then(function (response) {
         return response.json();
      })
      .then(function (response) {
         DOG_GIF.src = response.data.images.original.url;
      });
}

export default callTheDogs;
