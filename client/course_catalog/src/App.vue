<template>
  <div>
    <NavBar></NavBar> 
  </div>
  <div class="content">
    <CatalogComponent></CatalogComponent>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import CatalogComponent from "./components/CatalogComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    CatalogComponent,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  margin-top: 96px;
}
</style>
