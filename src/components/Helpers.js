const findAnime = function(anime) {
  const fetch = require("node-fetch");
  const ani = anime;
  const url = `https://api.jikan.moe/v3/search/anime?q=${ani}`;
  const getData = () => {
    return fetch(url)
      .then((d) => d.json())
      .then((d) => d.results);
  };
};

let output = ref("");
