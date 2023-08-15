<template>
  <div class="socialReposte">
    <div class="textBlock">
      <h2>Поделитесь в социальных сетях</h2>
      <div class="socialIcons">
        <a href="#">
          <img src="./../assets/socialIcons/VK.png" alt="vk" />
        </a>
        <a href="#">
          <img src="./../assets/socialIcons/Instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img src="./../assets/socialIcons/Facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img src="./../assets/socialIcons/Telegram.png" alt="telegram" />
        </a>
        <a href="#">
          <img src="./../assets/socialIcons/WhatsApp.png" alt="whatsapp" />
        </a>
        <a href="#">
          <img src="./../assets/socialIcons/Viber.png" alt="viber" />
        </a>
      </div>
    </div>
    <div class="imageBlock">
      <img src="./../assets/Reposte.png" alt="reposte" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.socialReposte {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  display: flex;

  border-radius: 12px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 1279px) {
    max-width: 570px;
  }
  @media (max-width: 650px) {
    max-width: 420px;
  }
  @media (max-width: 550px) {
    max-width: 280px;
  }

  .textBlock {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 81px;

    @media (max-width: 1279px) {
      max-width: 400px;
      width: 100%;

      text-align: center;

      margin-right: auto;
      margin-left: auto;

      padding-top: 80px;
      padding-bottom: 80px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .socialIcons {
      margin-top: 40px;

      max-width: 400px;
      width: 100%;

      display: flex;
      justify-content: space-between;
    }
  }
  .imageBlock {
    @media (max-width: 1279px) {
      display: none;
    }
  }
}
</style>
