<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <TestCatalog></TestCatalog>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import TestCatalog from "./components/TestCatalog.vue"
export default {
  name: "App",
  components: {
    NavBar,
    TestCatalog
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  margin-top: 96px;
}
</style>
