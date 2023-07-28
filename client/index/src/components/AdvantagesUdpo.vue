<template>
  <div class="advantages">
    <div class="content">
      <h2>Преимущества УДПО</h2>

      <div class="content__flexbox">
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Онлайн-обучение</h3>
            <p>
              Учитесь в любое удобное время. Получайте знания находясь дома, на
              работе или в поездке. Система обучения открыта 24/7.
            </p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Рассрочка и онлайн оплата</h3>
            <p>
              Оплачивайте в рассрочку через онлайн банк или карточкой прямо на
              нашем сайте. Это просто и безопасно.
            </p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Сами подготовим все документы</h3>
            <p>
              Мы подготовим документы самостоятельно. Вам нужно будет только
              подписать и отправить обратно в приложенном конверте.
            </p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Доставка документов</h3>
            <p>
              Бесплатно отправим документы посредством ФГУП "Почта России" до
              ближайшего отделения либо закажите курьерскую доставку.
            </p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Ускоренное обучение</h3>
            <p>
              Если диплом нужен срочно, возможено обучение по ускоренной
              интенсивной программе. Сокращение срока обучения вдвое.
            </p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/advantagesIcons/Hat.png" alt="" />
          <div class="advantage__text">
            <h3>Общайтесь как Вам удобно</h3>
            <p>
              Пишите нам в социальные сети, мессенджеры, чат на сайте или
              позвоните по телефону. Вам доступны различные каналы связи.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.advantages {
  background-color: #f6f8f9;
  padding-top: 120px;
  padding-bottom: 120px;

  .content {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    h2 {
      @media (max-width: 1300px) {
        margin-left: auto;
        text-align: center;
      }
    }
    &__flexbox {
      margin-top: 90px;

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 60px;
      .advantage {
        display: flex;
        gap: 30px;

        img {
          max-width: 55px;
          max-height: 55px;
          @media (max-width: 380px){
            display: none;
          }
        }
        &__text {
          h3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%;
          }
          p {
            max-width: 485px;

            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
          }
        }
      }
      @media (max-width: 1300px) {
        margin-left: 50px;
        margin-right: 50px;
      }
    }
  }
}
</style>
