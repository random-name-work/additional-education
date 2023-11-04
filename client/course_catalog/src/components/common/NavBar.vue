<template>
  <div class="navbar">
    <v-layout>
      <v-app-bar
        scroll-behavior="elevate"
        class="align-center pt-4 pb-4 pl-7 pr-7"
      >
        <img src="./../../assets/logo.png" alt="logo" />
        <v-spacer></v-spacer>
        <v-btn
          class="text-none"
          variant="outlined"
          color="#3D8BE4"
          min-height="40px"
          max-height="40px"
          min-width="158px"
          max-width="158px"
          v-if="width >= 1000"
        >
          Все курсы
        </v-btn>
        <v-spacer></v-spacer>
        <div class="refs d-flex" v-if="width >= 1500">
          <div class="btn" v-for="link in links" :key="link.name">
            <v-btn
              variant="text"
              class="text-none px-1 menu"
              :href="`${link.href}`"
            >
              {{ link.name }}
            </v-btn>
            <v-spacer></v-spacer>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="phone" v-if="width >= 1000">
          <v-btn href="tel:88463754131">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.2477 16.11L16.9277 14.43C17.154 14.2065 17.4403 14.0536 17.7518 13.9897C18.0634 13.9258 18.3867 13.9537 18.6827 14.07L20.7302 14.8875C21.0293 15.0089 21.2858 15.2161 21.4673 15.4831C21.6488 15.75 21.7473 16.0647 21.7502 16.3875V20.1375C21.7485 20.3571 21.7023 20.574 21.6145 20.7753C21.5267 20.9766 21.3991 21.158 21.2393 21.3087C21.0796 21.4593 20.891 21.5761 20.6849 21.6519C20.4788 21.7278 20.2595 21.7611 20.0402 21.75C5.69272 20.8575 2.79772 8.7075 2.25022 4.0575C2.22481 3.82915 2.24803 3.59801 2.31836 3.37928C2.38869 3.16055 2.50453 2.95919 2.65827 2.78845C2.81201 2.61771 3.00016 2.48145 3.21034 2.38865C3.42052 2.29584 3.64797 2.24859 3.87772 2.25H7.50022C7.82348 2.25096 8.13906 2.3486 8.40637 2.53037C8.67368 2.71214 8.8805 2.96973 9.00022 3.27L9.81772 5.3175C9.93791 5.6123 9.96858 5.93598 9.90588 6.24811C9.84319 6.56024 9.68992 6.84697 9.46522 7.0725L7.78522 8.7525C7.78522 8.7525 8.75272 15.3 15.2477 16.11Z"
                fill="black"
              />
            </svg>
            <p class="ml-2 menu">8 (846) 375-41-31</p>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="auth" v-if="width >= 1000">
          <v-btn class="text-none" color="#3D8BE4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
            >
              <path
                d="M1 7.5C3.48368 3.59267 7.85091 1 12.8237 1C20.5557 1 26.8237 7.26801 26.8237 15C26.8237 22.732 20.5557 29 12.8237 29C7.85091 29 3.48368 26.4073 1 22.5"
                stroke="#3D8BE4"
              />
              <path d="M7.82422 9L13.8242 15L7.82422 21" stroke="#3D8BE4" />
            </svg>
            <p class="menu ml-2"> Вход / Регистрация</p>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-menu v-if="width < 1500">
          <template v-slot:activator="{ props }">
            <v-btn color="#000" v-bind="props" icon>
              <svg
                class="v-icon__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
              </svg>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if="width < 1000" class="justify-center">
              <v-btn
                class="text-none"
                variant="outlined"
                color="#3D8BE4"
                min-height="40px"
                max-height="40px"
                min-width="158px"
                max-width="158px"
              >
                Все курсы
              </v-btn>
            </v-list-item>
            <v-list-item
              class="justify-center"
              v-for="(link, index) in links"
              :key="index"
              :value="index"
            >
              <v-list-item-title class="menu">{{
                link.name
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="width < 1000" class="justify-center">
              <div class="phone">
                <v-btn href="tel:88463754131">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.2477 16.11L16.9277 14.43C17.154 14.2065 17.4403 14.0536 17.7518 13.9897C18.0634 13.9258 18.3867 13.9537 18.6827 14.07L20.7302 14.8875C21.0293 15.0089 21.2858 15.2161 21.4673 15.4831C21.6488 15.75 21.7473 16.0647 21.7502 16.3875V20.1375C21.7485 20.3571 21.7023 20.574 21.6145 20.7753C21.5267 20.9766 21.3991 21.158 21.2393 21.3087C21.0796 21.4593 20.891 21.5761 20.6849 21.6519C20.4788 21.7278 20.2595 21.7611 20.0402 21.75C5.69272 20.8575 2.79772 8.7075 2.25022 4.0575C2.22481 3.82915 2.24803 3.59801 2.31836 3.37928C2.38869 3.16055 2.50453 2.95919 2.65827 2.78845C2.81201 2.61771 3.00016 2.48145 3.21034 2.38865C3.42052 2.29584 3.64797 2.24859 3.87772 2.25H7.50022C7.82348 2.25096 8.13906 2.3486 8.40637 2.53037C8.67368 2.71214 8.8805 2.96973 9.00022 3.27L9.81772 5.3175C9.93791 5.6123 9.96858 5.93598 9.90588 6.24811C9.84319 6.56024 9.68992 6.84697 9.46522 7.0725L7.78522 8.7525C7.78522 8.7525 8.75272 15.3 15.2477 16.11Z"
                      fill="black"
                    />
                  </svg>
                  <p class="ml-2 menu">8 (846) 375-41-31</p>
                </v-btn>
              </div>
            </v-list-item>
            <v-list-item v-if="width < 1000" class="justify-center">
              <v-btn
                class="text-none"
                variant="outline"
                color="#3D8BE4"
                v-if="width < 1000"
              >
                <p class="menu ml-2">Вход / Регистрация</p>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Видеолекции",
          href: "#",
        },
        {
          name: "Тесты",
          href: "#",
        },
        {
          name: "Low Price",
          href: "#",
        },
        {
          name: "Блог",
          href: "#",
        },
        {
          name: "Об организации",
          href: "#",
        },
      ],
      width: document.documentElement.clientWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #000000;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.d-flex {
  gap: 22.5px; // 45/2 idk why this scale
}
</style>
