<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <VideoCatalog></VideoCatalog>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import VideoCatalog from "./components/VideoCatalog.vue"
export default {
  name: "App",
  components: {
    NavBar,
    VideoCatalog
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  margin-top: 96px;
}
</style>
