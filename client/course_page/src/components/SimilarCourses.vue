<template>
  <div class="similarCourses">
    <header>
      <h2>Популярные программы</h2>
      <v-btn
        flat
        href="#"
        color="#3d8be4"
        min-height="60px"
        min-width="180px"
        max-width="180px"
      >
        Смотреть больше
      </v-btn>
    </header>
    <Carousel ref="carousel" :breakpoints="breakpoints" v-model="currentSlide">
      <Slide v-for="course in sortedCourses" :key="course.id">
        <div class="carousel__item">

          <img src="@/assets/courseImage1.png" alt="" />

          <div class="type">
            <p class="text1">
              {{ course.header }}
            </p>
          </div>

          <div class="header">
            <h4>
              {{ course.content }}
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
      sortedCourses: [
        {
          id: 1,
          img: "@/img/courseImage1.png",
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
      ],
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 1.5,
        },
        800: {
          itemsToShow: 2,
        },
        1000: {
          itemsToShow: 2.5,
        },
        1300: {
          itemsToShow: 3,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
// slider left right btns in App.vue styles
.similarCourses {
  max-width: 1200px;
  width: 100%;

  margin: auto;
  padding-top: 120px;

  @media (max-width: 1300px) {
    padding-top: 80px;
  }
}

header {
  display: flex;

  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    padding-left: 10px;
    padding-right: 10px;

    text-align: left;

    @media (max-width: 1300px) {
      text-align: center;
    }
  }
  .v-btn {
    @media (max-width: 1300px) {
      margin-top: 20px;
    }
  }
}
.carousel {
  margin-top: 47px;
  margin-bottom: 100px;
  &__item {
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
      margin-left: 30px;
      margin-right: 30px;
      text-align: left;

      @media (max-width: 450px) {
        text-align: center;
      }
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
</style>
