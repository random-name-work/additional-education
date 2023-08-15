<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="contentApp">
    <HeaderScene></HeaderScene>
    <CourseInfo></CourseInfo>
    <EducationalDiploma></EducationalDiploma>
    <CourseSignUp></CourseSignUp>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderScene from "./components/HeaderScene.vue";
import CourseInfo from "./components/CourseInfo.vue";
import EducationalDiploma from "./components/EducationalDiploma.vue";
import CourseSignUp from "./components/CourseSignUp.vue";
export default {
  name: "App",
  components: {
    NavBar,
    HeaderScene,
    CourseInfo,
    EducationalDiploma,
    CourseSignUp
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

.contentApp {
  margin-top: 96px;
}

// CourseInfo Carousel paginationBtn customization
.carousel__pagination-button::after {
  margin-top: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.carousel {
  &__prev,
  &__next {

    width: 57px;
    height: 57px;

    border: 1px solid #000000;
    border-radius: 50%;

    svg {
      margin-top: 4px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width:800px){

    &__prev {
      top: 98%;
      left: calc(50% - 150px);
    }
    &__next {
      top: 98%;
      right: calc(50% - 150px);
    }
  }
}
</style>
