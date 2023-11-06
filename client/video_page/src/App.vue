<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <LectionComponent></LectionComponent>
    <RelatedLectures></RelatedLectures>
    <EducationLicense></EducationLicense>
    <ContactForm></ContactForm>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";

import LectionComponent from "./components/LectionComponent.vue";
import RelatedLectures from "./components/RelatedLectures.vue"
import EducationLicense from "./components/EducationLicense.vue"
import ContactForm from "./components/ContactForm.vue"
import FooterComponent from "./components/common/FooterComponent.vue"

export default {
  name: "App",
  components: {
    NavBar,
    LectionComponent,
    RelatedLectures,
    EducationLicense,
    ContactForm,
    FooterComponent
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content {
  margin-top: 96px;
}
</style>
