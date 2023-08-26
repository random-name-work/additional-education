<template>
  <div class="lectionComponent">
    <a href="#" class="backBtn">
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="Vector 34" d="M7 1L1 7L7 13" stroke="#3D8BE4" />
      </svg>
      <p class="text1">Каталог видео лекций</p>
    </a>

    <div class="certificate">
      <div class="info">
        <img src="../assets/LectionComponentFile.png" alt="fileImg" />
        <p class="text2">Ваш сертификат за прохождение готов</p>
      </div>
      <div class="btns">
        <v-btn
          flat
          variant="outlined"
          color="#3d8be4"
          min-height="60px"
          min-width="188px"
          max-width="188px"
          block
        >
          Электронный 300 рублей
        </v-btn>
        <v-btn
          class="text-wrap text-white"
          flat
          color="#3d8be4"
          min-height="60px"
          min-width="188px"
          max-width="188px"
          block
        >
          Печатный 500 рублей
        </v-btn>
      </div>
    </div>

    <div class="video">
      <img class="videoImg" src="../assets/Video.png" alt="video" />

      <div class="access">
        <div class="lock">
          <img src="../assets/LectionComponentLock.png" alt="lock img" />
        </div>

        <v-btn
          class="text-white"
          flat
          color="#3d8be4"
          min-height="60px"
          min-width="188px"
          max-width="188px"
          block
        >
          Получить доступ
        </v-btn>
      </div>
    </div>

    <div class="description">
      <h3>
        Педагог высшего образования по программам подготовки кадров высшей
        квалификации
      </h3>
      <hr />
      <article>
          <h3>Описание видеолекции</h3>
          <p class="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor.
          </p>
      </article>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.lectionComponent {
  padding-top: 96px;
  padding-bottom: 100px;

  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.backBtn {
  text-decoration: none;

  color: #3d8be4;

  display: flex;
  align-items: center;

  gap: 8px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.certificate {
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1279px) {
    flex-direction: column;
    gap: 20px;
  }
  .info {
    display: flex;
    gap: 30px;

    img {
      max-width: 24px;
      max-height: 32px;
    }
  }
  .btns {
    display: flex;
    gap: 10px;

    @media (max-width: 1279px) {
      flex-direction: column;
    }
    // solution for wrap text in v-btn in App.vue styles
  }
}
.video {
  margin-top: 40px;

  display: flex;
  justify-content: center;
  .videoImg {
    position: relative;
    z-index: 0;

    max-width: 1200px;
    width: 100%;
  }

  .access {
    margin-top: 15%;

    position: absolute;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 22px;

    @media (max-width: 540px) {
      margin-top: 25px;
    }
    @media (max-width: 380px) {
      margin-top: 2px;
    }
    .lock {
      margin-right: auto;
      margin-left: auto;

      background-color: #3d8be4;

      width: 60px;
      height: 60px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.description{
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    hr{
        opacity: 0.4;
    }
    
    article{

        p.text1{
            max-width: 783px;
            margin-top: 20px;
        }
    }
}
</style>
