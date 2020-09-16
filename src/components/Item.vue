<template>
  <div :style="{background: bgColor}" class="item" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <input type="checkbox" name="" id="" v-model="isCompleted">
    <span>{{todo.title}}</span>
    <div class="delItem" v-show="isShow" @click="deleteTodo">删除</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'Item',
   props: ['todo', 'deleteItem', 'index', 'updateTodo'],
   data() {
     return {
       bgColor: 'white',
       isShow: false,
     }
   },
   methods: {
     handleEnter(isEnter){
       if(isEnter){
         this.bgColor = '#ddd',
         this.isShow = true
       }else{
         this.bgColor = 'white',
         this.isShow = false
       }
     },
     deleteTodo(){
       if(window.confirm('确定删除吗？')){
         this.deleteItem(this.index)
       }
     }
   },
   computed: {
     isCompleted: {
       get(){
         return this.todo.completed
       },
       set(value){
         this.updateTodo(this.todo, value)
       }
     }
   }
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-top: none;
}
.item span {
  flex: 1;
  padding-left: 3px;
}
.item .delItem {
  background-color: rgb(243, 58, 58);
  padding: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  border: 1px solid rgb(243, 58, 58);
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  margin-right: 15px;
}
</style>