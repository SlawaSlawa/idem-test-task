<template>
    <main class="main">
        <v-product-slider></v-product-slider>
        <v-buying-more></v-buying-more>
        <v-reviews></v-reviews>
        <v-actions></v-actions>
    </main>
</template>

<script>
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
    },
};
</script>
