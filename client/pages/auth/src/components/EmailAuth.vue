<template>
    <div class="centered">
      <div class="logo">
        <img src="./../../../../src/assets/logo_nav.png" alt="logo" />
      </div>
  
      <div class="auth">
        <div class="backBtn">
          <button>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="Vector 34" d="M7 1L1 7L7 13" stroke="#3D8BE4" />
            </svg>
            Назад
          </button>
        </div>
        <div class="header">
          <h2>Войдите или зарегистрируйтесь по номеру телефона</h2>
        </div>
        <div class="form">
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Введите или придумайте пароль" />
          <button type="submit">Далее</button>
        </div>
        <div class="nextButton"></div>
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
  
  <script>
  export default {
    data() {
      return {
        phoneNumber: "",
        phoneNumberRules: [],
      };
    },
    methods: {},
  };
  </script>
  
  <style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  p,
  a,
  h2,
  button,
  input {
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
    background-color: #f6f8f9;
  
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
  
      gap: 20px;
  
      .backBtn {
        button {
          color: #3d8be4;
  
          display: flex;
          justify-content: center;
          align-items: center;
  
          gap: 8px;
  
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
  
          background-color: #fff;
          border: none;
  
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
      .header {
        h2 {
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%;
        }
      }
  
      .form {
        display: flex;
        flex-direction: column;
  
        gap: 20px;
  
        input,
        button {
          height: 53px;
          border-radius: 6px;
  
          border: none;
        }
        input {
          padding: 15px 20px;
  
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }
        button {
          color: #ffffff;
          background-color: #3d8be4;
  
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0.16px;
  
          &:hover {
            cursor: pointer;
            opacity: 0.8;
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
  