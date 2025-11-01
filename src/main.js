import { createApp } from "vue";
import "@/assets/css/bootstrap-reboot.min.css";
import "@/assets/css/fonts.css";
import "@/assets/css/main.css";
import store from "./store/index.js";
import App from "./App.vue";

createApp(App).use(store).mount("#app");
