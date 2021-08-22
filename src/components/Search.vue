<template>
  <div class="search-bar">
    <input
      ref="output"
      type="text"
      @submit.prevent="DataFetcher"
      placeholder="Search For Anime..."
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
    margin: 0 auto;
    justify-content: center;
    max-width: 384px;
    box-shadow: none;
    outline: none;
    padding: 6px;
    border: 10px solid #a20021;
    border-radius: 18px;
    transition: 0.4s;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
  }
</style>
