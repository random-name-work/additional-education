<template>
  <div class="centered">
    <div class="logo">
      <img src="./../../../../src/assets/logo_nav.png" alt="logo" />
    </div>

    <div class="auth">
      <div class="header">
        <h2>Войдите или зарегистрируйтесь</h2>
      </div>
      <div class="login">
        <p>Через соцсеть</p>
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
        <p>Другим способом</p>
        <div class="btns">
          <button>Номер телефона</button>
          <button>E-mail</button>
        </div>
      </div>
      <div class="policy">
        <p>
          Регистрируясь в сервисе, принимаю условия
          <a href="#"> соглашения</a> и
          <a href="#"> политики конфиденциальности </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
p,
a,
h2,
button {
  font-family: "Golos Text", sans-serif;
}
.centered {
  .logo {
    position: absolute;

    top: 20px;
    left: 30px;
  }
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100% - 16px);

  .auth {
    max-width: 420px;
    width: 100%;

    border-radius: 12px;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    margin: auto;
    padding: 40px 30px;

    display: flex;
    flex-direction: column;

    gap: 30px;

    .header {
      h2 {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;
      }
    }
    .login {
      display: flex;
      flex-direction: column;

      gap: 15px;

      .btns,
      .images {
        display: flex;
        justify-content: space-between;
      }

      .btns {
        button {
          padding: 20px 33px;

          border-radius: 6px;
          border: 1px solid var(--line, #e5e5e5);

          background-color: #fff;

          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0.16px;

          color: #000;
          text-decoration: none;

          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
    .policy {
      p {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0.12px;

        opacity: 0.4;

        a {
          color: #000;
        }
      }
    }
  }
}
</style>
