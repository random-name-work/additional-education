<template>
  <div class="license">
    <div class="content">
      <h2>Лицензия на право ведения образовательной деятельности</h2>
      <p class="text1">
        Лицензия на осуществление образовательной деятельности №7536 от 16
        ноября 2020 года выдана ООО "Университет дополнительного
        профессионального образования". Лицензия дает право на осуществление
        образовательной деятельности по любым программам дополнительного
        профессионального образования и выдачу документов установленного
        образца. Лицензия выдана бессрочно и без дополнительных ограничений. Вы
        можете проверить лицинзию, с помощью специального сервиса Рособрнадзора,
        позволяющего получить информацию из сводного реестра лицензий. Для
        этого, достаточно просто указать номер лицензии - 7536 в соответствующее
        поле формы.
      </p>

      <div class="btns">
        <blue-button180 :href="`https://google.com`">
          Скачать PDF
        </blue-button180>
        <white-button225 :href="`https://google.com`">
          Проверить лицензию
        </white-button225>
      </div>
    </div>
    <Carousel ref="carousel" :wrapAround="true" v-model="currentSlide">
      <Slide v-for="license in licenses" :key="license.id">
        <div class="carousel__item">
          <img src="./../assets/License.png" alt="license" />
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
      licenses: [
        {
          id: 1,
          img: "",
        },
        {
          id: 2,
          img: "",
        },
        {
          id: 3,
          img: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.license {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  padding-top: 120px;
  padding-bottom: 100px;

  display: flex;
  gap: 150px;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    padding-left: 15px;
    padding-right: 15px;
  }
  .content {
    h2 {
      max-width: 570px;
      width: 100%;
      @media (max-width: 1300px) {
        text-align: center;
      }
    }
    p {
      margin-top: 40px;

      max-width: 570px;
      width: 100%;
      @media (max-width: 1300px) {
        text-align: center;
      }
    }
    .btns {
      margin-top: 60px;

      display: flex;
      gap: 20px;

      @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;

        .v-btn{
            margin-right: auto;
            margin-left: auto;
        }
      }
    }
  }
  .carousel {
    max-width: 390px;
    width: 100%;

    &__item {
      margin-bottom: 20px;

      padding-left: 10px;
      padding-right: 10px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
