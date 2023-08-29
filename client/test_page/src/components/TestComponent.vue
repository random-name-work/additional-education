<template>
  <div class="testComponent">
    <a href="#" class="backBtn">
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="Vector 34" d="M7 1L1 7L7 13" stroke="#3D8BE4" />
      </svg>
      <p class="text1">Каталог тестов</p>
    </a>

    <h2>
      Тест. Педагог высшего образования по программам подготовки кадров высшей
      квалификации
    </h2>

    <div class="description">
      <article>
        <h4>Описание теста</h4>
        <p class="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor.
        </p>
      </article>
    </div>

    <div class="startTest">
      <header>
        <h3>Отправьте свою работу</h3>
        <time>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 6V14L16.5 17.5" stroke="#3D8BE4" />
            <circle cx="12" cy="12" r="11.5" stroke="#3D8BE4" />
          </svg>

          <p class="caption">60 мин.</p>

          <p class="caption">24 вопроса</p>
        </time>
      </header>

      <v-btn
        flat
        href="#"
        class="text-white"
        color="#3d8be4"
        min-height="60px"
        min-width="180px"
        max-width="180px"
      >
        Начать тест
      </v-btn>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.testComponent {
  padding-top: 96px;
  padding-bottom: 100px;

  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.backBtn {
  text-decoration: none;

  color: #3d8be4;

  display: flex;
  align-items: center;

  gap: 8px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

h2 {
  margin-top: 40px;

  @media (max-width: 1279px) {
    text-align: center;
  }
}
.description {
  margin-top: 40px;

  @media (max-width: 1279px) {
    text-align: center;
  }
  article {
    p.text1 {
      margin-top: 20px;
    }
  }
}

.startTest {
  margin-top: 64px;

  border-top: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  padding-top: 64px;
  padding-bottom: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 40px;
  }

  header {
    time {
      margin-top: 7px;

      color: #3d8be4;

      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 550px) {
        justify-content: center;
      }
    }
  }
}
</style>
