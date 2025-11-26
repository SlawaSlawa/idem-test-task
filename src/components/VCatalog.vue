<template>
    <section class="section section--catalog">
        <div class="catalog">
            <v-preloader></v-preloader>
            <v-error-message v-if="getIsLoadedError"></v-error-message>

            <v-card
                v-for="card in catalog"
                :key="card.id"
                @click="gotoPageById(card.id)"
                :card="card"
                :showDiscount="true"
            ></v-card>
        </div>
        <button
            @click="getMoreCards"
            class="btn btn--load-more"
            :disabled="isBtnDisabled"
            v-if="!getIsLoadedError"
        >
            Загрузить еще
        </button>
    </section>
</template>

<script>
import VPreloader from "./VPreloader.vue";
import VErrorMessage from "./VErrorMessage.vue";
import VCard from "./VCard.vue";

export default {
    name: "VCatalog",
    components: { VCard, VPreloader, VErrorMessage },
    data() {
        return {
            multiplier: 1,
            isBtnDisabled: false,
        };
    },
    methods: {
        getMoreCards() {
            this.multiplier++;
            if (
                this.$store.getters.getProducts.length -
                    this.$store.getters.getNumberOfCards * this.multiplier >
                0
            ) {
                this.isBtnDisabled = false;
            } else {
                this.isBtnDisabled = true;
            }
        },
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
        catalog() {
            return this.currentProductArr;
        },
        currentProductArr() {
            return this.$store.getters.getProducts.slice(
                0,
                this.$store.getters.getNumberOfCards * this.multiplier
            );
        },
        getIsLoadedError() {
            return this.$store.getters.getIsLoadedError;
        },
        numberOfCards() {
            return this.numberOfCardsLaptop;
        },
    },
};
</script>

<style>
.section--catalog {
    position: relative;
}

.catalog {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 48px;
}

.btn--load-more {
    width: auto;
    margin: 0 auto;
    padding: 8px 24px;
    font-size: 16px;
    text-align: center;
    background-color: #ffffff;
    color: #414141;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    transition: border-color 0.3s ease;
}
.btn--load-more:hover {
    background-color: #fff;
    color: #414141;
    border: 1px solid #ff6633;
}
.btn--load-more:disabled {
    background-color: #ffffff;
    color: #bfbfbf;
}
.btn--load-more:hover:disabled {
    background-color: #ffffff;
    border: 1px solid #bfbfbf;
}

/* -------------@MEDIA------------- */

@media (max-width: 970px) {
    .catalog {
        gap: 32px 16px;
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .catalog {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 680px) {
    .catalog {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 351px) {
    .catalog {
        grid-template-columns: 1fr;
        gap: 32px 0;
    }
}
</style>
