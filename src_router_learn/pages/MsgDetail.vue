<template>
  <ul>
    <li>ID:{{detail.id}}</li>
    <li>Title:{{detail.title}}</li>
    <li>COntent:{{detail.content}}</li>
  </ul>
</template>

<script>

const allDetails = [
  {id: 1, title: 'message01', content: 'messsage content01'},
  {id: 2, title: 'message02', content: 'messsage content02'},
  {id: 3, title: 'message03', content: 'messsage content03'}
]

export default {
   name: 'MsgDetail',
   data() {
     return {
       detail: {}
     }
   },
   mounted() {
     console.log('msgdetail mount')
     setTimeout(()=>{
       const id = this.$route.params.id * 1
       const detail = allDetails.find(detail => detail.id === id)
       this.detail = detail
      },1000)
   
   },
   watch: {
     '$route'(to,from){
      setTimeout(()=>{
       const id = to.params.id * 1
       const detail = allDetails.find(detail => detail.id === id)
       this.detail = detail
      },1000)
     }
   }
}
</script>

<style scoped>
</style>