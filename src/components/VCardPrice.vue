<template>
    <div class="card__price-wrap">
        <div class="card__price-item">
            <div class="card__price-num">
                {{ (price - (price * discount) / 100).toFixed(2) }}
                ₽
            </div>
            <div class="card__price-text" v-if="showDiscount">С картой</div>
        </div>
        <div class="card__price-item" v-if="showDiscount">
            <div class="card__price-num--default">{{ price }} ₽</div>
            <div class="card__price-text">Обычная</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VCardPrice",
    props: ["price", "discount", "showDiscount"],
};
</script>

<style>
.card__price-wrap {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
}

.card__price-item {
    display: flex;
    flex-direction: column;
}

.card__price-num {
    font-weight: 700;
    font-size: 18px;
}

.card__price-num--default {
    color: #606060;
}

.card__price-text {
    color: #8f8f8f;
}
</style>
