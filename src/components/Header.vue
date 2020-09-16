<template>
  <div class="header">
    <input type="text" placeholder="请输入任务名称" @keyup.enter="add" v-model="inputVal">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Header",
  props: [],
  data() {
    return {
      inputVal: ''
    }
  },
  methods: {
    add(event){
      const title = this.inputVal.trim()
      if(title){
        const todo = {
          id: Date.now(),
          title: title,
          completed: false
        }
        //this.addTodo(todo)
        this.$emit('addTodo', todo)
      }
      this.inputVal = ''
    }
  }
};
</script>

<style scoped>

/* header */
.header {
  height: 30px;
  margin-bottom: 20px;
}

.header input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
}

</style>