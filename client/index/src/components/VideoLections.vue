<template>
  <div class="videoSlider">
    <Carousel
      ref="carousel"
      itemsToShow="1"
      snapAlign="center"
      wrapAround="true"
      v-model="currentSlide"
    >
      <Slide v-for="video in Videos" :key="video.id">
        <div class="carousel__item">
          <div class="leftPart">
            <h5>Видеолекции</h5>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <blue-button180 :href="`https://google.com`">
              Смотреть все
            </blue-button180>
          </div>
          <div class="rightPart">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62Z"
                  fill="#3D8BE4"
                />
                <path d="M25 12L45 32L25 52V12Z" fill="white" />
              </svg>
              <img src="./../assets/Video.png" alt="video" />
            </a>
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
  data() {
    return {
      Videos: [
        {
          id: 1,
          img: "@/img/courseImage1.png",
        },

        {
          id: 2,
          img: "./../assets/courseImage2.png",
        },
        {
          id: 3,
          img: "./../assets/courseImage3.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
// slider left right btns in App.vue styles
.videoSlider {
  max-width: 1200px;
  width: 100%;

  margin: auto;
  padding-top: 120px;

  @media (max-width: 1300px) {
    padding-top: 80px;
  }
}
.carousel {
  margin-top: 47px;
  margin-bottom: 100px;

  &__item {
    padding-bottom: 60px;

    display: flex;
    gap: 2%;

    @media (max-width: 1300px) {
      flex-direction: column;
    }
    .leftPart {
      max-width: 49%;
      width: 100%;

      text-align: left;

      @media (max-width: 1300px) {
        padding-left: 10px;
        padding-right: 10px;

        max-width: 100%;
        flex-direction: column;

        text-align: center;
      }
      h2 {
        margin-top: 20px;
      }
      .v-btn {
        margin-top: 60px;

        @media (max-width: 1300px) {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .rightPart {
      position: relative;

      max-width: 49%;
      width: 100%;

      @media (max-width: 1300px) {
        margin-top: 40px;
        padding-left: 10px;
        padding-right: 10px;

        max-width: 100%;
        flex-direction: column;
      }

      img {
        max-width: 570px;
        max-height: 302px;

        width: 100%;
        height: 100%;

        @media (max-width: 1300px) {
          padding-left: 10px;
          padding-right: 10px;

          max-width: 100%;
          flex-direction: column;
        }
      }
      svg {
        position: absolute;
        left: calc(50% - 32px);
        top: calc(50% - 32px);
      }
    }
  }
}
</style>
