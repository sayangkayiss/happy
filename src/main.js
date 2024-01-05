import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import App from "./App.vue";
import AOS from "aos";
import router from "./router";
import "aos/dist/aos.css";

AOS.init();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
