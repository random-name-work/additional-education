<template>
  <div class="blogComponent">
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
      Как получить налоговый вычет за обучение: на что обратить внимание и стоит
      ли оформлять его через посредников
    </h2>

    <div class="author">
      <div class="author__data">
        <img src="../assets/blogUserImage.png" alt="user image" />

        <h5>Фёдоров Сергей</h5>

        <time class="caption">02 дек 2020</time>

        <div class="views">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M7 0.0800781C2.4073 0.0800781 0 3.46248 0 4.00008C0 4.53628 2.4073 7.92008 7 7.92008C11.592 7.92008 14 4.53628 14 4.00008C14 3.46248 11.592 0.0800781 7 0.0800781ZM7 7.01498C5.2815 7.01498 3.8885 5.66538 3.8885 4.00008C3.8885 2.33478 5.2815 0.983778 7 0.983778C8.7185 0.983778 10.1108 2.33478 10.1108 4.00008C10.1108 5.66538 8.7185 7.01498 7 7.01498ZM7 4.00008C6.7151 3.68718 7.4641 2.49228 7 2.49228C6.1404 2.49228 5.4439 3.16778 5.4439 4.00008C5.4439 4.83238 6.1404 5.50788 7 5.50788C7.8589 5.50788 8.5561 4.83238 8.5561 4.00008C8.5561 3.61718 7.2422 4.26538 7 4.00008Z"
              fill="black"
            />
          </svg>
          <p class="caption">239</p>
        </div>
      </div>

      <div class="reposte">
        <a href="#">
          <img src="../assets/reposte.png" alt="reposte" />
        </a>
      </div>
    </div>

    <article>
      <img src="../assets/blogImage.png" alt="blog image" />

      <h4>
        Создание вайрфреймов для мобильного приложения: пошаговое руководство
      </h4>

      <p class="text2">
        Вайрфреймы (Wireframes) играют важную роль как в дизайне, так и в
        разработке мобильных приложений. По мере того, как вы принимаете решения
        о функционале приложения и создаете вайрфреймы для отображения ваших
        идей, вы проходите через несколько стадий.
      </p>
      <p class="text2">
        Разные команды UX-дизайнеров придерживаются различных подходов к
        созданию вайрфреймов для мобильных приложений. Некоторые из них смело
        можно использовать, в то время как другие могут лишь навредить. В этой
        статье описаны 8 шагов, которые помогут сделать процесс создания
        вайрфреймов более эффективным. Итак, давайте начнем.
      </p>

      <video controls="true">
        <source
          src="www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          type="video/mp4"
        />
        Видео не поддерживается
      </video>

      <h4>
        Создание вайрфреймов для мобильного приложения: пошаговое руководство
      </h4>

      <p class="text2">
        Разработка дизайна мобильного приложения начинается с построения
        пользовательского сценария. Вы должны иметь полное представление о вашем
        продукте и о том, как вы будете соединять экраны приложения друг с
        другом. Сделайте сценарий, по которому будут проходить ваши
        пользователи, понятным. Простой в использовании сценарий гарантирует,
        что пользователи смогут достичь своих целей.
      </p>

      <audio src="" controls></audio>

      <p class="text2">
        Разработка дизайна мобильного приложения начинается с построения
        пользовательского сценария. Вы должны иметь полное представление о вашем
        продукте и о том, как вы будете соединять экраны приложения друг с
        другом. Сделайте сценарий, по которому будут проходить ваши
        пользователи, понятным. Простой в использовании сценарий гарантирует,
        что пользователи смогут достичь своих целей.
      </p>
    </article>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.blogComponent {
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

h2{
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;

  max-width: 660px;
  width: 100%;
}
.author {
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  max-width: 660px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;

    gap: 20px;
  }

  &__data {
    display: flex;
    align-items: center;

    gap: 15px;
    .views {
      display: flex;
      align-items: center;

      gap: 6px;
    }

    time,
    .views{
      opacity: 0.4;
    }
  }
}

article {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  img {
    max-width: 660px;
    width: 100%;
  }

  h4,
  p.text2 {
    max-width: 660px;
  }

  video {
    max-width: 1200px;
    width: 100%;
  }

  audio {
    max-width: 660px;
    width: 100%;
  }
}
</style>
