<template>
  <div class="card-bkg">
    <CardItem
      v-for="(art, i) in artists"
      :key="i"
      :name="art.name"
      :genre="art.genre"
      :country="art.country"
    />
  </div>
</template>

<script>
  import CardItem from "./CardItem.vue";
  export default {
    name: "Test",
    components: {
      CardItem,
    },

    data() {
      return {
        artists: [
          { name: "Davido", genre: "afrobeats", country: "Nigeria" },
          { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
          { name: "AKA", genre: "hiphop", country: "South-Africa" },
          { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
          { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
          { name: "Lil Nas", genre: "Country", country: "United States" },
          { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
          { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
          { name: "Khalid", genre: "pop", country: "United States" },
          { name: "ed-Sheeran", genre: "pop", country: "United Kingdom" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  //  .card-bkg {
  //     background-color: #a20021;
  //     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  //     margin: 0 auto;
  //     width: 20vw;
  //     height: 95vh;
  //     border-radius: 9px;
  //   }
</style>
