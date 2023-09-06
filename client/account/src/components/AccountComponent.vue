<template>
  <section class="accountComponent">
    <h1>Мой профиль</h1>

    <section class="mainContent">
      <aside>
        <img src="../assets/profile_photo.png" alt="Profile Photo" />

        <h4 class="name">Федоров Сергей</h4>

        <div class="bonus">
          <div class="money">
            <p class="caption">Бонусные рубли</p>

            <div class="coins">
              <img src="../assets/coins.png" alt="coins" />

              <h3>509</h3>
            </div>
          </div>

          <v-btn
            flat
            variant="outlined"
            color="#3d8be4"
            min-height="40px"
            min-width="117px"
            max-width="117px"
            block
          >
            Подробнее
          </v-btn>
        </div>

        <nav class="profileNav">
          <ul>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="desktop"
                name="menuChoice"
                value="1"
              />
              <label class="text3" for="desktop">Рабочий стол</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="message"
                name="menuChoice"
                value="2"
              />
              <label class="text3" for="message">Сообщения</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="loyal"
                name="menuChoice"
                value="3"
              />
              <label class="text3" for="loyal">Программа лояльности</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="education"
                name="menuChoice"
                value="4"
              />
              <label class="text3" for="education">Обучение</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="materials"
                name="menuChoice"
                value="5"
              />
              <label class="text3" for="materials">Мои материалы</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="settings"
                name="menuChoice"
                value="6"
              />
              <label class="text3" for="settings">Настройки</label>
            </li>
            <li>
              <input
                v-model="choice"
                type="radio"
                id="exit"
                name="menuChoice"
                value="7"
              />
              <label class="text3" for="exit">Выйти</label>
            </li>
          </ul>
        </nav>
      </aside>

      <section class="sectionContent"></section>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      /*  
                to choise:

                1 - desktop
                2 - message
                3 - loyal
                4 - education
                5 - materials
                6 - settings
                7 - exit
            */
      choice: 1,
    };
  },
};
</script>

<style scoped lang="scss">
section.accountComponent {
  max-width: 1200px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
}
h1 {
  margin-top: 80px;
}

.mainContent {
  margin-top: 60px;

  aside {
    max-width: 236px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      max-width: 140px;
      max-height: 140px;

      width: 100%;
      height: 100%;
    }

    .bonus {
      display: flex;
      align-items: center;
      gap: 20px;
      .money {
        .coins {
          display: flex;
          gap: 8px;

          align-items: center;

          img {
            max-width: 21px;
            max-height: 21px;
          }
          h3 {
            color: #3d8be4;
          }
        }
      }
    }

    .profileNav {
      ul {
        list-style: none;

        li {
          margin-top: 15px;

          input {
            display: none;

            &:checked + label {
              color: #3d8be4;
              font-weight: 600;
            }
          }

          label:hover {
            cursor: pointer;
            opacity: 0.8;

            color: #3d8be4;
            font-weight: 600;
          }
        }
      }
    }
    
  }
  section.sectionContent {
  }
}
</style>
