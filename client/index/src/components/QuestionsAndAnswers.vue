<template>
  <div class="bg_color">
    <div class="questionsAndAnswers">
      <header>
        <h2>Вопросы и ответы</h2>
      </header>

      <div class="main">
        <div class="card" v-for="question in FAQ" :key="question.id">
          <hr />
          <div class="card__header">
            <h4>{{ question.header }}</h4>
            <svg
              v-if="!isOpen.includes(question.id)"
              @click="isOpen.push(question.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path d="M0 14.5H30" stroke="black" />
              <path d="M15 30L15 -7.15256e-07" stroke="black" />
            </svg>
            <svg
              v-else
              @click="isOpen.splice(isOpen.indexOf(question.id), 1)"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="1"
              viewBox="0 0 30 1"
              fill="none"
            >
              <path d="M0 0.5H30" stroke="black" />
            </svg>
          </div>

          <div class="content">
            <p class="text1" v-if="isOpen.includes(question.id)">
              {{ question.content }}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FAQ: [
        {
          id: 1,
          header: "Где открывают визы?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
        {
          id: 2,
          header: "Где открывают визы?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
        {
          id: 3,
          header: "Что делать, если в билетах ошибка?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
        {
          id: 4,
          header: "Что делать, если в билетах ошибка?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
        {
          id: 5,
          header: "Что такое мультивиза?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
        {
          id: 6,
          header: "Что такое мультивиза?",
          content:
            "Обычно допускается до 3 ошибок в электронных билетах. К ошибкам в имени и фамилии относятся спокойно, если сохраняется правильное звучание. ",
        },
      ],
      isOpen: [1, 3],
    };
  },
};
</script>

<style scoped lang="scss">
.bg_color {
  background-color: #f6f8f9;
}

.questionsAndAnswers {
  padding-top: 120px;
  padding-bottom: 120px;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
  width: 100%;

  header {
    @media (max-width: 1300px) {
      text-align: center;
    }
  }
  .main {
    margin-top: 60px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1300px) {
      flex-direction: column;
    }
    .card {
      margin-top: -2px;

      max-width: 570px;
      width: 100%;

      @media (max-width: 1300px) {
        margin-right: auto;
        margin-left: auto;

        padding-left: 10px;
        padding-right: 10px;
      }
      &__header {
        margin-top: 20px;

        display: flex;
        justify-content: space-between;
        svg {
          height: 30px;
          width: 30px;

          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }

      .content {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
