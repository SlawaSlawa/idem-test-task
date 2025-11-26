<template>
    <section class="section section--buying-more">
        <h2 class="section-title">С этим товаров покупают</h2>
        <div class="slider">
            <Swiper
                :slides-per-view="1"
                :space-between="20"
                navigation
                :breakpoints="{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    352: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    680: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                    },
                    971: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }"
            >
                <SwiperSlide
                    v-for="card in productsByCategory"
                    :key="card.id"
                    @click="gotoPageById(card.id)"
                >
                    <v-card
                        @click="gotoPageById(card.id)"
                        :card="card"
                        :showDiscount="false"
                    ></v-card>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script>
import VCard from "./VCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    name: "VBuyingMore",
    components: {
        VCard,
        Swiper,
        SwiperSlide,
    },
    methods: {
        gotoPageById(id) {
            this.scrollToTop();
            this.$router.push("/products/" + id);
        },
        scrollToTop() {
            this.$store.commit("toggleCatalogIsLoaded", false);
            this.$store.commit("toggleIsLoadedError", false);
            window.scrollTo(0, 0);
        },
    },
    computed: {
        productInfo() {
            this.$store.dispatch("productItem", this.$route.params.id);
            const product = this.$store.getters.getProductItem;
            return product;
        },
        productsByCategory() {
            this.$store.dispatch(
                "productsByCategory",
                this.productInfo.category
            );
            const productsArr = this.$store.getters.getProductsByCategory;
            return productsArr.products;
        },
    },
};
</script>
