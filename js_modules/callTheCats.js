function callTheCats() {
   const CAT_GIF = document.getElementById("cat-gif");
   fetch("https://api.giphy.com/v1/gifs/translate?api_key=wKXpOjRC2bbTrBrQNVCiGI7fQOxsRhzI&s=cats", { mode: "cors" })
      .then(function (response) {
         return response.json();
      })
      .then(function (response) {
         CAT_GIF.src = response.data.images.original.url;
      });
}

export default callTheCats;
