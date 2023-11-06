<template>
  <div class="RelatedBlogs">
    <header>
      <h2>Рекомендовано</h2>
      <blue-button180> Читать больше </blue-button180>
    </header>
    <Carousel
      ref="carousel"
      :snap-align="center"
      :breakpoints="breakpoints"
      v-model="currentSlide"
    >
      <Slide v-for="post in posts" :key="post.id">
        <a href="#">
          <div class="carousel__item">
            <img src="@/assets/blogImage.png" alt="" />

            <div class="header">
              <h4>
                {{ post.header }}
              </h4>
            </div>

            <div class="user">
              <img src="./../assets/blogUserImage.png" alt="blogUserImage" />
              <div class="data">
                <h5>{{ post.user.name }}</h5>
                <div class="caption">
                  <p class="caption name">{{ post.time }}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M7 3.08008C2.4073 3.08008 0 6.46248 0 7.00008C0 7.53628 2.4073 10.9201 7 10.9201C11.592 10.9201 14 7.53628 14 7.00008C14 6.46248 11.592 3.08008 7 3.08008ZM7 10.015C5.2815 10.015 3.8885 8.66538 3.8885 7.00008C3.8885 5.33478 5.2815 3.98378 7 3.98378C8.7185 3.98378 10.1108 5.33478 10.1108 7.00008C10.1108 8.66538 8.7185 10.015 7 10.015ZM7 7.00008C6.7151 6.68718 7.4641 5.49228 7 5.49228C6.1404 5.49228 5.4439 6.16778 5.4439 7.00008C5.4439 7.83238 6.1404 8.50788 7 8.50788C7.8589 8.50788 8.5561 7.83238 8.5561 7.00008C8.5561 6.61718 7.2422 7.26538 7 7.00008Z"
                      fill="black"
                    />
                  </svg>
                  <p class="caption views">{{ post.views }}</p>
                </div>
              </div>
            </div>
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
      posts: [
        {
          id: 1,
          header:
            "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
          user: {
            name: "Федеров Сергей",
            image: "",
          },
          time: "02 дек 2020",
          views: 239,
        },
        {
          id: 1,
          header:
            "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
          user: {
            name: "Федеров Сергей",
            image: "",
          },
          time: "02 дек 2020",
          views: 239,
        },
        {
          id: 1,
          header:
            "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
          user: {
            name: "Федеров Сергей",
            image: "",
          },
          time: "02 дек 2020",
          views: 239,
        },
        {
          id: 1,
          header:
            "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
          user: {
            name: "Федеров Сергей",
            image: "",
          },
          time: "02 дек 2020",
          views: 239,
        },
        {
          id: 1,
          header:
            "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
          user: {
            name: "Федеров Сергей",
            image: "",
          },
          time: "02 дек 2020",
          views: 239,
        },
      ],
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
.RelatedBlogs {
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
    width: 100%;

    padding-bottom: 22px;

    img {
      width: 100%;
    }
    .header {
      margin-top: 20px;
      text-align: left;

      @media (max-width: 450px) {
        text-align: center;
      }
    }
    .user {
      margin-top: 20px;

      display: flex;
      gap: 15px;

      img {
        width: 40px;
        height: 40px;
      }

      .data {
        .caption {
          display: flex;

          opacity: 0.8;
          svg {
            margin-left: 15px;
          }
          .views {
            margin-left: 6px;
          }
        }
      }
    }
  }

  &__slide {
    padding: 26px;
  }
}
</style>
