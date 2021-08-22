<template>
  <div class="search-bar">
      <p class="placeholder">Search for Anime..</p>
      <input 
      ref="output" 
      type="text" 
      @submit.prevent="DataFetcher"
      />     
    </div>
</template>

<script>
  export default {
    setup() {},
  };
</script>

<style lang="scss" scoped>
  .search-bar {
    display: block;
    height: 38px;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    max-width: 484px;
    box-shadow: none;
    outline: none;
    border: 14px solid #A20021;
  }
  .placeholder{
    display: inline-block;
  }


</style>
