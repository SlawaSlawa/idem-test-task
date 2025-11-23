import { createApp } from "vue";
import "@/assets/css/bootstrap-reboot.min.css";
import "@/assets/css/fonts.css";
import "@/assets/css/main.css";
import router from "./router";
import store from "./store";
// import "swiper/swiper/css";
// import "swiper/swiper-bundle.css";
import Vue3SocialSharingPlugin from "vue3-social-sharing";

import App from "./App.vue";

createApp(App)
    .use(store)
    .use(router)
    .use(Vue3SocialSharingPlugin)
    .mount("#app");
