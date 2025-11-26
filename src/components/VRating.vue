<template>
    <div class="rating">
        <div class="rating-item" v-for="(star, index) in 5" :key="index">
            <img
                :src="
                    require('../assets/images/icons/star' +
                        (Math.round(rating) >= index + 1
                            ? '-active-icon.svg'
                            : '-icon.svg'))
                "
                alt="Icon - Star"
                class="rating-img"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "VRating",
    props: ["rating"],
};
</script>

<style>
.rating {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
}

.rating-item {
    width: 16px;
    height: 16px;
}
.rating-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
