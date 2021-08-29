<template>
  <div class="card-margin">
    <ul class="card-area">
      <p>Here is where my title is</p>
      <p>Here is where my info is</p>
      <p>Here is where my Anime pic should be</p>
      <p>Here is where my anime genres should be</p>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "cardItem",
    props: ["artists", "genre", "country", "name"],
  };
</script>

<style lang="scss">
  .card-margin {
    display: grid;
    grid-template-rows: 2fr 1fr;
    width: 31.333%;
    background-color: #a20021;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 9px;
  }
</style>
