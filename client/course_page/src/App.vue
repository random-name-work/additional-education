<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="contentApp">
    <HeaderScene></HeaderScene>
    <CourseInfo></CourseInfo>
    <EducationalDiploma></EducationalDiploma>
    <CourseSignUp></CourseSignUp>
    <ContactFormBlue></ContactFormBlue>
    <EducationPlan></EducationPlan>
    <SimilarCourses></SimilarCourses>
    <EducationLicense></EducationLicense>
    <socialReposte></socialReposte>
    <CourseSignUp></CourseSignUp>
    <MightBeInteresting></MightBeInteresting>
    <ContactForm></ContactForm>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";
import HeaderScene from "./components/HeaderScene.vue";
import CourseInfo from "./components/CourseInfo.vue";
import EducationalDiploma from "./components/EducationalDiploma.vue";
import CourseSignUp from "./components/CourseSignUp.vue";
import ContactFormBlue from "./components/ContactFormBlue.vue";
import EducationPlan from "./components/EducatuonPlan.vue";
import SimilarCourses from "./components/SimilarCourses.vue";
import EducationLicense from "./components/EducationLicense.vue";
import socialReposte from "./components/SocialReposte.vue";
import MightBeInteresting from "./components/MightBeInteresting.vue";
import ContactForm from "./components/ContactForm.vue";
import FooterComponent from "./components/common/FooterComponent.vue"
export default {
  name: "App",
  components: {
    NavBar,
    HeaderScene,
    CourseInfo,
    EducationalDiploma,
    CourseSignUp,
    ContactFormBlue,
    EducationPlan,
    SimilarCourses,
    EducationLicense,
    socialReposte,
    MightBeInteresting,
    ContactForm,
    FooterComponent
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.contentApp {
  margin-top: 96px;
}
</style>
