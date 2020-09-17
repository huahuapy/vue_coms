<template>
  <div class="main">
    <h2 v-if="firstView">请输入关键字进行搜索！</h2>
    <h2 v-else-if="loading">正在请求中...</h2>
    <h2 v-else-if="errorMsg">{{errrorMsg}}</h2>
    <div class="mainItem" v-for="(item, index) in users" :key="index" v-else>
      <a :href="item.url" target="_blank">
        <img :src="item.avatar_url" alt />
      </a>
      <p class="desc">{{item.username}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Main",
  data() {
    return {
      firstView: false,
      errorMsg: "",
      loading: false,
      users: [],
    };
  },
  mounted(){
    /* 绑定事件监听search */
    this.$eventBus.$on('search', (searchName) => {

      this.loading = true

      /* axios请求数据 */
      axios.get('/api/search/users', {
        params: {
          q: searchName
        }
      })
      .then(response => {
        const res = response.data
        const users = res.items.map(item => ({
          username: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url
        }))
        console.log(users)

        this.loading = false
        this.users = users
      })
      .catch(error => {
        this.loading = false
        this.errorMsg = error.message
      })
    })  
  },

  beforeDestroy(){
    /* 销毁前解绑 */
    this.$eventBus.$off('search')
  }
};
</script>

<style scoped>
/* main */
.main {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.main h2 {
  margin: 20px auto;
}
.main .mainItem {
  box-sizing: border-box;
  width: 33.3%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.main .mainItem:nth-child(3n+0) {
  border-right: 1px solid #ccc;
}

.main .mainItem:last-child{
  border-right: 1px solid #ccc;
}

.main .mainItem:nth-child(-n+3){
  border-top: 1px solid #ccc;
}

.main .mainItem img {
  width: 80px;
  height: 80px;
}

.main .mainItem p {
  font-size: 14px;
  color: #555;
}
</style>