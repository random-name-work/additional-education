<template>
  <div class="findCourseSlider">
    <h2>Найти то, что тебе нужно</h2>
    <div class="btns">
      <div class="btn" v-for="btn in faculty" :key="btn.id">
        <input
          v-model="sortType"
          :id="`${btn.id}`"
          type="radio"
          name="type"
          :value="`${btn.name}`"
        />
        <div class="label">
          <label :for="`${btn.id}`" @click="displayId = btn">
            <h5>
              {{ btn.name }}
            </h5>
          </label>
        </div>
      </div>
    </div>
    <Carousel ref="carousel" :breakpoints="breakpoints" v-model="currentSlide">
      <Slide v-for="course in sortedCourses" :key="course.id">
        <div class="carousel__item">
          <img src="@/assets/courseImage1.png" alt="" />
          <div class="type">
            <p class="text1">
              {{ faculty.find((element) => element.id == course.facultyId).name }}
            </p>
          </div>
          <div class="header">
            <h4>
              {{ course.courseName }}
            </h4>
          </div>
          <div class="timeAndBtn">
            <div class="timeAndBtn__time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M12 6V14L16.5 17.5" stroke="#3D8BE4" />
                <circle cx="12" cy="12" r="11.5" stroke="#3D8BE4" />
              </svg>
              <p class="caption">
                От {{ course.minHours }} ак. ч.
              </p>
            </div>
            <div class="timeAndBtn__btn">
              <white-button140 :href="`https:/google.com`">
                Подробнее
              </white-button140>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <navigation>
          <template #next>
            <span>
              <svg
                class="carousel__icon"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Arrow pointing to the right"
              >
                <title>Arrow pointing to the right</title>
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                ></path>
              </svg>
            </span>
          </template>
          <template #prev>
            <span>
              <svg
                class="carousel__icon"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Arrow pointing to the left"
              >
                <title>Arrow pointing to the left</title>
                <path
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                ></path>
              </svg>
            </span>
          </template>
        </navigation>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props:{
    courses: Array,
    faculty: Array
  },
  data() {
    return {
      sortType: "Все курсы",
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
          wrapAround: "true",
        },
        600: {
          itemsToShow: 1.5,
          snapAlign: "center",
          wrapAround: "true",
        },
        800: {
          itemsToShow: 2,
          snapAlign: "center",
          wrapAround: "true",
        },
        1000: {
          itemsToShow: 2.5,
          snapAlign: "center",
          wrapAround: "true",
        },
        1300: {
          itemsToShow: 3,
          snapAlign: "center",
          wrapAround: "true",
        },
      },
    };
  },
  computed:{
    sortedCourses(){
      if (this.sortType == "Все курсы") {
        return this.courses
      }
      else{
        const facultyId = this.faculty.find((fac) => fac.name == this.sortType).id
        return this.courses.filter((course) => course.facultyId == facultyId)
      }
    }
  }
};
</script>

<style lang="scss">
@import url(../styles/content/base.scss);
// slider left right btns in App.vue styles
.findCourseSlider {
  max-width: 1200px;
  width: 100%;

  margin: auto;
  padding-top: 120px;

  @media (max-width: 1300px) {
    padding-top: 80px;
  }
  h2 {
    margin-left: 10px;
    margin-right: 10px;

    text-align: center;
  }
  .btns {
    margin-top: 30px;

    margin-left: 10px;
    margin-right: 10px;

    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    // custom input
    input {
      display: none;
    }
    input:checked ~ .label {
      color: var(--main-color);

      padding-bottom: 7px;
      border-bottom: 2px solid var(--main-color);
    }
    label {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  .carousel {
    margin-top: 47px;
    margin-bottom: 100px;
    &__item {
      position: relative;

      min-height: 465px;
      width: 100%;

      padding-bottom: 22px;

      border-radius: 12px;
      border: 1px solid #e5e5e5;

      background: #ffffff;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      overflow: hidden;

      img {
        width: 100%;
      }
      .type {
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: left;
        @media (max-width: 450px) {
          text-align: center;
        }
      }
      .header {
        margin-top: 20px;
        margin-left: 29px;
        margin-right: 29px;
        text-align: left;

        @media (max-width: 450px) {
          text-align: center;
        }
      }
      .timeAndBtn {
        margin-left: 30px;
        margin-right: 30px;

        position: absolute;
        bottom: 22px;

        width: calc(100% - 60px);

        text-align: left;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &__time {
          display: flex;
          align-items: center;

          gap: 8px;
        }
        @media (max-width: 450px) {
          flex-direction: column;
          gap: 20px;
        }
      }
    }

    &__slide {
      padding: 26px;
    }
  }
}
</style>
