<template>
  <div class="headerBlock">
    <div class="header">
      <p>Университет дополнительного профессионального образования</p>
      <h1>Повышение квалификации и профессиональная переподготовка</h1>
      <div class="headerBtns">
        <v-btn flat color="#3d8be4" min-height="60px" min-width="180px" block>
          Выбрать курс
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
    <div class="numbers">
      <div class="number">
        <h1>187</h1>
        <p>Lorem ipsum</p>
      </div>
      <div class="number">
        <h1>24</h1>
        <p>Lorem ipsum</p>
      </div>
      <div class="number">
        <h1>8</h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.headerBlock {
  h1 {
    font-size: clamp(20px, 6.2vw, 55px);
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }

  max-width: 1200px;
  width: 100%;
  margin: auto;

  padding-top: 166px;
  padding-bottom: 40px;

  overflow: visible;

  background-image: url("./../assets/headerScene.png");
  background-position: 128% 98px;

  @media (max-width: 1300px) {
    padding-top: 80px;
    background-image: none;
  }
  .header {
    max-width: 750px;
    width: 100%;

    @media (max-width: 1300px) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    p {
      font-size: clamp(14px, 4.3vw, 17px);
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
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

  .numbers {
    margin-top: 90px;

    display: flex;
    justify-content: flex-end;
    gap: 108px;

    @media (max-width: 1300px) {
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;

      justify-content: center;
      gap: 20px;
    }
    .number {
      p {
        margin-top: 36px;
        font-size: clamp(12px, 3.7vw, 19px);

        @media (max-width: 1300px) {
          margin-top: 10px;
        }
      }
      text-align: center;
    }
  }
}
</style>
