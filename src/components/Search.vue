<template>
      <input ref="output" type="text" placeholder="Search for Anime.." 
      @submit.prevent="DataFetcher"
      class="search-bar"/>
</template>

<script>
  export default {
    setup() {},
  };
</script>

<style lang="scss" scoped>
  .search-bar {
    display: flex;
    height: 38px;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    max-width: 484px;
    border: 2px solid #dfe1e5;
    box-shadow: none;
    outline: none;
    border-radius: 15px;
    background: white;
  }


</style>
