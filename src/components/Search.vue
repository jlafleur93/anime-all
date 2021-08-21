<template>
  <div class="search-bar">
    <form @submit.prevent="DataFetcher">
      <input ref="output" type="text" placeholder="Look for Anime.." />
    </form>
  </div>
</template>

<script>
  import { ref } from "vue";
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
  export default {
    setup() {
      let output = ref("");
    },
  };
</script>

<style lang="scss" scoped>
  .search-bar {
    display: flex;
    height: 44px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    max-width: 584px;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    background: white;
  }
</style>
