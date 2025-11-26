<template>
    <div class="products-slider">
        <h2 class="products-slider__title">
            {{ productInfo.title }}
        </h2>
        <ul class="products-slider__info">
            <li class="products-slider__info-item">
                арт. {{ productInfo.sku }}
            </li>
            <li class="products-slider__info-item">
                <v-rating :rating="Number(productInfo.rating)"></v-rating>
                <a href="#reviews" class="products-slider__info-link">
                    {{ productInfo.reviews ? productInfo.reviews.length : 0 }}
                    отзыва</a
                >
            </li>
            <li class="products-slider__info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
                        fill="#414141"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
                        fill="#414141"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
                        fill="#414141"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
                        fill="#414141"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
                        fill="#414141"
                    />
                </svg>
                <share-network
                    network="telegram"
                    :url="'https://example.com/' + productInfo.id"
                    v-slot="{ share }"
                >
                    <a
                        @click="share"
                        href="#"
                        class="products-slider__info-link"
                    >
                        Поделиться</a
                    >
                </share-network>
            </li>
            <li class="products-slider__info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25641 12.7046 4.25647 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z"
                        fill="#414141"
                    />
                </svg>
                <a href="#" class="products-slider__info-link">В избраное</a>
            </li>
        </ul>

        <div class="products-slider__wrapper">
            <div class="products-slider__pagination">
                <Swiper
                    :slides-per-view="5"
                    :space-between="20"
                    :direction="'vertical'"
                    ref="'galleryThumbs'"
                    :modules="modules"
                    :controller="{ control: swiperMain }"
                    :slideToClickedSlide="true"
                    @swiper="setSwiperPagination"
                    @click="handlePaginationClick"
                >
                    <SwiperSlide
                        v-for="(imageSrc, index) in productInfo.images"
                        :key="index"
                    >
                        <div class="products-slider__pagination-item">
                            <img
                                :src="imageSrc"
                                :alt="imageSrc.title"
                                class="products-slider__pagination-img"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="slider-product-item">
                <Swiper
                    :slides-per-view="1"
                    :space-between="20"
                    :modules="modules"
                    :controller="{ control: swiperPagination }"
                    @swiper="setSwiperMain"
                    ref="galleryTop"
                >
                    <SwiperSlide
                        v-for="(slide, idx) in productInfo.images"
                        :key="idx"
                    >
                        <div class="products-slider__item">
                            <div class="products-slider__img-wrappper">
                                <img
                                    :src="slide"
                                    :alt="productInfo.title"
                                    class="products-slider__img"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="products-slider__text-info">
                <div class="products-slider__price-wrap">
                    <div class="products-slider__price-item">
                        <div class="products-slider__price-num--default">
                            {{ productInfo.price }} ₽
                        </div>
                        <div class="products-slider__price-text">
                            Обычная цена
                        </div>
                    </div>

                    <div class="products-slider__price-item">
                        <div class="products-slider__price-num">
                            {{
                                (
                                    productInfo.price -
                                    (productInfo.price *
                                        productInfo.discountPercentage) /
                                        100
                                ).toFixed(2)
                            }}
                            ₽
                        </div>
                        <div class="products-slider__price-text">
                            С картой Северяночки
                            <button class="btn-info">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                                        fill="#8F8F8F"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12C11.5 11.7239 11.7239 11.5 12 11.5Z"
                                        fill="#8F8F8F"
                                    />
                                    <path
                                        d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                                        fill="#8F8F8F"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="btn btn--slider">В корзину</button>
                <div class="products-bonus">
                    <div class="products-bonus__bonus-text">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.1883 6.66663H0.811961C0.343143 6.66663 -0.0396916 7.05825 0.0033005 7.52052C0.494639 13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52052C24.0379 7.05825 23.6571 6.66663 23.1883 6.66663Z"
                                fill="#70C05B"
                            />
                        </svg>

                        Вы получаете 10 бонусов
                    </div>
                    <button class="products-bonus__btn">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.2778 3.38418C13.2821 2.21812 10.8173 2.19956 8.80431 3.33543C8.56381 3.47114 8.25884 3.38619 8.12313 3.14569C7.98743 2.90519 8.07238 2.60022 8.31288 2.46452C10.6356 1.1539 13.4796 1.17531 15.7823 2.52076C18.085 3.86621 19.5 6.33327 19.4986 9.00023L18.9986 8.99997H19.4986V9.00023V13C19.4986 13.2761 19.2747 13.5 18.9986 13.5C18.7225 13.5 18.4986 13.2761 18.4986 13V8.99997L18.4986 8.99972C18.4998 6.68836 17.2734 4.55023 15.2778 3.38418ZM6.00937 5.33569C6.25474 5.46237 6.35096 5.76397 6.22429 6.00934C5.74707 6.93369 5.49869 7.95908 5.5 8.99934L5.5 8.99997L5.5 14C5.5 14.9793 5.09777 15.8647 4.44949 16.5H17C17.2761 16.5 17.5 16.7238 17.5 17C17.5 17.2761 17.2761 17.5 17 17.5H2C1.72386 17.5 1.5 17.2761 1.5 17C1.5 16.7238 1.72386 16.5 2 16.5C3.38071 16.5 4.5 15.3807 4.5 14V9.00022M10.0191 20.5675C10.258 20.4289 10.5639 20.5102 10.7025 20.7491C10.9708 21.2117 11.4652 21.4964 12 21.4964C12.5348 21.4964 13.0292 21.2117 13.2975 20.7491C13.4361 20.5102 13.742 20.4289 13.9809 20.5675C14.2197 20.706 14.3011 21.012 14.1625 21.2509C13.7153 22.0219 12.8913 22.4964 12 22.4964C11.1087 22.4964 10.2847 22.0219 9.8375 21.2509C9.69894 21.012 9.78025 20.706 10.0191 20.5675Z"
                                fill="#414141"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L23.3536 22.6464C23.5488 22.8417 23.5488 23.1583 23.3536 23.3536C23.1583 23.5488 22.8417 23.5488 22.6464 23.3536L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                                fill="#414141"
                            />
                        </svg>

                        Уведомить о снижении цены
                    </button>
                </div>

                <table class="products-table">
                    <tbody>
                        <tr>
                            <td class="products-table__key">Бренд</td>
                            <td class="products-table__value">
                                {{ productInfo.brand }}
                            </td>
                        </tr>
                        <tr>
                            <td class="products-table__key">
                                Страна производителя
                            </td>
                            <td class="products-table__value">Россия</td>
                        </tr>
                        <tr>
                            <td class="products-table__key">Упаковка</td>
                            <td class="products-table__value">
                                {{ productInfo.weight }} кг
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import VRating from "@/components/VRating.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Controller } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
    name: "VProductSlider",
    components: {
        VRating,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiperMain = ref(null);
        const swiperPagination = ref(null);
        const modules = [Controller];

        const setSwiperMain = (swiper) => {
            swiperMain.value = swiper;
        };
        const setSwiperPagination = (swiper) => {
            swiperPagination.value = swiper;
        };
        return {
            modules,
            Controller,
            swiperMain,
            swiperPagination,
            setSwiperMain,
            setSwiperPagination,
        };
    },
    mounted() {},
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handlePaginationClick(data) {
            this.swiperMain.slideTo(data.clickedIndex);
        },
    },
    computed: {
        productInfo() {
            const product = this.$store.getters.getProductItem;
            return product;
        },
    },
};
</script>

