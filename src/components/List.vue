<template>
  <div class="list">
    <TodoItem v-for="(item, index) in todos" :key="item.id" 
    :index="index" :todo="item" 
    :deleteItem="deleteItem"
    :updateTodo="updateTodo" />
  </div>
</template>

<script type="text/ecmascript-6">
import TodoItem from './Item'
export default {
  name: "List",
  components: {
    TodoItem
  },
  props: ['todos','deleteItem', 'updateTodo']
};
</script>

<style scoped>

/* list */
.list {
  border-top: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
}
</style>