<template>
  <div class="videoMain">
    <header>
      <h2>Каталог видеолекций</h2>
    </header>
    <div class="sortSettings">
      <div class="found">
        <p class="text1">Найдено: {{ videos.amount }}</p>
      </div>
      <div class="sortType">
        <checkbox-switcher
          first="По популярности"
          second="По дате обновления"
          v-model="checkboxSort"
        >
        </checkbox-switcher>
      </div>
      <div class="chooseTheme">
        <v-autocomplete
          label="Выберите тему"
          :items="themes"
          variant="underlined"
        ></v-autocomplete>
      </div>
      <div class="autocompleteFind">
        <v-autocomplete label="Поиск" variant="outlined"></v-autocomplete>
      </div>
    </div>
    <div class="videos">
      <div class="video" v-for="video in sortedVideos" :key="video.id">
        <a href="#">
          <div class="video__item">
            <img src="@/assets/mightBeInteresting.png" alt="videoImage" />

            <div class="header">
              <h4>
                {{ video.header }}
              </h4>
            </div>

            <div class="caption">
              <p class="caption name">{{ video.time }}</p>
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
              <p class="caption views">{{ video.views }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="btn">
      <blue-button180
        @click="videosAmount += 6"
        v-if="videosAmount < videos.amount"
      >
        Загрузить ещё 6
      </blue-button180>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxSort: "",
      videosAmount: 9,
      themes: ["Theme1", "Theme2"],
      videos: {
        amount: 16,
        array: [
          {
            id: 1,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 2,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 3,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 4,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 5,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 6,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 7,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 8,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 9,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 10,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 11,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 12,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 13,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 14,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 15,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
          {
            id: 16,
            header: "Дизайн жилого интерьера с нуля",
            time: "02 дек 2020",
            views: 239,
          },
        ],
      },
    };
  },
  computed: {
    sortedVideos() {
      return this.videos.array.slice(0, this.videosAmount);
    },
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
.videoMain {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    @media (max-width: 1279px) {
      text-align: center;
    }
  }
  .sortSettings {
    margin-top: 55px;

    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    align-items: center;
    justify-content: space-around;

    .found {
      margin-bottom: 10px;
    }
    .sortType {
      display: flex;
      gap: 10px;

      margin-bottom: 10px;

      text-align: center;
    }
    .chooseTheme {
      max-width: 233px;
      width: 100%;
    }
    .autocompleteFind {
      max-width: 291px;
      width: 100%;
    }
  }
  .videos {
    margin-top: 55px;

    display: flex;
    flex-wrap: wrap;
    gap: 49px;

    justify-content: center;
    .video {
      &__item {
        max-height: 367px;
        width: 100%;

        padding-bottom: 22px;

        img {
          max-width: 367px;
          width: 100%;

          border-radius: 20px;
        }
        .header {
          margin-top: 20px;
          text-align: left;

          @media (max-width: 450px) {
            text-align: center;
          }
        }
        .caption {
          margin-top: 20px;
          display: flex;

          opacity: 0.8;
          svg {
            margin-top: 20px;
            margin-left: 15px;
          }
          .views {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .btn {
    margin-top: 80px;
    width: 100%;

    display: flex;
    justify-content: center;
  }
}
</style>
