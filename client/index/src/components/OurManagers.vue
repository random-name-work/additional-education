<template>
  <div class="ourManagers">
    <header>
      <h2>Наши менеджеры</h2>
      <p class="text2">
        На сайте работают менеджеры, которым вы можете задать свои вопросы.
      </p>
    </header>
    <div class="main">
      <div class="managerCard" v-for="manager in managerList" :key="manager.id">
        <img src="./../assets/ManagerPhoto.png" alt="manager photo" />
        <h4>{{ manager.name }}</h4>
        <p class="text1">{{ manager.description }}</p>
        <v-btn
          flat
          variant="outlined"
          color="#3d8be4"
          min-height="50px"
          max-width="307px"
          block
          href="#"
          >Обратиться</v-btn
        >
        <div class="socialMedia">
          <a href="#">
            <img src="./../assets/socialIcons/VK.png" alt="VK" />
          </a>
          <a href="#">
            <img src="./../assets/socialIcons/Instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="./../assets/socialIcons/Facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="./../assets/socialIcons/Telegram.png" alt="Telegram" />
          </a>
          <a href="#">
            <img src="./../assets/socialIcons/WhatsApp.png" alt="WhatsApp" />
          </a>
          <a href="#">
            <img src="./../assets/socialIcons/Viber.png" alt="Viber" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      managerList: [
        {
          id: 1,
          img: "",
          name: "Менеджер_1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          vkRef: "#",
          instagramRef: "#",
          facebookRef: "#",
          telegramRef: "#",
          whatsappRef: "#",
          viberRef: "#",
        },
        {
          id: 2,
          img: "",
          name: "Менеджер_2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          vkRef: "#",
          instagramRef: "#",
          facebookRef: "#",
          telegramRef: "#",
          whatsappRef: "#",
          viberRef: "#",
        },
        {
          id: 3,
          img: "",
          name: "Менеджер_3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          vkRef: "#",
          instagramRef: "#",
          facebookRef: "#",
          telegramRef: "#",
          whatsappRef: "#",
          viberRef: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.ourManagers {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 120px;
  padding-bottom: 80px;

  header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1300px) {
      flex-direction: column;
      text-align: center;
    }
    p {
      max-width: 570px;
      width: 100%;

      @media (max-width: 1300px) {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .main {
    margin-top: 80px;

    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;

    gap: 40px;

    @media (max-width:1300px){
        margin-left: 10%;
        margin-right: 10px;
    }
    .managerCard {
      max-width: 367px;
      width: 100%;

      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 30px;

      border-radius: 12px;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      img {
        margin-top: -20px;
      }
      h4 {
        margin-top: 32px;
      }
      p {
        margin-top: 20px;
      }
      .v-btn {
        margin-top: 40px;
      }
      .socialMedia {
        margin-top: 20px;

        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
