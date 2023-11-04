<template>
  <div class="bgColor">
    <div class="courseInfo">
      <h2>Информация о курсе</h2>

      <div class="authorInfo">
        <img src="../assets/courseInfoScene.png" alt="EducationScene" />

        <div class="content">
          <h5>Автор курса</h5>
          <h3>{{ authorInfo.authorName }}</h3>
          <ul>
            <li v-for="about in authorInfo.aboutAuthor" :key="about">
              <p class="text1">{{ about }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="courseTarget">
      <div class="target">
        <div class="target__text">
          <h3>Цель курса</h3>
          <p class="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <img src="../assets/courseTargetHug.png" alt="additional Image" />
      </div>
      <div class="additionalBlocks">
        <div class="adBlock">
          <h3>Форма обучения</h3>
          <p class="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dо.
          </p>
        </div>
        <div class="adBlock">
          <h3>Вид итоговой аттестации</h3>
          <p class="text1">
            Итоговое тестирование из 20 вопросов с вариантами ответов.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
export default {
  name: "App",
  components: {},
  data() {
    return {
      authorInfo: {
        authorName: "Буланов Максим Владимирович",
        aboutAuthor: [
          "Профессиональный тьютор",
          "Проектирует образовательные программы",
          "Сооснователь проектов Место и образовательного бюро Розетка",
          "Помогает ученикам найти собственный путь развития",
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.bgColor {
  background-color: #f6f8f9;

  height: 100%;
  width: 100%;
}
.courseInfo {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  padding-top: 120px;

  @media (max-width: 1279px) {
    padding-top: 80px;
    padding-left: 10px;
  }
  h2 {
    @media (max-width: 1279px) {
      text-align: center;
    }
  }
  .authorInfo {
    display: flex;

    margin-top: 120px;

    img {
      @media (max-width: 1279px) {
        display: none;
      }
    }
    .content {
      text-align: left;
      margin-left: 120px;

      @media (max-width: 1279px) {
        justify-content: center;
        margin: auto;
      }
      h3 {
        margin-top: 40px;
      }
      ul {
        margin-top: 30px;

        li {
          margin-top: 20px;
          margin-left: 20px;

          &::marker {
            content: url("../assets/CourseInfoMarker.svg");
          }
        }
      }
    }
  }
}
.courseTarget {
  margin-top: 200px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1279px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  .target {
    display: flex;
    gap: 50px;

    position: relative;
    z-index: 0;
    @media (max-width: 1279px) {
      justify-content: center;
    }
    &__text {
      p.text1 {
        margin-top: 36px;

        max-width: 367px;
      }
    }

    img {
      @media (max-width: 1279px) {
        display: none;
      }
    }
  }
  .additionalBlocks {
    position: relative;
    z-index: 4;

    display: flex;
    gap: 60px;

    margin-top: -50px;

    @media (max-width: 1279px) {
      margin-top: 40px;

      flex-direction: column;
    }
    .adBlock {
      max-width: 570px;
      width: 100%;

      height: 303px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 12px;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      @media (max-width: 1279px) {
        margin-left: auto;
        margin-right: auto;

        padding: 10px;
        text-align: center;
      }
      p.text1 {
        max-width: 367px;
      }
    }
  }
}
</style>
