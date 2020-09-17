<template>
  <div class="search">
    <h3>Search Github Users</h3>
    <input type="text" placeholder="enter the name you search" v-model="searchName" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    search() {
      const searchName = this.searchName.trim();
      if (searchName) {
        /* 分发事件 */
        this.$eventBus.$emit("search", searchName);
      }
    },
  },
};
</script>

<style scoped>
/* search */
.search {
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  padding-left: 50px;
  padding-top: 60px;
  margin: 0 auto;
  background-color: #eee;
  margin-bottom: 20px;
}

.search h3 {
  font-size: 20px;
  color: #555;
  font-weight: normal;
  margin-bottom: 5px;
}

.search input {
  box-sizing: border-box;
  width: 160px;
  height: 20px;
  font-size: 12px;
  padding-left: 4px;
  padding-right: 4px;
}

.search button {
  text-align: center;
  font-size: 12px;
  height: 20px;
  color: #444;
  padding-left: 4px;
  padding-right: 4px;
}
</style>