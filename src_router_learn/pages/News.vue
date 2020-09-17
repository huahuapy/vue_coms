<template>
  <ul class="subdetails">
    <li v-for="(item, index) in news" :key="item.id">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
   name: 'News',
   data() {
     return {
       news: [
         {id: 1, title: 'news01'},
         {id: 2, title: 'news02'},
         {id: 3, title: 'news03'}
       ]
     }
   },
}
</script>

<style scoped>
</style>