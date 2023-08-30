<template>
  <div class="aboutUs">
    <h2>Об организации</h2>

    <div class="mainData">
      <h3>Основные сведения</h3>
      <ul>
        <li>
          <h4>Наименование:</h4>
          <p class="text1">
            Общество с ограниченной ответственностью «Инфоурок»
          </p>
        </li>
        <li>
          <h4>Дата создания:</h4>
          <p class="text1">17.10.2013</p>
        </li>
        <li>
          <h4>Место нахождения ООО «Инфоурок»:</h4>
          <p class="text1">
            214000 Смоленская область, г. Смоленск, улица Верхне-Сенная, дом 4,
            офис 407. Филиалы отсутствуют
          </p>
        </li>
      </ul>
    </div>

    <div class="management">
      <h3>Органы управления</h3>
      <ul>
        <li>
          <h4>Учредитель и руководитель:</h4>
          <p class="text1">
            Учредитель: Иванов Иван Иванович <br />
            Директор: Иванов Иван Иванович
          </p>
        </li>
        <li>
          <h4>Структурные подразделения:</h4>
          <p class="text1">
            Учебный центр «Инфоурок», руководитель – Иванов Иван Иванович
          </p>
        </li>
      </ul>
    </div>

    <div class="documents">
      <h3>Документы</h3>
      <ul>
        <li>
          <h4>Устав:</h4>
          <p class="text1">
            <a href="#" class="text1">Ознакомиться с уставом</a>
          </p>
        </li>
        <li>
          <h4>Лицензия:</h4>
          <p class="text1">
            № 5201 от 02 апреля 2018г. выдана Департаментом Смоленской области
            по образованию и науке
            <a href="#" class="text1"> Ознакомиться с лицензией </a>
          </p>
        </li>
      </ul>
    </div>

    <div class="education">
      <h3>Образование</h3>
      <p class="text1">
        ООО «Инфоурок» в рамках имеющейся лицензии №5201 от 02 апреля 2018 г
        осуществляет образовательную деятельность.
      </p>
      <p class="text1">
        <span>Реализуемые уровни образования:</span> дополнительное
        профессиональное образование.
      </p>
      <p class="text1"><span>Форма обучения:</span> заочная</p>
      <p class="text1">
        В процессе обучения используются исключительно дистанционные
        образовательные технологии и электронное обучение (не требуется
        взаимодействия обучающихся и педагогического состава).
      </p>
      <p class="text1">
        Информация об использовании при реализации образовательной программы
        электронного обучения и дистанционных образовательных технологий
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.aboutUs {
  padding-top: 80px;
  padding-bottom: 100px;
  margin-right: auto;
  margin-left: auto;

  max-width: 1200px;
  width: 100%;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  & > div {
    padding: 40px;
    margin-top: 30px;

    max-width: 1200px;
    width: 100%;

    border-radius: 12px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    h3 {
      @media (max-width: 1000px) {
        text-align: center;
      }
    }
    ul {
      margin-top: 20px;
      list-style: none;

      li {
        padding-top: 20px;
        padding-bottom: 20px;

        padding-left: 20px;
        padding-right: 20px;

        border-top: 1px solid rgba(#000000, 0.1);

        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 1000px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        p.text1 {
          max-width: 560px;

          grid-template-columns: 1;
        }
        a {
          color: #3d8be4;
          text-decoration: none;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    //only p in div, NOT ul > li > p
    & > p.text1 {
      margin-top: 40px;

      span{
        font-weight: 600;
      }
    }
  }
}
</style>
