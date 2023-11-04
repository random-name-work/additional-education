<template>
  <div class="headerBlock">
    <div class="header">
      <p class="text1">
        Университет дополнительного профессионального образования
      </p>
      <h1>Повышение квалификации и профессиональная переподготовка</h1>
      <div class="headerBtns">
        <blue-button180 :href="`https://google.com`">
          Выбрать курс
        </blue-button180>
        <white-button180 :href="`https://google.com`">
          Консультация
        </white-button180>
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

<script>
</script>

<style scoped lang="scss">
.headerBlock {
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
        align-items: center;
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
        font-family: "Golos Text", sans-serif;

        @media (max-width: 1300px) {
          margin-top: 10px;
        }
      }
      text-align: center;
    }
  }
}
</style>
