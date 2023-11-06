<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <TestComponent></TestComponent>
    <RelatedTests></RelatedTests>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";

import TestComponent from "./components/TestComponent.vue";
import RelatedTests from "./components/RelatedTests.vue"

export default {
  name: "App",
  components: {
    NavBar,
    TestComponent,
    RelatedTests,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  padding-top: 96px;
}

//RelatedTests buttons fix
button.carousel__prev, 
button.carousel__next{
  top: 120% !important;
}
</style>
