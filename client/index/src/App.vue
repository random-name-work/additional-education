<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <HeaderScene></HeaderScene>
    <FindCource></FindCource>
    <Advantages></Advantages>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderScene from "./components/HeaderScene.vue";
import FindCource from "./components/FindCource.vue";
import Advantages from "./components/AdvantagesUdpo.vue"
export default {
  name: "App",
  components: {
    NavBar,
    HeaderScene,
    FindCource,
    Advantages
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


//slider arrows
.carousel{
  &__prev,
  &__next{
    top: 99%;

    width: 57px;
    height: 57px;

    border: 1px solid #000000;
    border-radius: 50%;

    svg{
      margin-top: 11px;
    }

    &:hover{
      opacity: 0.8;
    }
  }
  &__prev{
    left: calc(50% - 150px);
  }
  &__next{
    right: calc(50% - 150px);
  }
}


</style>
