<template>
  <div class="lowPriceSlider">
    <h2>Low price</h2>
    <div class="textBtn">
      <p class="text2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </p>
      <blue-button180 :href="`https://google.com`">
        Смотреть больше
      </blue-button180>
    </div>
    <Carousel ref="carousel" :breakpoints="breakpoints" v-model="currentSlide">
      <Slide v-for="course in lowPrice" :key="course.id">
        <div class="carousel__item">
          <div class="lowPrice">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.5845 13.578C14.5845 12.8812 14.4517 12.2733 14.1845 11.753C13.9189 11.2343 13.5033 10.7796 12.9423 10.3874C12.4642 10.0546 11.8236 9.74521 11.0267 9.45928C10.9392 9.42803 10.8783 9.34365 10.8798 9.2499L10.933 4.74053C10.9345 4.58271 11.1017 4.47334 11.2439 4.54209C11.5252 4.67803 11.772 4.87646 11.9814 5.1374C12.3595 5.60772 12.5767 6.21396 12.6298 6.96865C12.6369 7.06996 12.6821 7.16484 12.7563 7.23414C12.8305 7.30344 12.9283 7.34202 13.0298 7.34209H14.0455C14.2752 7.34209 14.458 7.14678 14.4455 6.91709C14.3861 5.77178 14.072 4.85615 13.5252 4.16553C12.9455 3.43428 12.1298 2.98271 11.122 2.80771C11.0158 2.78896 10.9377 2.6999 10.9377 2.59209V1.06709C10.9377 0.82334 10.7408 0.626465 10.497 0.626465H9.9439C9.71578 0.626465 9.5314 0.81084 9.5314 1.03896V2.32334L9.51421 2.59209C9.50796 2.69521 9.42828 2.77959 9.32515 2.79521C8.31265 2.94834 7.50015 3.35146 6.90796 4.00303C6.27984 4.69365 5.96109 5.57803 5.96109 6.65615C5.96109 7.71396 6.27828 8.5874 6.92046 9.2749C7.4439 9.83584 8.22046 10.3093 9.24859 10.6968C9.33453 10.7296 9.3939 10.8124 9.39234 10.9046L9.33921 15.5937C9.33765 15.7374 9.20015 15.8405 9.06109 15.8046C8.61421 15.6874 8.24234 15.4796 7.94859 15.1765C7.54078 14.7577 7.3064 14.2155 7.24546 13.4937C7.22828 13.2905 7.04703 13.1233 6.8439 13.1233H5.81734C5.58609 13.1233 5.40328 13.3218 5.4189 13.5515C5.49234 14.639 5.86265 15.503 6.47203 16.1702C7.12828 16.889 8.02359 17.3046 9.17828 17.4421C9.28921 17.4546 9.37515 17.5468 9.37515 17.6593V18.889C9.37515 19.1546 9.59234 19.3702 9.8564 19.3702H10.3205C10.5736 19.3702 10.7814 19.1624 10.7814 18.9093V17.878L10.783 17.653C10.7845 17.5437 10.8673 17.453 10.9767 17.439C12.0861 17.2921 12.9548 16.8999 13.5845 16.2593C14.2502 15.5843 14.5845 14.689 14.5845 13.578ZM8.43453 8.2249C7.99703 7.82646 7.77828 7.29053 7.77828 6.61865C7.77828 5.89365 7.98609 5.32959 8.40015 4.9249C8.60796 4.72178 8.86421 4.57021 9.16734 4.46865C9.31109 4.42021 9.46109 4.52959 9.45953 4.68115L9.41734 8.49053C9.41578 8.65615 9.23609 8.76084 9.09078 8.68115C8.82671 8.53584 8.60796 8.38428 8.43453 8.2249ZM12.0189 15.2937C11.7595 15.5108 11.4502 15.6702 11.0892 15.7733C10.9455 15.814 10.8017 15.7077 10.8033 15.5593L10.8502 11.6233C10.8517 11.4608 11.0252 11.3577 11.1705 11.4296C11.5736 11.6312 11.8923 11.8437 12.122 12.0687C12.5455 12.4827 12.758 12.9921 12.758 13.5968C12.7595 14.314 12.5127 14.8796 12.0189 15.2937Z"
                fill="#37B34A"
              />
              <path
                opacity="0.2"
                d="M10.4955 0.938965C10.5658 0.938965 10.6236 0.996777 10.6236 1.06709V2.59365C10.6236 2.85146 10.8095 3.07178 11.0673 3.11709C12.0111 3.28115 12.7548 3.6999 13.2798 4.3624C13.7908 5.00771 14.0767 5.87334 14.133 6.93584C14.1345 6.97021 14.1173 6.99365 14.108 7.00459C14.0955 7.01709 14.0752 7.03271 14.0455 7.03271H13.0298C12.983 7.03271 12.9455 6.99678 12.9408 6.9499C12.883 6.13897 12.6423 5.46396 12.2252 4.94521C11.9877 4.6499 11.7033 4.42021 11.3798 4.26396C11.308 4.22959 11.2314 4.2124 11.1533 4.2124C10.8627 4.2124 10.6252 4.4499 10.6205 4.74053L10.5673 9.2499C10.5642 9.47647 10.7064 9.67959 10.922 9.75615C11.6923 10.0327 12.3127 10.3312 12.7642 10.6452C13.2814 11.0062 13.6658 11.4265 13.908 11.8968C14.1502 12.3702 14.2736 12.9358 14.2736 13.5796C14.2736 14.6155 13.9752 15.4218 13.3627 16.0421C12.7845 16.628 11.9689 16.9952 10.9361 17.1312C10.6736 17.1655 10.4736 17.3905 10.4705 17.653L10.4689 17.8812V18.9124C10.4689 18.9921 10.4017 19.0608 10.3205 19.0608H9.8564C9.76421 19.0608 9.68765 18.9827 9.68765 18.8921V17.6624C9.68765 17.3937 9.48453 17.1671 9.21578 17.1358C8.12671 17.0062 7.30484 16.6233 6.70328 15.964C6.12515 15.3312 5.79703 14.5124 5.7314 13.5343C5.72984 13.4999 5.74546 13.478 5.75484 13.4671C5.76578 13.4546 5.78609 13.439 5.81734 13.439H6.8439C6.88453 13.439 6.92984 13.4812 6.93296 13.5233C7.00015 14.3062 7.25796 14.9187 7.72359 15.3968C8.0564 15.739 8.47984 15.9796 8.9814 16.1108C9.02515 16.1218 9.07203 16.128 9.11734 16.128C9.40953 16.128 9.64859 15.8921 9.65171 15.6015L9.70484 10.9108C9.70796 10.689 9.5689 10.4874 9.35796 10.4077C8.37828 10.039 7.63453 9.5874 7.14703 9.06396C6.55796 8.43271 6.27203 7.64678 6.27203 6.65928C6.27203 5.67022 6.56265 4.84834 7.13765 4.21709C7.67671 3.6249 8.42828 3.25146 9.37046 3.10771C9.6189 3.07021 9.80953 2.8624 9.82359 2.61553L9.84078 2.34678V1.03896C9.84078 0.984277 9.88609 0.938965 9.94078 0.938965H10.4955ZM9.19546 9.02178C9.48609 9.02178 9.72515 8.78584 9.72984 8.49521L9.77203 4.68584C9.77359 4.54209 9.7189 4.40771 9.6189 4.30615C9.5189 4.20459 9.37984 4.14678 9.23765 4.14678C9.17984 4.14678 9.12359 4.15615 9.0689 4.1749C8.72203 4.29053 8.42359 4.46865 8.18296 4.70459C7.70796 5.16865 7.46734 5.81397 7.46734 6.62178C7.46734 7.38272 7.72203 7.9999 8.22515 8.45772C8.41421 8.62959 8.65328 8.79678 8.93921 8.95615C9.01734 8.99834 9.1064 9.02178 9.19546 9.02178ZM11.0267 16.0952C11.0767 16.0952 11.1267 16.089 11.1752 16.0749C11.5783 15.9593 11.9298 15.778 12.2205 15.5343C12.7845 15.0608 13.072 14.4093 13.072 13.5983C13.072 12.9093 12.8267 12.3187 12.3423 11.8468C12.0908 11.6015 11.7455 11.3671 11.3111 11.1515C11.2361 11.1124 11.1548 11.0937 11.072 11.0937C10.7814 11.0937 10.5408 11.3296 10.5377 11.6202L10.4908 15.5562C10.4899 15.6264 10.503 15.6962 10.5293 15.7613C10.5556 15.8265 10.5945 15.8858 10.6439 15.9358C10.7455 16.0358 10.8845 16.0952 11.0267 16.0952ZM10.4955 0.626465H9.94234C9.71421 0.626465 9.52984 0.81084 9.52984 1.03896V2.32334L9.51265 2.59209C9.5064 2.69521 9.42671 2.77959 9.32359 2.79521C8.31265 2.94834 7.50015 3.35146 6.90796 4.00303C6.27984 4.69365 5.96109 5.57803 5.96109 6.65615C5.96109 7.71396 6.27828 8.5874 6.92046 9.2749C7.4439 9.83584 8.22046 10.3093 9.24859 10.6968C9.33453 10.7296 9.3939 10.8124 9.39234 10.9046L9.33921 15.5937C9.33765 15.7171 9.23453 15.8124 9.11734 15.8124C9.09859 15.8124 9.07984 15.8093 9.06109 15.8046C8.61421 15.6874 8.24234 15.4796 7.94859 15.1765C7.54078 14.7577 7.3064 14.2155 7.24546 13.4937C7.22828 13.2905 7.04703 13.1233 6.8439 13.1233H5.81734C5.58609 13.1233 5.40328 13.3218 5.4189 13.5515C5.49234 14.639 5.86265 15.503 6.47203 16.1702C7.12828 16.889 8.02359 17.3046 9.17828 17.4421C9.28921 17.4546 9.37515 17.5468 9.37515 17.6593V18.889C9.37515 19.1546 9.59234 19.3702 9.8564 19.3702H10.3205C10.5736 19.3702 10.7814 19.1624 10.7814 18.9093V17.878L10.783 17.653C10.7845 17.5437 10.8673 17.453 10.9767 17.439C12.0861 17.2921 12.9548 16.8999 13.5845 16.2593C14.2517 15.5827 14.5845 14.6874 14.5845 13.5765C14.5845 12.8796 14.4517 12.2718 14.1845 11.7515C13.9189 11.2327 13.5033 10.778 12.9423 10.3858C12.4642 10.053 11.8236 9.74365 11.0267 9.45771C10.9392 9.42646 10.8783 9.34209 10.8798 9.24834L10.933 4.73897C10.9345 4.61396 11.0392 4.51865 11.1533 4.51865C11.183 4.51865 11.2142 4.5249 11.2439 4.53896C11.5252 4.6749 11.772 4.87334 11.9814 5.13428C12.3595 5.60459 12.5767 6.21084 12.6298 6.96553C12.6369 7.06684 12.6821 7.16171 12.7563 7.23101C12.8305 7.30031 12.9283 7.33889 13.0298 7.33896H14.0455C14.2752 7.33896 14.458 7.14365 14.4455 6.91396C14.3861 5.76865 14.072 4.85303 13.5252 4.1624C12.9455 3.43115 12.1298 2.97959 11.122 2.80459C11.0158 2.78584 10.9377 2.69678 10.9377 2.58896V1.06709C10.9369 0.950187 10.89 0.838306 10.8072 0.755788C10.7244 0.673271 10.6124 0.626792 10.4955 0.626465ZM9.19546 8.70928C9.15953 8.70928 9.12359 8.6999 9.08921 8.68115C8.82671 8.53428 8.60796 8.38271 8.43453 8.2249C7.99703 7.82646 7.77828 7.29053 7.77828 6.61865C7.77828 5.89365 7.98609 5.32959 8.40015 4.9249C8.60796 4.72178 8.86421 4.57021 9.16734 4.46865C9.19078 4.46084 9.21421 4.45772 9.23765 4.45772C9.3564 4.45772 9.46109 4.55459 9.45953 4.68115L9.41734 8.49053C9.41578 8.61865 9.30953 8.70928 9.19546 8.70928ZM11.0267 15.7827C10.9064 15.7827 10.8033 15.6874 10.8033 15.5608L10.8502 11.6249C10.8517 11.4983 10.9564 11.4077 11.072 11.4077C11.1048 11.4077 11.1392 11.4155 11.1705 11.4312C11.5736 11.6327 11.8923 11.8452 12.122 12.0702C12.5455 12.4843 12.758 12.9937 12.758 13.5983C12.758 14.3155 12.5111 14.8796 12.0189 15.2937C11.7595 15.5108 11.4502 15.6702 11.0892 15.7733C11.0689 15.7796 11.047 15.7827 11.0267 15.7827Z"
                fill="#424242"
              />
            </svg>
            <h5>Low Price</h5>
          </div>

          <img src="@/assets/courseImage1.png" alt="" />

          <div class="type">
            <p class="text1">
              {{
                faculty.find((element) => element.id == course.facultyId).name
              }}
            </p>
          </div>

          <div class="header">
            <h4>
              {{ course.courseName }}
            </h4>
          </div>

          <div class="timeAndBtn">
            <div class="timeAndBtn__time">
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
              <p class="caption">От {{ course.minHours }} ак.ч.</p>
            </div>
            <div class="timeAndBtn__btn">
              <white-button140 :href="`https://google.com`">
                Подробнее
              </white-button140>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <navigation>
          <template #next>
            <span>
              <svg
                class="carousel__icon"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Arrow pointing to the right"
              >
                <title>Arrow pointing to the right</title>
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                ></path>
              </svg>
            </span>
          </template>
          <template #prev>
            <span>
              <svg
                class="carousel__icon"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Arrow pointing to the left"
              >
                <title>Arrow pointing to the left</title>
                <path
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                ></path>
              </svg>
            </span>
          </template>
        </navigation>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    lowPrice: Array,
    faculty: Array,
  },
  data() {
    return {
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
          wrapAround: "true",
        },
        600: {
          itemsToShow: 1.5,
          snapAlign: "center",
          wrapAround: "true",
        },
        800: {
          itemsToShow: 2,
          snapAlign: "center",
          wrapAround: "true",
        },
        1000: {
          itemsToShow: 2.5,
          snapAlign: "center",
          wrapAround: "true",
        },
        1300: {
          itemsToShow: 3,
          snapAlign: "center",
          wrapAround: "true",
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
// slider left right btns in App.vue styles
.lowPriceSlider {
  max-width: 1200px;
  width: 100%;

  margin: auto;
  padding-top: 120px;

  @media (max-width: 1300px) {
    padding-top: 80px;
  }
}
h2 {
  padding-left: 10px;
  padding-right: 10px;

  text-align: left;

  @media (max-width: 1300px) {
    text-align: center;
  }
}

.textBtn {
  margin-top: 40px;

  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    .v-btn {
      margin-top: 20px;
    }
  }

  .text2 {
    padding-left: 10px;
    padding-right: 10px;

    max-width: 570px;
    width: 100%;

    @media (max-width: 1300px) {
      margin-left: auto;
      margin-right: auto;

      text-align: center;
    }
  }
}
.carousel {
  margin-top: 47px;
  margin-bottom: 100px;
  &__item {
    position: relative;

    min-height: 465px;
    width: 100%;

    padding-bottom: 22px;

    border-radius: 12px;
    border: 1px solid #e5e5e5;

    background: #ffffff;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);

    overflow: hidden;

    .lowPrice {
      display: flex;
      align-items: center;

      position: absolute;
      top: 35px;
      left: 35px;

      padding: 3px;

      background-color: #fff;
      border-radius: 5px;
    }

    img {
      width: 100%;
    }

    .type {
      margin-top: 10px;
      margin-left: 30px;
      margin-right: 30px;
      text-align: left;
      @media (max-width: 450px) {
        text-align: center;
      }
    }
    .header {
      margin-top: 20px;
      margin-left: 29px;
      margin-right: 29px;
      text-align: left;

      @media (max-width: 450px) {
        text-align: center;
      }
    }
    .timeAndBtn {
      position: absolute;
      bottom: 22px;

      width: calc(100% - 60px);

      margin-top: 32px;
      margin-left: 30px;
      margin-right: 30px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &__time {
        display: flex;
        align-items: center;

        gap: 8px;
      }
      @media (max-width: 450px) {
        flex-direction: column;
        gap: 20px;
      }
    }
  }

  &__slide {
    padding: 26px;
  }
}
</style>
