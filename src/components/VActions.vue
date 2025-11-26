<template>
    <section class="section section--actions">
        <div class="section-actions__header">
            <h2 class="section-title">Акции</h2>
            <button class="actions-btn">
                Все акции
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>

        <div class="slider">
            <!-- <v-preloader></v-preloader>
                <v-error-message v-if="getIsLoadedError"></v-error-message> -->
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
                    v-for="card in actionsArr"
                    :key="card.id"
                    @click="gotoPageById(card.id)"
                >
                    <v-card :card="card" :showDiscount="true"></v-card>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import VCard from "./VCard.vue";

export default {
    name: "VActions",
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
        actionsArr() {
            this.$store.dispatch("actionsArr");
            return this.$store.getters.getActionsArr;
        },
    },
};
</script>
<style>
.section--actions {
    position: relative;
}
.actions-btn {
    background-color: transparent;
    color: #414141;
    font-weight: 500;
    gap: 8px;
    border: none;
    outline: none;
    cursor: pointer;
}
.actions-btn svg {
    width: 24px;
    height: 24px;
    fill: #414141;
    color: #414141;
}
.section-actions__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}
.section-actions__header .section-title {
    margin-bottom: 0;
}
</style>
