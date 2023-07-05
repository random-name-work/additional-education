<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo_nav.png" alt="logo" />
    </div>
    <div class="blueBtn">
      <a href="#"> Все курсы </a>
    </div>
    <div class="btn">
      <a href="#"> Видеолекции </a>
    </div>
    <div class="btn">
      <a href="#"> Тесты </a>
    </div>
    <div class="btn">
      <a href="#"> Low Price </a>
    </div>
    <div class="btn">
      <a href="#"> Блог </a>
    </div>
    <div class="btn">
      <a href="#"> Об организации </a>
    </div>
    <div class="phone">
      <a href="tel:88463754131">
        <div class="phone__img">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2477 16.11L16.9277 14.43C17.154 14.2066 17.4403 14.0536 17.7518 13.9897C18.0634 13.9258 18.3867 13.9537 18.6827 14.07L20.7302 14.8875C21.0293 15.0089 21.2858 15.2162 21.4673 15.4831C21.6488 15.75 21.7473 16.0647 21.7502 16.3875V20.1375C21.7485 20.3571 21.7023 20.5741 21.6145 20.7754C21.5267 20.9766 21.3991 21.1581 21.2393 21.3087C21.0796 21.4594 20.891 21.5761 20.6849 21.652C20.4788 21.7278 20.2595 21.7612 20.0402 21.75C5.69272 20.8575 2.79772 8.70753 2.25022 4.05753C2.22481 3.82918 2.24803 3.59804 2.31836 3.37931C2.38869 3.16058 2.50453 2.95923 2.65827 2.78848C2.81201 2.61774 3.00016 2.48148 3.21034 2.38868C3.42052 2.29587 3.64797 2.24862 3.87772 2.25003H7.50022C7.82348 2.25099 8.13906 2.34863 8.40637 2.5304C8.67368 2.71217 8.8805 2.96976 9.00022 3.27003L9.81772 5.31753C9.93791 5.61233 9.96858 5.93601 9.90588 6.24814C9.84319 6.56027 9.68992 6.847 9.46522 7.07253L7.78522 8.75253C7.78522 8.75253 8.75272 15.3 15.2477 16.11Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="phone__num">
          <p>8 (846) 375-41-31</p>
        </div>
      </a>
    </div>
    <div class="auth">
      <a href="#">
        <div class="auth__img">
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.5C3.48368 3.59267 7.85091 1 12.8237 1C20.5557 1 26.8237 7.26801 26.8237 15C26.8237 22.732 20.5557 29 12.8237 29C7.85091 29 3.48368 26.4073 1 22.5"
              stroke="#3D8BE4"
            />
            <path d="M7.82422 9L13.8242 15L7.82422 21" stroke="#3D8BE4" />
          </svg>
        </div>
        <div class="auth__href">Войти / Зарегистрироваться</div>
      </a>
    </div>
  </div>
  <hr>
</template>

<script></script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000000;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.navbar {
  padding: 20px 30px;

  width: 100%;
  height: 95px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 0px 10px #cccccc;
  .phone a, .auth a{
    display: flex;
    align-items: center;

    gap: 8px;

}

  .auth a, .blueBtn a{
    color: #3d8be4;
  }

  .blueBtn a{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 158px;
    height: 40px;

    border-radius: 3px;
    border: 1px solid #3D8BE4;    
  }
}
hr{
    opacity: 0.1;
}
</style>
