<template>
  <div class="educationPlanContent">
    <div class="header">
      <div class="header__text">
        <h2>Учебный план</h2>
        <p class="text2">курса повышения квалификации</p>
      </div>

      <div class="btn">
        <blue-button180 :href="`#`">
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
          Скачать
        </blue-button180>
      </div>
    </div>

    <div class="main">
      <div class="btns">
        <div class="btn" v-for="btn in buttonsName" :key="btn">
          <input
            v-model="sortType"
            :id="`${btn}`"
            type="radio"
            name="type"
            :value="`${btn}`"
          />
          <div class="label">
            <label :for="`${btn}`" @click="displayId = btn">
              <h5>
                {{ btn }}
              </h5>
            </label>
          </div>
        </div>
      </div>

      <div class="modules">
        <div class="modules__header">
          <p class="text1">Название модуля, темы</p>
          <p class="text1">Кол-во часов</p>
          <p class="text1"></p>
        </div>

        <!-- moduule because module is buged -->
        <div class="module" v-for="moduule in modules" :key="moduule.name">
          <hr />
          <div class="module__header">
            <h5>{{ moduule.name }}</h5>
            <h5>{{ moduule.hours }} ак.ч.</h5>
            <svg
              @click="moduule.isHiden = !moduule.isHiden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="13"
              viewBox="0 0 24 13"
              fill="none"
            >
              <path d="M1 1L12 12L23 1" stroke="black" />
            </svg>
          </div>
          <div class="ContentHide" v-if="!moduule.isHiden">
            <div
              class="module__content"
              v-for="theme in moduule.themes"
              :key="theme"
            >
              <p class="text3">{{ theme }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsName: ["250 ак.ч.", "510 ак.ч.", "700 ак.ч.", "1400 ак.ч."],
      sortType: "250 ак.ч.",
      modules: [
        {
          name: "Модуль 1. Педагогика",
          hours: 50,
          isHiden: false,
          themes: [
            "Тема 1. Основы педагогики",
            "Тема 2. Педагогика в современном мире",
            "Тема 3. Основы педагогики",
            "Тема 4. Педагогика в современном мире",
          ],
        },
        {
          name: "Модуль 2. Педагогика",
          hours: 100,
          isHiden: false,
          themes: [
            "Тема 1. Основы педагогики",
            "Тема 2. Педагогика в современном мире",
            "Тема 3. Основы педагогики",
            "Тема 4. Педагогика в современном мире",
          ],
        },
        {
          name: "Модуль 3. Педагогика",
          hours: 200,
          isHiden: true,
          themes: [
            "Тема 1. Основы педагогики",
            "Тема 2. Педагогика в современном мире",
            "Тема 3. Основы педагогики",
            "Тема 4. Педагогика в современном мире",
          ],
        },
        {
          name: "Модуль 4. Педагогика",
          hours: 300,
          isHiden: true,
          themes: [
            "Тема 1. Основы педагогики",
            "Тема 2. Педагогика в современном мире",
            "Тема 3. Основы педагогики",
            "Тема 4. Педагогика в современном мире",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.educationPlanContent {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 120px;
  padding-bottom: 120px;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.header {
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;

    text-align: center;
    .v-btn {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
    }
  }
  &__text {
    p.text2 {
      margin-top: 20px;
    }
  }
}

.btns {
  margin-top: 30px;

  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;

  // custom input
  input {
    display: none;
  }
  input:checked ~ .label {
    color: #3d8be4;

    padding-bottom: 7px;
    border-bottom: 2px solid #3d8be4;
  }
  label {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
}

.modules {
  &__header {
    margin-top: 60px;
    margin-bottom: 10px;

    opacity: 0.4;
    display: flex;
    justify-content: space-between;
  }
  .module {
    padding-bottom: 30px;

    hr {
      opacity: 0.4;
    }
    &__header {
      margin-top: 30px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      // Применить ко всем дочерним элементам
      & > * {
        @media (max-width: 700px) {
          max-width: 100px;
        }
      }

      svg {
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
    &__content {
      margin-top: 20px;

      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (max-width: 700px) {
        max-width: 220px;
      }
      @media (max-width: 500px) {
        max-width: 150px;
      }
      @media (max-width: 350px) {
        max-width: 120px;
      }
    }
  }
}
</style>
