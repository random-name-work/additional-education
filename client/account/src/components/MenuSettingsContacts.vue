<template>
  <v-form v-model="infoForm" @submit.prevent>
    <header>
      <h2>Контакты</h2>
      <blue-button180> Сохранить </blue-button180>
    </header>

    <section class="settings">
      <v-row>
        <v-col>
          <v-select
            variant="outlined"
            v-model="contactType"
            :items="contactTypes"
            :rules="[(v) => !!v || 'Item is required']"
            label="Cпособ связи"
            placeholder="Телефон"
            required
            hide-details
          ></v-select>
        </v-col>
        <v-col> </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="phone"
            :rules="phoneRules"
            label="Телефон"
            placeholder="+79992662626"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            variant="outlined"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder="foo@gmail.com"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <h3>Мессенджеры</h3>

      <v-row class="messengers">
        <v-col>
          <img src="../assets/whatsapp.png" alt="whatsapp" />
          <v-text-field
            variant="outlined"
            v-model="phoneWhatsapp"
            :rules="phoneWhatsappRules"
            label="Телефон"
            placeholder="+79992662626"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="WhatsappCheckbox"
            :rules="WhatsappCheckboxRules"
            label="WhatsApp использует мой указанный телефон"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <img src="../assets/viber.png" alt="viber" />
          <v-text-field
            variant="outlined"
            v-model="phoneViber"
            :rules="phoneViberRules"
            label="Телефон"
            placeholder="+79992662626"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="ViberCheckbox"
            :rules="ViberCheckboxRules"
            label="Viber использует мой указанный телефон"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <img src="../assets/telegram.png" alt="telegram" />
          <v-text-field
            variant="outlined"
            v-model="phoneTelegram"
            :rules="phoneTelegramRules"
            label="Телефон"
            placeholder="+79992662626"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox
            color="#000"
            v-model="TelegramCheckbox"
            :rules="TelegramCheckboxRules"
            label="Telegram использует мой указанный телефон"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <h3>Соцсети</h3>

      <p class="text1">Привяжите соцсети, чтобы удобнее входить в аккаунт</p>

      <div class="social">
        <a href="#">
          <img src="../assets/social/yandex.png" alt="yandex" />
        </a>
        <a href="#">
          <img src="../assets/social/ok.png" alt="ok" />
        </a>
        <a href="#">
          <img src="../assets/social/vk.png" alt="vk" />
        </a>
        <a href="#">
          <img src="../assets/social/facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img src="../assets/social/mail.png" alt="mail" />
        </a>
      </div>
    </section>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      infoForm: false,

      contactType: "Телефон",
      contactTypes: ["Телефон", "E-mail", "WhatsApp", "Viber", "Telegram"],
      contactTypeRules: [(v) => !!v || "Item is required"],

      phone: "",
      phoneRules: [],

      email: "",
      emailRules: [],

      phoneWhatsapp: "",
      phoneWhatsappRules: [],
      WhatsappCheckbox: false,
      WhatsappCheckboxRules: [],

      Viber: "",
      ViberRules: [],
      ViberCheckbox: false,
      ViberCheckboxRules: [],

      Telegram: "",
      TelegramRules: [],
      TelegramCheckbox: false,
      TelegramCheckboxRules: [],
    };
  },
};
</script>

<style scoped lang="scss">
.v-form {
  h3 {
    margin-top: 40px;
  }

  .v-row {
    align-items: center;
  }

  .messengers {
    margin-top: 40px;
  }
  .v-col {
    display: flex;
    align-items: center;

    .v-input {
      padding-top: 0px;
      margin-left: 10px;
    }
  }

  p.text1 {
    opacity: 0.4;
  }
  .social {
    margin-top: 30px;

    display: flex;
    gap: 20px;

    a:hover {
      opacity: 0.8;
    }
  }
}
</style>
