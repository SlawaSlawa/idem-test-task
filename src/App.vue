<template>
    <v-header></v-header>
    <v-bread-crumbs></v-bread-crumbs>
    <main class="main">
        <div class="container">
            <RouterView />
        </div>
    </main>
    <v-footer></v-footer>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import VBreadCrumbs from "./components/VBreadCrumbs.vue";
import VFooter from "./components/VFooter.vue";

export default {
    created() {
        window.addEventListener("resize", this.resizeHandler);
        this.resizeHandler(false);
    },
    unmounted() {
        window.removeEventListener("resize", this.resizeHandler);
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    },
    name: "App",
    components: {
        VHeader,
        VBreadCrumbs,
        VFooter,
    },
    data() {
        return {
            numberOfCardsLaptop: 16,
            numberOfCardsTablet: 12,
            numberOfCardsMobile: 8,
        };
    },
    methods: {
        resizeHandler(evt) {
            let width = 0;
            if (evt) {
                width = evt.currentTarget.innerWidth;
            } else {
                width = window.innerWidth;
            }

            if (1023 >= width && 768 <= width) {
                this.$store.dispatch(
                    "newNumbersOfCard",
                    this.numberOfCardsTablet
                );
            } else if (768 >= width) {
                this.$store.dispatch(
                    "newNumbersOfCard",
                    this.numberOfCardsMobile
                );
            } else {
                this.$store.dispatch(
                    "newNumbersOfCard",
                    this.numberOfCardsLaptop
                );
            }
        },
    },
};
</script>

<style></style>
