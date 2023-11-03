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
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import HeaderScene from "@/components/HeaderScene.vue";
import FindCource from "@/components/FindCource.vue";
import Advantages from "@/components/AdvantagesUdpo.vue";
import LowPrice from "@/components/LowPrice.vue";
import VideoLections from "@/components/VideoLections.vue";
import FormalitiesComponent from "@/components/FormalitiesComponent.vue";
import PopularPrograms from "@/components/PopularPrograms.vue";
import ProvidedTraining from "@/components/ProvidedTraining.vue";
import OurManagers from "@/components/OurManagers.vue";
import EducationLicense from "@/components/EducationLicense.vue";
import OurBlog from "@/components/OurBlog.vue";
import QuestionsAndAnswers from "@/components/QuestionsAndAnswers.vue";
import ContactForm from "@/components/ContactForm.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

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
    FooterComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.content {
  margin-top: 96px;
}
</style>
