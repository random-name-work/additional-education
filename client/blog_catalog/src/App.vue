<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <BlogCatalog></BlogCatalog>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import BlogCatalog from "./components/BlogCatalog.vue"
export default {
  name: "App",
  components: {
    NavBar,
    BlogCatalog
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  padding-top: 96px;
}
</style>
