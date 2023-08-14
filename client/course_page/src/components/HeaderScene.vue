<template>
  <div class="headerBlock">
    <div class="header">
      <p class="text1">Курс повышения квалификации</p>
      <h2>
        Педагог высшего образования по программам подготовки кадров высшей
        квалификации
      </h2>
      <div class="headerBtns">
        <v-btn flat color="#3d8be4" min-height="60px" min-width="180px" block>
          Записаться на курс
        </v-btn>
        <v-btn
          flat
          variant="outlined"
          color="#3d8be4"
          min-height="60px"
          min-width="180px"
          block
        >
          Консультация
        </v-btn>
      </div>
    </div>
    <div class="image">
      <div class="headerImg">
        <img src="./../assets/educationImage.png" alt="courseImage" />
      </div>
      <div class="bottomText">
        <div class="info">
          <h2>8</h2>
          <h5>модулей</h5>
          <p class="text3">доступно к изучению сразу после оплаты</p>
        </div>
        <div class="info">
          <h2>244</h2>
          <h5>слушателей</h5>
          <p class="text3">Прошли данный курс и получили диплом</p>
        </div>
        <div class="info">
          <h2>250 - 1400</h2>
          <h5>академических часов</h5>
          <p class="text3">длительность обучения от 2 месяцев до 1 года</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.headerBlock {
  max-width: 1200px;
  width: 100%;
  margin: auto;

  padding-top: 166px;
  padding-bottom: 40px;

  overflow: visible;

  display: flex;
  gap: 39px;

  @media (max-width: 1300px) {
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;

    flex-direction: column;
    align-items: center;
  }
  .header {
    max-width: 531px;
    width: 100%;

    @media (max-width: 1300px) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    h1 {
      margin-top: 20px;
      max-width: 750px;
    }
    .headerBtns {
      margin-top: 60px;

      display: flex;
      gap: 40px;

      max-width: 400px;
      width: 100%;
      @media (max-width: 1300px) {
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 600px) {
        max-width: 280px;
        flex-direction: column;
      }
    }
  }
  .image {
    .headerImg {
      max-width: 630px;
      width: 100%;

      margin-left: auto;
      margin-right: auto;

      img {
        max-width: 630px;
        width: 100%;
      }
    }
    .bottomText {
      display: flex;
      gap: 32px;

      margin-top: 120px;

      @media (max-width: 1300px) {
        flex-wrap: wrap;
        justify-content: space-around;
      }
      h5 {
        margin-top: 20px;
      }
      p.text3 {
        margin-top: 5px;
      }
    }
  }
}
</style>
