<template>
    <main class="main">
        <v-preloader></v-preloader>
        <v-error-message v-if="getIsLoadedError"></v-error-message>
        <div v-else>
            <v-product-slider></v-product-slider>
            <v-buying-more></v-buying-more>
            <v-reviews></v-reviews>
            <v-actions></v-actions>
        </div>
    </main>
</template>

<script>
import VPreloader from "@/components/VPreloader.vue";
import VErrorMessage from "@/components/VErrorMessage.vue";

import VProductSlider from "@/components/VProductSlider.vue";
import VBuyingMore from "@/components/VBuyingMore.vue";
import VReviews from "@/components/VReviews.vue";
import VActions from "@/components/VActions.vue";

export default {
    name: "ProductView",
    components: {
        VProductSlider,
        VBuyingMore,
        VReviews,
        VActions,
        VPreloader,
        VErrorMessage,
    },
    created() {
        this.$store.dispatch("productItem", this.$route.params.id);
    },
    computed: {
        getIsLoadedError() {
            return this.$store.getters.getIsLoadedError;
        },
    },
};
</script>
