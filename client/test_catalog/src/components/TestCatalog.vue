<template>
  <div class="testMain">
    <header>
      <h2>Каталог видеолекций</h2>
    </header>
    <div class="sortSettings">
      <div class="found">
        <p class="text1">Найдено: {{ tests.amount }}</p>
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

    <div class="tests">
      <a href="#" class="test" v-for="test in sortedTests" :key="test.id">
        <div class="test__item">
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
    </div>

    <div class="btn">
      <v-btn
        @click="testsAmount += 6"
        v-if="testsAmount < tests.amount"
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
      testsAmount: 9,
      themes: ["Theme1", "Theme2"],
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
    };
  },
  computed: {
    sortedTests() {
      return this.tests.array.slice(0, this.testsAmount);
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
.testMain {
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
  .tests {
    margin-top: 55px;

    display: flex;
    flex-wrap: wrap;
    gap: 49px;

    justify-content: center;
    .test {
      display: block;

      border-radius: 12px;
      border: 1px solid var(--line, #e5e5e5);
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      &__item {
        padding-left: 30px;
        padding-top: 40px;
        padding-right: 30px;
        padding-bottom: 40px;

        width: 100%;

        header {
          display: flex;
          gap: 48px;


          @media(max-width:400px){
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
        }

        // only p.caption in &_item, not &_item header
        & > p.caption{
          margin-top: 20px;
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
