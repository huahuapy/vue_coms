<template>
  <div class="footer">
    <input type="checkbox" v-model="isCheckAll">
    <div class="info">
      已完成<span>{{completedNum}}</span>
      &nbsp;/&nbsp;
      全部<span>{{todos.length}}</span>
    </div>
    <div class="del" v-show="completedNum" @click="clearCompletedTodos">清除已完成任务</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Footer",
  props: ['todos','clearCompletedTodos', 'selectAll'],
  computed: {
    completedNum(){
      return this.todos.reduce((preTotal, todo,  index) => preTotal + (todo.completed ? 1 : 0),0)
    },
    isCheckAll: {
      get(){
        return this.todos.length === this.completedNum && this.completedNum > 0
      },
      set(value){
        this.selectAll(value)
      }
    }
  },
};

</script>

<style scoped>

/* footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
}

.footer .info {
  flex: 1;
  padding-left: 20px;
}

.footer .del {
  background-color: rgb(243, 58, 58);
  padding: 8px;
  padding-bottom: 4px;
  padding-top: 4px;
  border: 1px solid rgb(243, 58, 58);
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
}
</style>