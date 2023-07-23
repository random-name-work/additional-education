<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <HeaderScene></HeaderScene>
    <FindCource></FindCource>
    
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderScene from "./components/HeaderScene.vue";
import FindCource from "./components/FindCource.vue"
export default {
  name: "App",
  components: {
    NavBar,
    HeaderScene,
    FindCource
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
p,
a,
h1,
h2,
h3,
button,
.v-btn {
  font-family: "Golos Text", sans-serif;
}

.v-btn {
  font-size: 16px;
  color: #ff00fa;
}

.content {
  width: 1200px;
  margin: auto;

  
}
</style>
