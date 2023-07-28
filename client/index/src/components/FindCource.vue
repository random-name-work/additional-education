<template>
  <div class="findCourseSlider">
    <h2>Найти то, что тебе нужно</h2>
    <div class="btns">
      <div class="btn" v-for="btn in buttonsName" :key="btn">
        <input v-model="sortType" :id="`${btn}`" type="radio" name="type" :value="`${btn}`" />
        <label :for="`${btn}`" @click="displayId = btn">{{ btn }}</label>
      </div>
    </div>
    <Carousel ref="carousel" :items-to-show="3" v-model="currentSlide">
      <Slide v-for="course in sortedCourses" :key="course.id">
        <div class="carousel__item">
          <img src="@/assets/courseImage1.png" alt="" />
          <div class="type">
            <p>
              {{ course.header }}
            </p>
          </div>
          <div class="header">
            <p>
              {{ course.content }}
            </p>
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
              <p>
                {{ course.time }}
              </p>
            </div>
            <div class="timeAndBtn__btn">
              <v-btn
                href="#"
                variant="outlined"
                color="#3d8be4"
                min-height="40px"
                min-width="140px"
                block
              >
                Подробнее
              </v-btn>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <navigation>
        <template #next>
          <span> <svg
      class="carousel__icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Arrow pointing to the right"
    >
      <title>Arrow pointing to the right</title>
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
    </svg> </span>
        </template>
        <template #prev>
          <span> <svg
      class="carousel__icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Arrow pointing to the left"
    >
      <title>Arrow pointing to the left</title>
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    </svg> </span>
        </template>
      </navigation>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      buttonsName: [
        "Все курсы",
        "Педагогика",
        "Психология",
        "Медицина",
        "Юриспруденция",
        "Бизнес",
        "Экономика",
      ],
      sortType: "Все курсы",
      sortedCourses: [
        {
          id: 1,
          img: "img/courseImage1.png",
          header: "Педагогика",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 2,
          img: "./../assets/courseImage2.png",
          header: "Медицина",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 3,
          img: "./../assets/courseImage3.png",
          header: "Юриспруденция",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 4,
          img: "./../assets/courseImage1",
          header: "Педагогика",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 5,
          img: "./../assets/courseImage2",
          header: "Медицина",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 6,
          img: "./../assets/courseImage3",
          header: "Юриспруденция",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 7,
          img: "./../assets/courseImage1",
          header: "Педагогика",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 8,
          img: "./../assets/courseImage2",
          header: "Медицина",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 9,
          img: "./../assets/courseImage3",
          header: "Юриспруденция",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.findCourseSlider{
  width: 1200px;
  margin: auto;
}
h2 {
  margin-top: 120px;

  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  text-align: center;
}
.btns {
  margin-top: 30px;

  display: flex;
  gap: 40px;
  justify-content: center;

  input {
    display: none;
  }

  input:checked + label {
    color: #3d8be4;

    padding-bottom: 7px;
    border-bottom: 2px solid #3d8be4;
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
    min-height: 487px;
    width: 100%;
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
    }
    .header {
      margin-top: 20px;
      margin-left: 30px;
      margin-right: 30px;
      text-align: left;

      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
    }
    .timeAndBtn {
      margin-top: 32px;
      margin-left: 30px;
      margin-right: 30px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &__time {
        display: flex;
        gap: 8px;
      }
    }
  }

  &__slide {
    padding: 26px;
  }

}
</style>
