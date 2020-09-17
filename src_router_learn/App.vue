<template>
  <div class="container">
    <h2>Router Basic 01</h2>
    <div class="view">
      <div class="viewleft">
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
   name: 'App',
}
</script>

<style scoped>

</style>