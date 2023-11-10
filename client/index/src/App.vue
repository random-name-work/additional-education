<template>
  <div>
    <NavBar></NavBar>
  </div>
  <div class="content">
    <HeaderScene></HeaderScene>
    <FindCource
      v-if="faculties && courses"
      :courses="courses"
      :faculty="faculties"
    ></FindCource>
    <Advantages></Advantages>
    <LowPrice
      v-if="faculties && lowPrice"
      :lowPrice="lowPrice"
      :faculty="faculties"
    ></LowPrice>
    <VideoLections
      v-if="videolections"
      :videolections="videolections"
    ></VideoLections>
    <FormalitiesComponent></FormalitiesComponent>
    <PopularPrograms
      v-if="faculties && popularCourses"
      :popularCourses="popularCourses"
      :faculty="faculties"
    ></PopularPrograms>
    <ProvidedTraining></ProvidedTraining>
    <OurManagers></OurManagers>
    <EducationLicense></EducationLicense>
    <OurBlog v-if="blogs" :blogs="blogs"></OurBlog>
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

import axios from "axios";

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
    return {
      courses: false,
      faculties: false,
      lowPrice: false,
      popularCourses: false,
      videolections: false,
      blogs: false,
      authorsImgAndName: false,
    };
  },
  methods: {
    async getCourses() {
      try {
        const coursesLink = "http://localhost:3000/course/courses";
        const courses = await axios.get(coursesLink);

        this.courses = courses.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getFaculties() {
      try {
        const facultiesLink = "http://localhost:3000/sort/faculty";
        const faculties = await axios.get(facultiesLink);

        this.faculties = faculties.data;
        this.faculties.unshift({
          id: -1,
          name: "Все курсы",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getLowPrice() {
      try {
        const LowPriceLink =
          "http://localhost:3000/course/coursesForAdditional/LowPrice";
        const lowPrice = await axios.get(LowPriceLink);

        this.lowPrice = lowPrice.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPopular() {
      try {
        const popularLink =
          "http://localhost:3000/course/coursesForAdditional/%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B";

        const popularCourses = await axios.get(popularLink);

        this.popularCourses = popularCourses.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getVideolections() {
      try {
        const videolectionLink =
          "http://localhost:3000/videolection/videolections";

        const videolections = await axios.get(videolectionLink);

        this.videolections = videolections.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getBlogsAndAuthor() {
      try {
        const blogLink = "http://localhost:3000/blog/blogs";
        const blogs = await axios.get(blogLink);
        this.blogs = blogs.data;

        let authorLink = 'http://localhost:3000/user/';
        let imgAndNameLink = 'http://localhost:3000/user/userImgAndName/';

        this.authorsImgAndName = []

        let newBlogs = []
        for await (let blog of this.blogs){
          let link = authorLink + blog.authorId
          const author = await axios.get(link);

          link = imgAndNameLink + author.data.id
          const imgAndName = await axios.get(link)
          blog = {
            ...blog,
            ...imgAndName.data
          }
          // date change
          const date = blog.createdAt
          blog.createdAt = date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4) 
          blog.name = "Федоров Сергей"
          newBlogs.push(blog)
        }
        this.blogs = newBlogs
        console.log(this.blogs)
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getCourses();
    await this.getFaculties();
    await this.getLowPrice();
    await this.getPopular();
    await this.getVideolections();
    await this.getBlogsAndAuthor();
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.content {
  margin-top: 96px;
}
</style>
