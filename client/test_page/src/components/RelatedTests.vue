<template>
  <div class="RelatedTests">
    <header>
      <h2>Похожие тесты</h2>
      <blue-button180> Смотреть больше </blue-button180>
    </header>
    <Carousel ref="carousel" :breakpoints="breakpoints" v-model="currentSlide">
      <Slide v-for="test in tests.array" :key="test.id">
        <a href="#">
          <div class="carousel__item">
            <header>
              <p class="text1">{{ test.Theme }}</p>
              <time>
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

                <p class="caption">{{ test.timeToPass }} мин.</p>

                <p class="caption">{{ test.questionAmount }} вопроса</p>
              </time>
            </header>

            <h4>
              {{ test.header }}
            </h4>

            <p class="caption">
              {{ test.author }}
            </p>
          </div>
        </a>
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
      tests: {
        amount: 16,
        array: [
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
          {
            id: 1,
            Theme: "Педагогика",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            timeToPass: "60",
            questionAmount: 24,
            author: "Аванесова Татьяна",
          },
        ],
      },
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
};
</script>

<style scoped lang="scss">
a {
  color: #000;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}
// slider left right btns in App.vue styles
.RelatedTests {
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
  margin-top: 60px;
  margin-bottom: 100px;

  &__item {
    padding-left: 30px;
    padding-top: 40px;
    padding-right: 30px;
    padding-bottom: 40px;

    width: 100%;

    border-radius: 12px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    header {
      display: flex;
      gap: 48px;

      @media (max-width: 400px) {
        flex-direction: column;
        gap: 20px;
      }

      time {
        color: #3d8be4;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 8px;
      }
    }

    h4 {
      margin-top: 20px;

      max-width: 303px;

      text-align: left;
    }

    p.caption {
      margin-top: 20px;
      text-align: left;
    }
  }
}
</style>
