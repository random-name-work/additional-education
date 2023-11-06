<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <AccountComponent></AccountComponent>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import AccountComponent from "./components/AccountComponent.vue"
export default {
  name: "App",
  components: {
    NavBar,
    AccountComponent,

  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  padding-top: 96px;
}
</style>