<style>
.slider-product-item {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.slider-product-item .swiper {
    height: 100%;
}

.products-slider__wrapper {
    display: grid;
    grid-template-columns: 64px auto 424px;
    gap: 48px;
    height: 506px;
    overflow: hidden;
    padding: 10px;
}

.products-slider {
    position: relative;
    padding-bottom: 48px;
}

.products-slider__title {
    margin-bottom: 16px;
    font-size: 24px;
}

.products-slider__info {
    display: flex;
    margin-bottom: 27px;
    gap: 8px 24px;
    flex-wrap: wrap;
}
.products-slider__info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}
.products-slider__info-item .rating {
    margin-bottom: 0;
}
.products-slider__info-link {
    font-size: 12px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: #414141;
}
.products-slider__info-link:hover {
    border-bottom: 1px solid #8f8f8f;
}
.products-slider__pagination {
    width: 100%;
    height: 496px;
    background-color: #fff;
}
.products-slider__pagination .swiper {
    height: 100%;
}
.products-slider__pagination-item {
    background-color: #fff;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.products-slider__pagination .swiper-slide {
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
}
.products-slider__pagination-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.products-slider__item {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 53px;
}
.products-slider__img-wrappper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.products-slider__img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
}
.products-slider__text-info {
    display: flex;
    flex-direction: column;
    max-width: 424px;
    margin-left: 16px;
}
.products-slider__price-wrap {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 20px;
}
.products-slider__price-num--default {
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 400;
}
.products-slider__price-text {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #8f8f8f;
}
.products-slider__price-num {
    margin-bottom: 4px;
    font-size: 36px;
    font-weight: 700;
}
.btn-info {
    width: 24px;
    height: 24px;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}
