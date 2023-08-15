<template>
  <div class="signupContent">
    <h2>Записаться на курс</h2>
    <div class="priceList">
      <div class="card" v-for="card in priceList" :key="card">
        <div class="card__header">
          <h3>{{ card.hours }}</h3>
          <p class="text2">аккадемических часов</p>
        </div>
        <hr />
        <div class="card__cost">
          <h4>Стоимость:</h4>
          <h3>{{ card.cost }}</h3>
        </div>
        <div class="card__cashback">
          <p class="text2">
            <span class="light">Cashback:</span> {{ card.cashback }}
          </p>
          <v-btn
            flat
            variant="outlined"
            color="#ffffff"
            min-height="60px"
            min-width="220px"
            max-width="220px"
            block
          >
            Записаться на курс
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceList: [
        {
          hours: "250",
          cost: 6000,
          cashback: 300,
        },
        {
          hours: "510",
          cost: 6000,
          cashback: 300,
        },
        {
          hours: "700",
          cost: 6000,
          cashback: 300,
        },
        {
          hours: "1400",
          cost: 6000,
          cashback: 300,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.signupContent {
  max-width: 1200px;
  width: 100%;

  padding-top: 120px;
  padding-bottom: 120px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  h2{
    @media(max-width:1279px){
      text-align: center;
    }
  }
  .priceList {
    margin-top: 120px;

    display: flex;
    flex-wrap: wrap;

    gap: 60px;

    @media(max-width:1279px){
      justify-content: space-around;
    }
    .card {
      max-width: 570px;
      width: 100%;

      padding-top: 30px;
      padding-right: 20px;
      padding-left: 20px;
      padding-bottom: 30px;

      background-color: #3d8be4;
      color: #fff;

      border-radius: 12px;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      &__header {
        display: flex;
        gap: 12px;
      }
      hr {
        margin-top: 30px;

        opacity: 0.1;
      }
      &__cost {
        margin-top: 30px;

        display: flex;
        justify-content: space-between;
      }
      &__cashback {
        margin-top: 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width:450px){
            flex-direction: column;
            gap: 30px;
        }
        .light {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
