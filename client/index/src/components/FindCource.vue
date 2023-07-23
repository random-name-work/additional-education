<template>
  <h1>Найти то, что тебе нужно</h1>
  <div class="btns">
    <div class="btn" v-for="btn in buttonsName" :key="btn.id">
      <button @click="displayId = btn.id">{{ btn.name }}</button>
    </div>
    <FindCourseSlider></FindCourseSlider>
  </div>
</template>

<script>
import FindCourseSlider from './FindCourseSlider.vue';

export default {
  components: {
    FindCourseSlider,
  },
  data() {
    return {
      buttonsName: [
        {
          id: 1,
          name: "Все курсы",
        },
        {
          id: 2,
          name: "Педагогика",
        },
        {
          id: 3,
          name: "Психология",
        },
        {
          id: 4,
          name: "Медицина",
        },
        {
          id: 5,
          name: "Юриспруденция",
        },
        {
          id: 6,
          name: "Бизнес",
        },
        {
          id: 7,
          name: "Экономика",
        },
      ],
      displayId: 1,
      sortedCourses: [
        {
          id: 1,
          img: "./../assets/courseImage1",
          type: 1,
          header: "Педагогика",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 2,
          img: "./../assets/courseImage2",
          type: 2,
          header: "Медицина",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
        {
          id: 3,
          img: "./../assets/courseImage3",
          type: 3,
          header: "Юриспруденция",
          content:
            "Педагог высшего образования по программам подготовки кадров высшей квалификации",
          time: "от 250 ак.ч.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
