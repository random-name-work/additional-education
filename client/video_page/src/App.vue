<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <LectionComponent></LectionComponent>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

import LectionComponent from "./components/LectionComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    LectionComponent
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
}
h1 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(30px, 9.3vw, 55px);
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
h2 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(24px, 7.5vw, 36px);
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
h3 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(20px, 6.2vw, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
h4 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(16px, 5vw, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
h5 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(14px, 4.3vw, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.text1,
.v-field-label {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(15px, 4.6vw, 17px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.text2 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(17px, 5.3vw, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
}
.text3 {
  font-family: "Golos Text", sans-serif;
  font-size: clamp(14px, 4.3vw, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
// menu button
.menu,
.v-btn {
  font-family: "Golos Text", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
}
.caption {
  font-family: "Golos Text", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.12px;
}

.content {
  margin-top: 96px;
}

// solution for wrap text in v-btn in LectionComponent.vue
.v-btn .v-btn__content {
  width: 100%;
  white-space: wrap;
}
</style>
