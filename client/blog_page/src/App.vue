<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <BlogComponent></BlogComponent>
    <RelatedBlogs></RelatedBlogs>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";

import BlogComponent from "./components/BlogComponent.vue";
import RelatedBlogs from "./components/RelatedBlogs.vue"

export default {
  name: "App",
  components: {
    NavBar,
    BlogComponent,
    RelatedBlogs,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  padding-top: 96px;
}
</style>
