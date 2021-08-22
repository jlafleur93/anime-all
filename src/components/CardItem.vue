<template>
  <div class="card-area">
    <div class="card-bkg" v-for="(ani, x) in anime" :key="x">
      <h3 class="anime-title">{{ ani.title }}</h3>
      <img :src="ani.image" />
      <p class="description">{{ ani.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        anime: [
          {
            tite: "Naruto",
            image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
            description:
              "Naruto is about Naruto and Sasukes attempt to find acceptence as gay lovers in the Ninja World. Sakura third-wheels their adventures, and everyone hates her.",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .card-area {
    display: grid;
    padding-top: 20px;
    grid-template-columns: 1.1fr 0.9fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "Card1 Card2 Card3"
      "Card1 Card2 Card3"
      "Card1 Card2 Card3";
  }
  .card-bkg {
    grid-area: Card1;
    background-color: #a20021;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    width: 20vw;
    height: 95vh;
    border-radius: 9px;
  }
  img {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    height: 230px;
    object-fit: contain;
    border-radius: 16px;
    transition: 0.4s;
  }
  .description {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    line-height: 1.2;
    margin: 0 auto;
    word-break: normal;
    color: #000000;
  }
  .anime-title {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 3;
    color: #000000;
  }
</style>
