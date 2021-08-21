<template>
  <div class="search-bar">
    <form @submit.prevent="DataFetcher">
      <input ref="output" type="text" placeholder="Look for Anime.." />
    </form>
  </div>
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
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    max-width: 584px;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    background: white;
  }
  form {
    width: 100%;
    align-self: flex-end;
  }
  input {
    border-width: 0px;
    border: none;
  }
</style>
