<template>
  <div class="bgColor">
    <div class="logo">
      <img src="./../assets/logo.png" alt="logo" />
    </div>
    <div class="centered">
      <div class="auth">
        <h4>Войдите или зарегистрируйтесь</h4>
        <div class="login">
  
          <p class="text1">Через соцсеть</p>
          
          <div class="images">
            <a href="#">
              <img src="./../assets/vkLogo.png" alt="vk" />
            </a>
            <a href="#">
              <img src="./../assets/facebookLogo.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="./../assets/okruLogo.png" alt="okru" />
            </a>
            <a href="#">
              <img src="./../assets/mailLogo.png" alt="mail" />
            </a>
            <a href="#">
              <img src="./../assets/yandexLogo.png" alt="yandex" />
            </a>
          </div>
  
        </div>
        
        <div class="login">
          <p class="text1">Другим способом</p>
          <div class="btns">
            <v-btn 
            @click="$emit('changeWindow', 2)"
            min-height="64px"
            flat
            variant="outlined"
            class="text-none pl-8 pr-8 pt-5 pb-5"
            >
            Номер телефона
            </v-btn>
            
            <v-btn 
            @click="$emit('changeWindow', 3)"
            min-height="64px"
            flat
            variant="outlined"
            class="text-none pl-11 pr-11 pt-5 pb-5"
            >
            E-mail
            </v-btn>
          </div>
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

<script></script>

<style scoped lang="scss">
.bgColor {
  background-color: #F6F8F9;
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

    margin: auto;
    padding: 40px 30px;

    display: flex;
    flex-direction: column;

    gap: 30px;

    @media (max-width: 440px) {
      margin-left: 10px;
      margin-right: 10px;
    }
    .login {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      gap: 15px;

      .btns,
      .images {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        gap: 11px;
      }
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
