<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <AboutUs></AboutUs>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import AboutUs from "./components/AboutUs.vue"

export default {
  name: "App",
  components: {
    NavBar,
    AboutUs
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  margin-top: 96px;
}
</style>
