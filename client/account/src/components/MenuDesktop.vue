<template>
  <section class="menuDesktop">
    <section>
      <h2>Общие сведения</h2>

      <div class="section section__info">
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
      </div>
    </section>

    <section>
      <h2>Документы</h2>

      <div class="section"></div>
    </section>

    <section>
      <h2>Документы, которые необходимы для зачисления на обучение</h2>

      <div class="section"></div>
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
    };
  },
};
</script>

<style scoped lang="scss">
section.menuDesktop {
  display: flex;
  flex-direction: column;
  gap: 80px;

  section {
    max-width: 835px;
    width: 100%;
    .section {
      margin-top: 30px;

      padding-top: 40px;
      padding-right: 50px;
      padding-bottom: 40px;
      padding-left: 50px;

      border-radius: 12px;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      &__info {
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
    }
  }
}
</style>