.btn-info svg {
    width: 100%;
    height: 100%;
    fill: #8f8f8f;
}
.btn--slider {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
}
.btn--slider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    display: block;
    width: 32px;
    height: 32px;
    background-image: url(../assets/images/icons/shopping-cart-icon.svg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.btn--slider:disabled {
    background-color: #bfbfbf;
    color: rgba(255, 255, 255, 0.6);
}
.btn--slider:disabled::before {
    background-image: url(../assets/images/icons/shopping-cart-disabled-icon.svg);
}
.products-bonus__bonus-text {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    color: #70c05b;
}
.products-bonus__btn {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    font-weight: 500;
    font-size: 12px;
    border: none;
    outline: none;
    background-color: transparent;
}
.products-table {
    width: 100%;
    font-size: 12px;
}
.products-table td {
    padding: 4px 8px;
}
.products-table td.products-table__value {
    font-weight: 700;
    padding-left: 56px;
}
.products-table tr:nth-of-type(odd) {
    background-color: #f3f2f1;
}

/* -----------------------@MEDIA--------------------- */
@media (max-width: 1023px) {
    .products-slider__wrapper {
        grid-template-columns: 64px auto 344px;
        height: auto;
        gap: 16px;
    }
    .products-slider__img-wrappper {
        height: 248px;
    }
    .products-slider__pagination {
        height: 248px;
    }
    .products-slider__text-info {
        max-width: 344px;
    }
    .products-slider__price-num--default {
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: bold;
    }
    .products-slider__price-num {
        margin-bottom: 4px;
        font-size: 24px;
    }
}
@media (max-width: 760px) {
    .products-slider__wrapper {
        grid-template-columns: 72px 1fr;
        height: auto;
        gap: 16px;
    }
    .products-slider__text-info {
        grid-column: 1 / -1;
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }
}
@media (max-width: 971px) {
    .buying-slider .swiper {
        padding-bottom: 64px;
    }
    .slider .swiper {
        padding-bottom: 74px;
    }
    .swiper-button-next,
    .swiper-button-prev {
        display: flex !important;
        width: 40px;
        height: 40px;
        margin: 0 !important;
        top: auto !important;
        bottom: 0 !important;
        border: 1px solid #70c05b;
        border-radius: 4px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 7px;
    }
    .slider .swiper-button-prev {
        left: 20px !important;
        background-image: url(../assets/images/icons/arrow-next-icon.svg);
        transform: rotate(180deg);
    }
    .slider .swiper-button-next {
        right: 20px !important;
        background-image: url(../assets/images/icons/arrow-next-icon.svg);
    }
    .swiper-navigation-icon {
        display: none;
    }
    .swiper-button-next.swiper-button-disabled {
        opacity: 1 !important;
        background-image: url(../assets/images/icons/arrow-prev-disabled-icon.svg);
        transform: rotate(180deg);
    }
    .swiper-button-prev.swiper-button-disabled {
        opacity: 1 !important;
        background-image: url(../assets/images/icons/arrow-prev-disabled-icon.svg);
        transform: rotate(0deg);
    }
    .products-slider__pagination {
        left: 0;
    }
    .products-slider__pagination-item {
        height: 36px;
        background-size: cover;
        background-position: center;
    }
    .products-slider__text-info {
        padding-right: 3px;
    }
    .products-slider__info {
        margin-bottom: 16px;
        gap: 8px 16px;
    }
    .products-slider__title {
        font-size: 20px;
    }
    .products-slider__price-num--default {
        font-size: 18px;
        font-weight: 500;
    }
    .products-slider__price-num {
        font-size: 24px;
    }
}

@media (max-width: 760px) {
    .products-slider__item {
        flex-direction: column;
    }
    .products-slider__img-wrappper {
        width: 100%;
    }
    .products-slider__text-info {
        width: 100%;
        max-width: 100%;
    }
}
@media (max-width: 680px) {
    .buying-slider .swiper {
        padding-bottom: 56px;
    }
    .products-slider__text-info {
        padding-right: 0;
    }
    .products-slider__price-wrap {
        align-items: baseline;
    }
    .products-slider__price-num--default {
        margin-bottom: 5px;
    }
}

@media (max-width: 482px) {
    .products-slider__img-wrappper {
        height: 248px;
    }
}

@media (max-width: 319px) {
    .products-slider__price-wrap {
        flex-direction: column;
    }
}
</style>
