<template>
  <div>
    <CardItem :anime="anime" />
  </div>
</template>

<script>
  import CardItem from "@/CardItem.vue";
  export default {
    props: ["anime"],
    data() {
      return {
        components: {
          CardItem,
        },
        anime: [
          {
            title: "Naruto",
            image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
            description:
              "Naruto is about Naruto and Sasukes attempt to find acceptence as gay lovers in the Ninja World. Sakura third-wheels their adventures, and everyone hates her.",
          },
          {
            title: "Bleach",
            image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
            description:
              "Bleach is about one gingers journey to creating his own soul",
          },
          {
            title: "One Piece",
            image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
            description:
              "One piece is about one autistics boy to dream of becoming the pirate king.",
          },
        ],
      };
    },
    computed: {
      style() {
        return {
          "grid-template-rows": "repeat(" + this.anime.length + ", 1fr)",
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card-area {
    display: grid;
    padding-top: 20px;
  }
  .card-bkg {
    background-color: #a20021;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    width: 20vw;
    height: 95vh;
    border-radius: 9px;
  }
  img {
    width: 100%;
    display: inline-grid;

    height: 230px;
    object-fit: contain;
    border-radius: 16px;
    transition: 0.4s;
  }
  .description {
    line-height: 1.2;
    margin: 0 auto;
    word-break: normal;
    color: #000000;
  }
  .anime-title {
    color: #000000;
  }
</style>
