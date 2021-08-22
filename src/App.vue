<template>

    <Header />
    <div class="space"/>
    <Search />
    <div class="space"/>
    <CardItem title="Naruto" image="https://cdn.myanimelist.net/images/anime/13/17405.jpg" description="Naruto is about Naruto and Sasukes attempt to find acceptence as gay lovers in the Ninja World. Sakura third-wheels their adventures, and everyone hates her."/>
  
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
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
  }
  .space{
    padding-top: 70px;
  }
</style>
