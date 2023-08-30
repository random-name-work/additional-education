<template>
  <div class="blogMain">
    <header>
      <h2>Каталог видеолекций</h2>
    </header>

    <div class="sortSettings">
      <div class="found">
        <p class="text1">Найдено: {{ blogs.amount }}</p>
      </div>
      <div class="sortType">
        <p class="text1">По популярности</p>
        <input type="checkbox" />
        <p class="text1">По дате обновления</p>
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

    <div class="blogs">
      <a href="#" class="blog" v-for="blog in sortedBlogs" :key="blog.id">
        <img src="@/assets/blogImage.png" alt="blog Image" />

        <div class="header">
          <h4>
            {{ blog.header }}
          </h4>
        </div>

        <div class="user">
          <img src="./../assets/blogUserImage.png" alt="blogUserImage" />
          <div class="data">
            <h5>{{ blog.user.name }}</h5>
            <div class="caption">
              <p class="caption name">{{ blog.time }}</p>
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
              <p class="caption views">{{ blog.views }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="moreBtn">
      <v-btn
        @click="blogsAmount += 6"
        v-if="blogsAmount < blogs.array.length"
        class="text-white"
        flat
        color="#3d8be4"
        min-height="60px"
        max-width="180px"
        min-width="180px"
        block
      >
        Загрузить ещё 6
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsAmount: 6,
      themes: ["Педагогика", "Юриспруденция"],
      blogs: {
        amount: 16,
        array: [
          {
            id: 1,
            header:
              "Как получить налоговый вычет за обучение: на что обратить внимание и стоит ли оформлять его через посредников",
            user: {
              name: "Федеров Сергей",
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
            },
            time: "02 дек 2020",
            views: 239,
          },
        ],
      },
    };
  },
  computed: {
    sortedBlogs() {
      return this.blogs.array.slice(0, this.blogsAmount);
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
.blogMain {
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

    align-items: flex-end;
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

  .blogs {
    margin-top: 40px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;

    .blog {
      max-width: 365px;
      img {
        max-width: 365px;
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
  }
  .moreBtn {
    margin-top: 80px;
    width: 100%;

    display: flex;
    justify-content: center;
  }
}
</style>
