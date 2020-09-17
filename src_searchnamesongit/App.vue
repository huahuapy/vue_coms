<template>
  <div class="container">
    <Search />
    <Main />
  </div>
</template>

<script>
import Search from "./components/Search";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Search,
    Main,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>