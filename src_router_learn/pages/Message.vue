<template>
<div>
  <ul class="subdetails">
    <li v-for="(msg, index) in messages" :key="msg.id">
      <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
      ---<button @click="pushShow(msg.id)">push</button>---
      <button @click="replaceShow(msg.id)">replace</button>
    </li>
  </ul>
  <div class="detailContent">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
   name: 'Message',
   data() {
     return {
       messages: [
         {id: 1, title: 'message01'},
         {id: 2, title: 'message02'},
         {id: 3, title: 'message03'}
       ]
     }
   },
   methods: {
     pushShow(id){
       this.$router.push(`/home/message/detail/${id}`)
     },
     replaceShow(id){
       this.$router.replace(`/home/message/detail/${id}`)
     }
   },
}
</script>

<style scoped>
.detailContent {
  margin-top: 40px;
  margin-left: 40px;
  font-size: 14px;
  color: tomato;
}
</style>