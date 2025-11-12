<template>
    <div class="card">
        <div class="card__img-wrap">
            <img :src="card.thumbnail" :alt="card.title" class="card__img" />
            <div class="card__badge">-{{ card.discountPercentage }}%</div>
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
                :showDiscount="showDiscount"
            ></v-card-price>
            <div class="card__title-wrap">
                <h3 class="card__title">{{ card.title }}</h3>
            </div>
            <v-card-rating :rating="card.rating"></v-card-rating>
            <button class="btn btn--card" @click.stop="addToCart">
                В корзину
            </button>
        </div>
    </div>
</template>

<script>
import VCardPrice from "./VCardPrice.vue";
import VCardRating from "./VRating.vue";

export default {
    name: "VCard",
    props: ["card", "showDiscount"],
    components: { VCardRating, VCardPrice },
    methods: {
        addToCart() {
            console.log("add to cart");
        },
    },
};
</script>

<style>
.card-wrapper {
    padding: 0 20px 18px;
}

.card {
    width: 100%;
    height: 349px;
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
    object-fit: contain;
    object-position: center;
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
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 189px;
}

.card__title-wrap {
    flex-grow: 1;
}

.card__title {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    height: 40px;
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

@media (max-width: 768px) {
    .card {
        height: 346px;
    }
}

@media (max-width: 520px) {
    .card {
        height: auto;
    }
    .card__content-wrap {
        height: 177px;
    }
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
</style>
