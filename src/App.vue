<template>
  <Header />

  <Search />

  <Card />
</template>

<script>
  import Header from "@/components/Header.vue";
  import Search from "@/components/Search.vue";
  import Card from "@/components/CardItem.vue";

  export default {
    components: {
      Header,
      Search,
      Card,
    },
  };
</script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
  }
  .space {
    padding-top: 70px;
  }
</style>
