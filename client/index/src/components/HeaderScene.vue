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
    <div class="scene">
      <img
        class="scene__img1"
        src="./../assets/headerScene1.png"
        alt="header scene"
      />
      <img
        class="scene__img2"
        src="./../assets/headerScene2.png"
        alt="header scene"
      />
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
  </div>
</template>

<script></script>

<style scoped lang="scss">
.headerBlock {
  display: flex;
  min-height: 805px;

  width: 1200px;
  margin: auto;
  .header {
    margin-top: 166px;
    p {
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
    h1 {
      font-size: 55px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;

      max-width: 750px;
    }
    .headerBtns {
      margin-top: 60px;

      display: flex;
      gap: 40px;

      max-width: 400px;
    }
  }
  .scene {
    position: absolute;

    margin-top: 98px;
    margin-left: 630px;
    z-index: -1;

    &__img1 {
      z-index: -1;
      position: absolute;
    }
    &__img2 {
      margin-top: 135px;
      margin-left: 122px;
    }
    .numbers {
      margin-top: 120px;
      display: flex;
      gap: 108px;

      .number {
        text-align: center;
      }
    }
  }
}
</style>
