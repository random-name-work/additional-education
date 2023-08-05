<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <HeaderScene></HeaderScene>
    <FindCource></FindCource>
    <Advantages></Advantages>
    <LowPrice></LowPrice>
    <VideoLections></VideoLections>
    <FormalitiesComponent></FormalitiesComponent>
    <PopularPrograms></PopularPrograms>
    <ProvidedTraining></ProvidedTraining>
    <OurManagers></OurManagers>
    <EducationLicense></EducationLicense>
    <OurBlog></OurBlog>
    <QuestionsAndAnswers></QuestionsAndAnswers>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderScene from "./components/HeaderScene.vue";
import FindCource from "./components/FindCource.vue";
import Advantages from "./components/AdvantagesUdpo.vue";
import LowPrice from "./components/LowPrice.vue";
import VideoLections from "./components/VideoLections.vue";
import FormalitiesComponent from "./components/FormalitiesComponent.vue";
import PopularPrograms from "./components/PopularPrograms.vue";
import ProvidedTraining from "./components/ProvidedTraining.vue";
import OurManagers from "./components/OurManagers.vue";
import EducationLicense from "./components/EducationLicense.vue";
import OurBlog from "./components/OurBlog.vue";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderScene,
    FindCource,
    Advantages,
    LowPrice,
    VideoLections,
    FormalitiesComponent,
    PopularPrograms,
    ProvidedTraining,
    OurManagers,
    EducationLicense,
    OurBlog,
    QuestionsAndAnswers,
    ContactForm,
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
//slider arrows
.carousel {
  &__prev,
  &__next {
    top: 99%;

    width: 57px;
    height: 57px;

    border: 1px solid #000000;
    border-radius: 50%;

    svg {
      margin-top: 11px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
  &__prev {
    left: calc(50% - 150px);
  }
  &__next {
    right: calc(50% - 150px);
  }
}

// ContactForm checkbox settings
.v-input {
  &__control {
    margin-top: 10px;

    .v-label {
      overflow: visible;
    }
  }

  &__details {
    margin-top: 10px;
  }
}
</style>
