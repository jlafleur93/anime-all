<template>

    <Header />
    <Search />
    <CardItem title="Naruto" image="https://cdn.myanimelist.net/images/anime/13/17405.jpg"/>
  
</template>

<script>
  import Header from "@/components/Header.vue";
  import Search from "@/components/Search.vue";
  import CardItem from "@/components/CardItem.vue";

  export default {
    components: {
      Header,
      Search,
      CardItem,
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
    background-color: #d81b60;
    height: 100vh;
    width: 100vw;
  }
</style>
