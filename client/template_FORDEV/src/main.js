import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import {mdi} from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App)

import UIComponents from "@/components/UI/index.js"
UIComponents.forEach(component => {
  app.component(component.name, component)
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
        mdi
    }
},
});

app.use(vuetify).mount("#app");
