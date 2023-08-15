<template>
  <div class="diplomaContent">
    <div class="textPart">
      <h2>Диплом об образовании</h2>
      <p class="text2">
        Диплом о профессиональной переподготовке установленного образца на
        бланках Гознак и Спецбанк со всеми современными степенями защиты.
      </p>
      <v-btn
        flat
        color="#3d8be4"
        min-height="60px"
        max-height="60px"
        min-width="180px"
        max-width="180px"
        block
      >
        Приобрести курс
      </v-btn>
    </div>
    <div class="imagePart">
      <div class="certificate1">
        <img src="./../assets/DiplomaCertificate1.png" alt="certificate1" />
      </div>
      <div class="certificate2">
        <img src="./../assets/DiplomaCertificate2.png" alt="certificate1" />
        <img src="./../assets/DiplomaCertificate2.png" alt="certificate1" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.diplomaContent {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 160px;
  padding-bottom: 40px;

  display: flex;
  gap: 60px;

  @media (max-width: 1279px) {
    flex-direction: column;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 80px;
  }
  .textPart {
    max-width: 570px;
    width: 100%;

    display: flex;
    flex-direction: column;

    @media (max-width: 1279px) {
      margin-right: auto;
      margin-left: auto;
      align-items: center;
      text-align: center;
    }
    p.text2 {
      margin-top: 40px;
    }
    .v-btn {
      margin-top: 60px;
    }
  }
  .imagePart {
    .certificate1 {
      display: flex;
      justify-content: center;
      
      img {
        max-width: 444px;
        width: 100%;
      }
    }
    .certificate2 {
      margin-left: 108px;
      margin-top: -129px;

      display: flex;
      gap: 20px;

      @media (max-width: 1279px) {
        margin-top: 40px;
        margin-left: 0;

        justify-content: center;
      }
      @media (max-width: 600px) {
        flex-direction: column;
      }
      img {
        max-width: 221px;
        width: 100%;

        @media (max-width: 600px) {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
