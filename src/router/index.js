import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
    {
        path: "/",
        name: "search",
        component: SearchView,
    },
    {
        path: "/products/:id/",
        name: "product",
        component: ProductView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
