<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.content {
  margin-top: 96px;
}
</style>
