async function callTheCats() {
   const CAT_GIF = document.getElementById("cat-gif");
   const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=wKXpOjRC2bbTrBrQNVCiGI7fQOxsRhzI&s=cats", { mode: "cors" });
   const catData = await response.json();
   CAT_GIF.src = catData.data.images.original.url;
}

export default callTheCats;
