function callTheGifs(event) {
   event.preventDefault();
   const RANDOM = document.getElementById("random-gif");
   const SEARCH_BUTTON = document.getElementById("search-button");
   const SEARCH_INPUT = document.getElementById("search");

   SEARCH_BUTTON.addEventListener("click", () => {
      RANDOM.style.display = "flex";
      let WORD = SEARCH_INPUT.value;
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wKXpOjRC2bbTrBrQNVCiGI7fQOxsRhzI&s=${WORD}||dogs`, { mode: "cors" })
         .then(function (response) {
            return response.json();
         })
         .then(function (response) {
            RANDOM.src = response.data.images.original.url;
         })
         .catch(function (error) {
            console.error("Error fetching GIF:", error);
         });
   });
}

export default callTheGifs;
