<template>
  <div class="card-bkg">{{title}}
    <img :src="image"/>
  </div>

</template>

<script>
  export default {

    props:{
      title: String,
      image: String, 
    },

    
    
  };
  
</script>

<style lang="scss" scoped>
  .card-bkg {
    height: 20vh;
    grid-column-start: 3;
    grid-row-start: 1;
    background-color: #ff5c8d;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    width: 95vw;
    height: 40vh;
  }
  image {
    width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
		transition: 0.4s;
  }
</style>
