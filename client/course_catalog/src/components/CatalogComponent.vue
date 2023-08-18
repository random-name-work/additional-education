<template>
  <div class="content">
    <h2>Каталог курсов</h2>

    <div class="search">
      <p class="text1">Найдено: {{ courses.amount }}</p>
      <div class="autocomplete">
        <v-autocomplete label="Поиск" variant="outlined"></v-autocomplete>
      </div>
    </div>
    <div class="w-100">
      <hr class="mt-5" />
    </div>

    <div class="cardsSort">
      <div class="cards">
        <div class="card" v-for="course in sortedCourses" :key="course.id">
          <div class="header">
            <p class="text1">{{ course.faculty }}</p>
            <img src="../assets/Education.png" alt="course image" />
          </div>
          <h4>{{ course.header }}</h4>
          <div class="footer">
            <div class="time">
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
              <p class="caption">от {{ course.time }} ак.ч.</p>
            </div>
            <div class="btn">
              <v-btn
                href="#"
                variant="outlined"
                color="#3d8be4"
                min-height="40px"
                min-width="140px"
                block
              >
                Подробнее
              </v-btn>
            </div>
          </div>
        </div>
        <div class="btn">
          <v-btn
            @click="courseAmount += 10"
            v-if="courseAmount < courses.amount"
            flat
            color="#3d8be4"
            min-height="60px"
            max-width="180px"
            min-width="180px"
            block
          >
            Загрузить ещё 10
          </v-btn>
        </div>
      </div>
      <div class="sort">
        <div class="sortTypes" v-for="sType in types" :key="sType.name">
          <div class="name" @click="sType.isOpen = !sType.isOpen">
            <p class="text1">{{ sType.name }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              transform="rotate(180)"
            >
              <path d="M21 11L11 1L1 11" stroke="black" />
            </svg>
          </div>
          <div class="checkboxes" v-if="sType.isOpen">
            <v-checkbox
              class="text1 mt-5"
              :label="`${content}`"
              v-for="content in sType.array"
              :key="content"
            >
            </v-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseAmount: 10,
      courses: {
        amount: 16,
        array: [
          {
            id: 1,

            type: "Повышение квалификации",
            faculty: "Педагогика",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 2,

            type: "Повышение квалификации",
            faculty: "Юриспруденция",
            documentType: "Удостоверение о повышении квалификации",
            additionally: [],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 3,

            type: "Повышение квалификации",
            faculty: "Медицина",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 4,

            type: "Повышение квалификации",
            faculty: "Бизнес",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 5,

            type: "Повышение квалификации",
            faculty: "Педагогика",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 6,

            type: "Повышение квалификации",
            faculty: "Юриспруденция",
            documentType: "Удостоверение о повышении квалификации",
            additionally: [],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 7,

            type: "Повышение квалификации",
            faculty: "Медицина",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 8,

            type: "Повышение квалификации",
            faculty: "Бизнес",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 6,

            type: "Повышение квалификации",
            faculty: "Юриспруденция",
            documentType: "Удостоверение о повышении квалификации",
            additionally: [],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 7,

            type: "Повышение квалификации",
            faculty: "Медицина",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
          {
            id: 8,

            type: "Повышение квалификации",
            faculty: "Бизнес",
            documentType: "Удостоверение о повышении квалификации",
            additionally: ["LowPrice"],

            img: "index",
            header:
              "Педагог высшего образования по программам подготовки кадров высшей квалификации",
            time: "250",
          },
        ],
      },
      types: [
        {
          name: "Тип обучения",
          isOpen: false,
          array: [
            "Повышение квалификации",
            "Профессиональная переподготовка",
            "Видеолекции",
          ],
        },
        {
          name: "Факультет",
          isOpen: false,
          array: [
            "Педагогика",
            "Психология",
            "Экономика",
            "Юриспруденция",
            "Медицина",
            "Бизнес-образование",
          ],
        },
        {
          name: "Тип выдаваемого документа",
          isOpen: false,
          array: [
            "Удостоверение о повышении квалификации",
            "Диплом о профессиональной переподготовке",
            "Сертификат о прохождении вебинара",
          ],
        },
        {
          name: "Дополнительно",
          isOpen: false,
          array: ["LowPrice", "Популярные программы"],
        },
      ],
      checkbox: [],
    };
  },
  computed:{
    sortedCourses(){
        return this.courses.array.slice(0, this.courseAmount)
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  max-width: 1200px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1220px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
h2 {
  padding-top: 90px;
  @media (max-width: 1220px) {
    text-align: center;
  }
}
.search {
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
  .autocomplete {
    max-width: 366px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
  }

  .v-input__details {
    display: none;
  }
}
.cardsSort {
  display: flex;
  gap: 50px;

  margin-bottom: 50px;

  @media (max-width: 1220px) {
    flex-direction: column-reverse;

    align-items: center;
  }
  .cards {
    margin-top: 40px;

    max-width: 784px;

    display: flex;
    flex-wrap: wrap;

    gap: 50px;

    align-items: center;
    justify-content: center;
    .card {
      padding-top: 40px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 30px;

      max-width: 367px;
      width: 100%;

      border-radius: 12px;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

      @media (max-width: 500px) {
        padding: 25px;
      }

      .header {
        display: flex;
        justify-content: space-between;

        img {
          @media (max-width: 400px) {
            display: none;
          }
        }
      }
      h4 {
        margin-top: 10px;
      }
      .footer {
        margin-top: 30px;

        display: flex;
        justify-content: space-between;

        @media (max-width: 500px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .time {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
    .btn {
      width: 100%;

      display: flex;
      justify-content: center;
    }
  }
  .sort {
    max-width: 366px;
    width: 100%;

    .sortTypes {
      .name {
        margin-top: 40px;

        display: flex;
        justify-content: space-between;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
