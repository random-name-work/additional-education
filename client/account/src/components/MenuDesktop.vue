<template>
  <section class="menuDesktop">
    <h2>Общие сведения</h2>
    <section class="info">
      <h3>Федоров Сергей Владимирович</h3>
      <hr />

      <p class="text3">Основная информация</p>
      <ul class="data">
        <li v-for="info in mainInfo" :key="info.header">
          <h5>{{ info.header }}:</h5>
          <p class="text1">
            {{ info.content }}
          </p>
        </li>
      </ul>
      <hr />

      <p class="text3">Контакты</p>
      <ul class="data">
        <li v-for="contact in contacts" :key="contact.header">
          <h5>{{ contact.header }}:</h5>
          <p class="text1">
            {{ contact.content }}
          </p>
        </li>
      </ul>
    </section>

    <h2>Документы</h2>
    <section class="certificates">
      <p class="text1">
        Документы, полученные при прохождении курсов, видеолекций и тестов.
      </p>
      <div
        class="certificate"
        v-for="certificate in certificates"
        :key="certificate.header"
      >
        <img src="../assets/document.png" alt="document" />
        <p class="text1">{{ certificate.header }}</p>
        <v-btn
          flat
          class="text-none text-white"
          color="#3d8be4"
          min-height="60px"
          min-width="188px"
          max-width="188px"
          block
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 9H15V3H9V9H5L12 17L19 9ZM4 19H20V21H4V19Z"
              fill="white"
            />
          </svg>
          Скачать PDF
        </v-btn>
      </div>
    </section>

    <h2>Документы, которые необходимы для зачисления на обучение</h2>
    <section class="documents">
      <p class="caption">
        Пожалуйста, загрузите файлы в формате jpg, jpeg или pdf до 5 мб каждый.
      </p>
      <div
        class="document"
        v-for="document in documents"
        :key="document.header"
      >
        <img src="../assets/document.png" alt="document" />
        <p class="text1">{{ document.header }}</p>
        <v-btn
          flat
          class="text-none text-white"
          color="#3d8be4"
          min-height="60px"
          min-width="188px"
          max-width="188px"
          block
        >
          <img src="../assets/clip.png" alt="clip">
          Прикрепить файл
        </v-btn>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainInfo: [
        {
          header: "Место работы",
          content:
            "Институт механики МГУ, 404 лаборатория автоматизации экспериментальных исследований",
        },
        {
          header: "Должность",
          content: "Старший преподаватель",
        },
        {
          header: "Дата рождения",
          content: "09.12.1996",
        },
      ],
      contacts: [
        {
          header: "Телефон",
          content: "8 (846) 375-41-31",
        },
        {
          header: "E-mail",
          content: "foo@gmail.com",
        },
      ],
      certificates: [
        {
          header:
            "Документ, получен за прохождение курса “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.”",
          srcToDocument: "",
        },
        {
          header: "Документ, получен за прохождение курса",
          srcToDocument: "",
        },
      ],
      documents: [
        {
          header: "Паспорт (лицевая сторона)",
          srcToDocument: "",
        },
        {
          header: "Паспорт (прописка)",
          srcToDocument: "",
        },
        {
          header: "Диплом об основном образовании",
          srcToDocument: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
section.menuDesktop {
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;

  & > h2:not(:first-child) {
    margin-top: 80px;
  }

  & > section {
    max-width: 835px;
    width: 100%;

    margin-top: 30px;

    padding-top: 40px;
    padding-right: 50px;
    padding-bottom: 40px;
    padding-left: 50px;

    border-radius: 12px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    &.info {
      hr {
        margin-top: 30px;
        margin-left: -20px;
        margin-right: -20px;

        opacity: 0.1;
      }
      p.text3 {
        margin-top: 40px;
        opacity: 0.4;
      }
      ul.data {
        list-style: none;

        li {
          margin-top: 30px;

          display: grid;
          gap: 20px;

          grid-template-columns: 18fr 82fr;
          p.text1 {
            max-width: 585px;
          }
        }
      }
    }

    &.certificates {
      margin-top: 35px;

      display: flex;
      flex-direction: column;
      gap: 15px;
      .certificate {
        padding-top: 15px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-left: 15px;

        border-radius: 8px;
        border: 1px solid #e5e5e5;

        display: flex;
        align-items: center;
        gap: 30px;

        p.text1 {
          max-width: 411px;
          width: 100%;
        }

        .v-btn {
          svg {
            margin-right: 10px;
          }
        }
      }
    }

    &.documents {
      margin-top: 35px;

      display: flex;
      flex-direction: column;
      gap: 15px;

      p.caption {
        opacity: 0.4;
      }
      .document {
        padding-top: 15px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-left: 15px;

        border-radius: 8px;
        border: 1px solid #e5e5e5;

        display: flex;
        align-items: center;
        gap: 30px;

        p.text1 {
          max-width: 411px;
          width: 100%;
        }

        .v-btn {
          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
