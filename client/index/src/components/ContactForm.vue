<template>
  <div class="bgColor">
    <div class="contactForm">
      <h2>Заполните форму обратной связи, если у вас остались вопросы</h2>

      <v-form v-model="valid" ref="form">
        <v-autocomplete
          label="Выберите менеджера"
          :items="managers"
          variant="underlined"
        ></v-autocomplete>

        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Имя"
          variant="underlined"
        >
        </v-text-field>

        <v-text-field
          v-model="number"
          :rules="numberRules"
          label="8 (800) 000-00-00"
          variant="underlined"
        >
        </v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          variant="underlined"
        >
        </v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'Обязательное поле']"
          label="Я согласен с условиями обработки персональных данных."
          required
          color="red"
        ></v-checkbox>

        <blue-button-full :isDisabled="!valid">
          Получить консультацию
        </blue-button-full>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: "",
      managers: ["Менеджер 1", "Менеджер 2", "Менеджер 3"],

      name: "",
      nameRules: [],
      number: "",
      numberRules: [],
      email: "",
      emailRules: [],
      checkbox: false,
    };
  },
};
</script>

<style scoped lang="scss">
.bgColor {
  background-color: #f6f8f9;
}
.contactForm {
  max-width: 1200px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding-top: 120px;
  padding-bottom: 60px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;

    justify-content: space-between;

    padding-left: 10px;
    padding-right: 10px;
  }
  h2 {
    max-width: 570px;
    width: 100%;

    @media (max-width: 1300px) {
      text-align: center;

      margin-right: auto;
      margin-left: auto;
    }
  }

  .v-form {
    max-width: 570px;
    width: 100%;

    padding-top: 40px;
    padding-left: 60px;
    padding-bottom: 40px;
    padding-right: 60px;

    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    @media (max-width: 1300px) {
      margin-top: 20px;
      padding: 20px;

      margin-right: auto;
      margin-left: auto;
    }
    // v-label settings for checkbox in App.vue
  }
}
</style>
