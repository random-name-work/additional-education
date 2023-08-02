<template>
  <div class="providedTraining">
    <div class="content">
      <h2>Обучение за счёт вашей компании.</h2>
      <p class="text">
        У нас действует 2 вида договора на обучение.По одному вы оплачиваете
        сами. А второй предлагает оплатить обучение за счёт вашей компании.
      </p>
      <v-btn flat color="#3d8be4" min-height="60px" min-width="180px" block
        >Выбрать курс
      </v-btn>
    </div>
    <div class="scene">
      <img src="./../assets/ProvidedScene.png" alt="providedScene" />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.providedTraining {
  max-width: 1200px;
  width: 100%;

  padding-top: 120px;
  padding-bottom: 80px;

  margin-left: auto;
  margin-right: auto;

  display: flex;

  gap: 60px;

  @media (max-width: 1300px) {
    padding-top: 80px;
    text-align: center;
  }
  .content {
    @media (max-width: 1300px) {
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      max-width: 570px;
      width: 100%;

      @media (max-width: 1300px) {
        padding-left: 10px;
        padding-right: 10px;

        text-align: center;
      }
    }
    p {
      margin-top: 40px;

      max-width: 570px;
      width: 100%;

      @media (max-width: 1300px) {
        padding-left: 10px;
        padding-right: 10px;

        text-align: center;
      }
    }
    .v-btn {
      margin-top: 60px;

      @media (max-width: 1300px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .scene {
    @media (max-width: 1300px) {
      display: none;
    }
  }
}
</style>
