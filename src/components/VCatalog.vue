<template>
    <section class="section section--catalog">
        <div class="catalog">
            <v-preloader></v-preloader>
            <v-error-message v-if="getIsLoadedError"></v-error-message>
            <div class="card" v-for="card in catalog" :key="card.id">
                <div class="card__img-wrap">
                    <!-- <img
                        :src="card.thumbnail"
                        :alt="card.title"
                        class="card__img"
                    /> -->
                    <div class="card__badge">
                        {{ card.discountPercentage }}%
                    </div>
                    <div class="card__like">
                        <img
                            src="../assets/images/icons/like-icon.svg"
                            alt="Like"
                            class="card__like-img"
                        />
                    </div>
                </div>
                <div class="card__content-wrap">
                    <v-card-price
                        :price="card.price"
                        :discount="card.discountPercentage"
                    ></v-card-price>
                    <h3 class="card__title">{{ card.title }}</h3>
                    <v-card-rating :rating="card.rating"></v-card-rating>
                    <button class="btn btn--card">В корзину</button>
                </div>
            </div>
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
import VCardRating from "./VRating.vue";
import VCardPrice from "./VCardPrice.vue";

export default {
    name: "VCatalog",
    components: { VPreloader, VErrorMessage, VCardRating, VCardPrice },
    data() {
        return {
            multiplier: 1,
            isBtnDisabled: false,
        };
    },
    methods: {
        getMoreCards() {
            this.multiplier++;
            console.log(
                this.$store.getters.getProducts.length,
                this.$store.getNumberOfCards,
                this.multiplier
            );
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

.card-wrapper {
    padding: 0 20px 18px;
}

.card {
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
}
.card:hover {
    box-shadow: 4px 8px 16px 0 rgba(255, 102, 51, 0.2);
}
.card__img-wrap {
    position: relative;
    width: 100%;
    height: 160px;
}

.card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__like {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 4px;
    background-color: #f3f2f1;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.3s ease;
}
.card__like:hover {
    opacity: 1;
}

.card__badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 32px;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #ffffff;
    background-color: #ff6633;
}

.card__content-wrap {
    padding: 8px;
}

.card__title {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
}

.btn--card {
    width: 100%;
    padding: 8px;
    border: 1px solid #70c05b;
    border-radius: 4px;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #70c05b;
    background-color: transparent;
}
.btn--card:hover {
    border: 1px solid #ff6633;
}
.btn--card:disabled {
    border: 1px solid #bfbfbf;
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

@media (max-width: 680px) {
    .catalog {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 520px) {
    .card__price-wrap {
        align-items: end;
    }
    .card__price-num {
        font-size: 14px;
    }
    .card__price-num--default {
        font-size: 10px;
    }
    .card__price-text {
        font-size: 10px;
    }
    .card__title {
        font-size: 10px;
    }
}

@media (max-width: 351px) {
    .catalog {
        grid-template-columns: 1fr;
        gap: 32px 0;
    }
}
</style>
