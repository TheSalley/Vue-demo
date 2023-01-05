import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/base.scss";
import "./assets/theme.scss";
import '@icon-park/vue-next/styles/index.css';
import App from "./App.vue";

createApp(App).use(createPinia()).use(router).mount("#app");
