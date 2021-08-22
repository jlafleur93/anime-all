<template>
  <header class="header">
    <img alt="Anime-All" src="../assets/icon.svg" id="anime-all" />
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .header {
    display: grid;
    position: fixed;
    background-color: #a00037;
    font-size: 16px;
    top: 0;
    width: 100%;
    left: 0;
    box-shadow: 0 1px 2px 0 rgb(0, 0, 0/ 25%);
    min-height: 3.5em;
    margin: 0;
  }

  #anime-all {
    height: 25px;
    grid-column-start: 1;
    align-self: self-end;
    justify-self: center;
  }
</style>
