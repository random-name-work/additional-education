<template>
  <v-form v-model="infoForm" @submit.prevent>
    <header>
      <h2>Личная информация</h2>
      <v-btn
        flat
        class="text-none text-white"
        color="#3d8be4"
        min-height="40px"
        max-height="40px"
        min-width="158px"
        max-width="158px"
        block
        type="submit"
      >
        Сохранить
      </v-btn>
    </header>

    <section class="info">
      <div class="editImg">
        <img src="../assets/profile_photo.png" alt="Profile Photo" />
        <div class="pencilBackground">
          <img src="../assets/pencil.svg" alt="pencil" />
        </div>
      </div>

      <v-row>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="familyName"
            :rules="familyNameRules"
            label="Фамилия"
            placeholder="Иванов"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="name"
            :rules="nameRules"
            label="Имя"
            placeholder="Иван"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="surName"
            :rules="surNameRules"
            label="Отчество"
            placeholder="Иванович"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="date"
            :rules="dateRules"
            label="Дата рождения"
            placeholder="27.08.2004"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </section>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      infoForm: false,
      familyName: "Федоров",
      familyNameRules: [],
      name: "Сергей",
      nameRules: [],
      surName: "",
      surNameRules: [],
      date: "",
      dateRules: [],
    };
  },
};
</script>

<style scoped>
.v-form {
  .editImg {
    position: relative;

    max-width: 140px;
    .pencilBackground {
      width: 40px;
      height: 40px;
      background-color: #ffffff;

      border-radius: 50%;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      position: absolute;
      top: 0;
      right: 6px;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;

        border: 1px solid #eeeeee;
      }
    }
  }
  .v-row:not(:last-child) {
    margin-top: 40px;
  }
}
</style>
