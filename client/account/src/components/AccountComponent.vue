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
            class="text-none"
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
            <li v-for="section in menu" :key="section.id">
              <input
                v-model="choice"
                type="radio"
                :id="section.id"
                name="menuChoice"
                :value="section.value"
              />
              <label class="text3" :for="section.id">{{
                section.labelText
              }}</label>
            </li>
          </ul>
        </nav>
      </aside>

      <section class="sectionContent">
        <MenuDestop v-if="choice === 1"></MenuDestop>
      </section>
    </section>
  </section>
</template>

<script>
import MenuDestop from "./MenuDesktop.vue";

export default {
  components: {
    MenuDestop,
  },
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

      menu: [
        {
          id: "desktop",
          value: 1,
          labelText: "Рабочий стол",
        },
        {
          id: "message",
          value: 2,
          labelText: "Сообщения",
        },
        {
          id: "loyal",
          value: 3,
          labelText: "Программа лояльности",
        },
        {
          id: "education",
          value: 4,
          labelText: "Обучение",
        },
        {
          id: "materials",
          value: 5,
          labelText: "Мои материалы",
        },
        {
          id: "settings",
          value: 6,
          labelText: "Настройки",
        },
        {
          id: "exit",
          value: 7,
          labelText: "Выйти",
        },
      ],
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

  display: flex;
  gap: 131px;

  aside {
    max-width: 236px;
    width: 100%;

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
