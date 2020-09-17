<template>
  <div class="container">
    <Header @addTodo="addTodo"/>
    <TodoList :todos="todos" :deleteItem="deleteItem" :updateTodo="updateTodo" />
    <Footer :todos="todos" :clearCompletedTodos="clearCompletedTodos" :selectAll="selectAll" />
  </div>
</template>


<script type="text/ecmascript-6">
import Header from './components/Header'
import TodoList from './components/List'
import Footer from './components/Footer'

export default {
   name: 'App',
   components: {
     Header,
     TodoList,
     Footer
   },
   data() {
     return {
       todos: []
     }
   },
   mounted(){
     setTimeout(()=>{
       this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
     },1000)
   },
   methods: {
     addTodo(newTodo){
       this.todos.unshift(newTodo)
     },
     deleteItem(index){
       this.todos.splice(index,1)
     },
     clearCompletedTodos(){
       this.todos = this.todos.filter((todo, index) => !todo.completed)
     },
     selectAll(isCheckAll){
       this.todos.forEach((todo, index) => todo.completed = isCheckAll)
     },
     updateTodo(todo, isCheck){
       todo.completed = isCheck
     }
   },
   watch: {
     todos: {
      deep: true,
      handler(value){ //最新的todos(json)
        localStorage.setItem('todos_key', JSON.stringify(value))
      }
     }
   },
}
</script>

<style scoped>
.container {
  width: 500px;
  padding: 15px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>