<template>
  <div class="content">
    <h2>Мы уладили все формальности</h2>
    <div class="d-flex">
      <div class="blocks">
        <div class="block">
          <h4>Официальные документы</h4>
          <p class="text1">
            Дистанционные курсы по педагогике высшего, средне-профессионального,
            школьного и дошкольгого образования.
          </p>
        </div>
        <div class="block">
          <h4>Баллы НМО для медиков</h4>
          <p class="text1">
            Потрясающие всеобемлющие курсы для психологов работающих в любом
            направлении.
          </p>
        </div>
        <div class="block">
          <h4>Подключены к ФИС ФРДО</h4>
          <p class="text1">
            Курсы для врачей и младшего медицинского персонала. Начисляем баллы
            НМО.
          </p>
        </div>
        <div class="block">
          <h4>Налоговый вычет</h4>
          <p class="text1">
            На факультете доступны кафедры Уголовного, гражданского и
            административного права.
          </p>
        </div>
      </div>
      <img src="./../assets/formalities.png" alt="prettyBoyyy" />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
template {
  background-color: #f6f8f9;
}
.content {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  padding-top: 120px;
  padding-bottom: 150px;
  @media (max-width: 1300px) {
    padding-top: 90px;
    padding-bottom: 150px;
  }
}
h2 {
  @media (max-width: 1300px) {
    text-align: center;
  }
}
img{
    width: 417px;
    height: 404px;

    @media (max-width:1300px){
        display: none;
    }
}
.blocks {
  margin-top: 60px;

  display: flex;
  flex-wrap: wrap;

  gap: 50px;

  @media (max-width: 1300px) {
    justify-content: center;
  }
  .block {
    padding-left: 10px;
    padding-right: 10px;

    max-width: 367px;
    width: 100%;

    p {
      margin-top: 15px;
    }
  }
}
</style>
