<template>
  <div v-bind="(ani, x) in anime" key="x">
    <h3 class="anime-title">{{ ani.title }}</h3>
    <img :src="ani.image" />
    <p class="description">{{ ani.description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      anime: Object,
    },
  };
</script>

<style lang="scss">
  .description {
    line-height: 1.2;
    margin: 0 auto;
    word-break: normal;
    color: #000000;
  }
  .anime-title {
    color: #000000;
  }
</style>
