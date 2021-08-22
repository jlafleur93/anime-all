<template>
  <div class="card-bkg">
    <h3 class="anime-title">{{title}}</h3>
    <img :src="image"/>
    <p class="description"> {{description}}</p>
  </div>

</template>

<script>
  export default {

    props:{
      title: String,
      image: String,
      description: String, 
    },

    
    
  };
  
</script>

<style lang="scss" scoped>
  .card-bkg {
    height: 20vh;
    display: flex;
    flex-direction: column;
    background-color: #A20021;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    width: 25vw;
    height: 65vh;
    border-radius: 14px;
  }
  img {
    width: 100%;
		height: 400px;
		object-fit: contain;
		border-radius: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
		transition: 0.4s;
  }
  .description {
    display: inline-block;
    color: #000000;
  }
  .anime-title{
    display: inline-block;
    color: #000000;
  }
</style>
