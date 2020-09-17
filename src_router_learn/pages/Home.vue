<template>
  <div class="viewright">
   <h2 class="title">Home</h2>
   <div class="subtitles">
     <router-link to="/home/news">News</router-link>
     <router-link to="/home/message">Message</router-link>
   </div> 
     <router-view></router-view>  
  </div>
</template>

<script>
export default {
   name: '',
}
</script>

<style scoped>
</style>