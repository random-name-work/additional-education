<template>
  <div class="bgColor">
    <div class="logo">
      <img src="./../assets/logo.png" alt="logo" />
    </div>
    <div class="centered">
      <div class="auth">
        <div class="backBtn" @click="$emit('back', 1)">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="Vector 34" d="M7 1L1 7L7 13" stroke="#3D8BE4" />
          </svg>
          <p class="text1">Назад</p>
        </div>
        <h4>Войдите или зарегистрируйтесь по номеру телефона</h4>
        <div class="form">
          <v-form v-model="validForm">
            <v-text-field
              class="w-100"
              v-model="email"
              :rules="emailRules"
              label="Email"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              class="w-100"
              v-model="password"
              :rules="passwordRules"
              label="Пароль"
              variant="outlined"
              required
            ></v-text-field>
            <v-btn
              flat
              color="#3d8be4"
              min-height="60px"
              min-width="180px"
              block
              :disabled="!validForm"
              >Далее</v-btn
            >
          </v-form>
        </div>
        <div class="policy">
          <p class="caption">
            Регистрируясь в сервисе, принимаю условия
            <a href="#" class="caption"> соглашения</a> и
            <a href="#" class="caption"> политики конфиденциальности </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRules: [],
      password: "",
      passwordRules: [],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.bgColor {
  background-color: #f6f8f9;
  width: 100%;
  height: 100vh;
}
.logo {
  position: absolute;

  top: 20px;
  left: 30px;

  @media (max-height: 630px) {
    display: none;
  }
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  .auth {
    max-width: 420px;
    width: 100%;
    background-color: #fff;

    border-radius: 12px;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    padding: 40px 30px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    @media (max-width: 480px) {
      margin-left: 10px;
      margin-right: 10px;
    }
    .backBtn {
      color: #3d8be4;

      display: flex;
      align-items: center;

      gap: 8px;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    .v-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .policy {
      p {
        opacity: 0.4;
        a {
          color: #000;
        }
      }
    }
  }
}
</style>
