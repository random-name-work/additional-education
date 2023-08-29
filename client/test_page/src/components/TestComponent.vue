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
      <p class="text1">Каталог видео лекций</p>
    </a>

    <h2>
      Тест. Педагог высшего образования по программам подготовки кадров высшей
      квалификации
    </h2>

    <div class="description">
      <h3>
        Педагог высшего образования по программам подготовки кадров высшей
        квалификации
      </h3>
      <hr />
      <article>
        <h3>Описание видеолекции</h3>
        <p class="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor.
        </p>
      </article>
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
.description {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  hr {
    opacity: 0.4;
  }

  article {
    p.text1 {
      max-width: 783px;
      margin-top: 20px;
    }
  }
}
</style>
