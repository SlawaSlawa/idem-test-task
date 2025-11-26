<template>
    <section class="section section--reviews" id="reviews">
        <h2 class="section-title">Отзывы</h2>
        <div class="reviews">
            <div class="reviews__wrapper">
                <div class="reviews__rating">
                    <div class="reviews__rating-head">
                        <v-rating :rating="productInfo.rating"></v-rating>
                        <span class="reviews__rating-head-text">
                            <span>{{ productInfo.rating }}</span> из 5</span
                        >
                    </div>
                    <ul class="reviews__rating-list">
                        <li
                            class="reviews__rating-item"
                            v-for="(item, index) in reviewsRatingTable"
                            :key="index"
                        >
                            <span class="reviews__rating-item-num">{{
                                (reviewsRatingTableIndex =
                                    reviewsRatingTable.length - index)
                            }}</span>
                            <v-rating :rating="item"></v-rating>
                            <span class="reviews__rating-item-res">{{
                                item
                            }}</span>
                        </li>
                    </ul>
                </div>
                <div class="wrapper">
                    <ul class="reviews__list">
                        <li
                            class="reviews__item"
                            v-for="(review, index) in reviewsArr"
                            :key="index"
                        >
                            <div class="reviews__item-header">
                                <div class="reviews__item-avatar">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.33301 12.6666C2.33301 11.0098 3.67615 9.66663 5.33301 9.66663H10.6663C12.3232 9.66663 13.6663 11.0098 13.6663 12.6666V14C13.6663 14.1841 13.5171 14.3333 13.333 14.3333C13.1489 14.3333 12.9997 14.1841 12.9997 14V12.6666C12.9997 11.378 11.955 10.3333 10.6663 10.3333H5.33301C4.04434 10.3333 2.99967 11.378 2.99967 12.6666V14C2.99967 14.1841 2.85044 14.3333 2.66634 14.3333C2.48225 14.3333 2.33301 14.1841 2.33301 14V12.6666Z"
                                            fill="#414141"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5 4.66663C5 3.00977 6.34315 1.66663 8 1.66663C9.65685 1.66663 11 3.00977 11 4.66663C11 6.32348 9.65685 7.66663 8 7.66663C6.34315 7.66663 5 6.32348 5 4.66663ZM8 2.33329C6.71134 2.33329 5.66667 3.37796 5.66667 4.66663C5.66667 5.95529 6.71134 6.99996 8 6.99996C9.28866 6.99996 10.3333 5.95529 10.3333 4.66663C10.3333 3.37796 9.28866 2.33329 8 2.33329Z"
                                            fill="#414141"
                                        />
                                    </svg>
                                </div>
                                <div class="reviews__item-name">
                                    {{ review.reviewrName }}
                                </div>
                            </div>
                            <div class="reviews__item-rating">
                                <v-rating :rating="review.rating"></v-rating>
                                <span class="reviews__item-date">{{
                                    convertDate(review.date)
                                }}</span>
                            </div>
                            <p class="reviews__item-text">
                                {{ review.comment }}
                            </p>
                        </li>
                    </ul>
                    <form class="reviews-form">
                        <div class="reviews-form__header">
                            <h3 class="reviews-form__title">Ваша оценка</h3>
                            <div class="reviews-form__rating">
                                <button
                                    type="button"
                                    class="reviews-form__rating-item"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1033 1.81699C11.4701 1.07374 12.5299 1.07374 12.8967 1.81699L15.294 6.67446C15.4397 6.9696 15.7213 7.17417 16.047 7.2215L21.4075 8.00043C22.2277 8.11961 22.5552 9.12759 21.9617 9.70612L18.0828 13.4871C17.8471 13.7169 17.7396 14.0479 17.7952 14.3723L18.7109 19.7111C18.851 20.528 17.9936 21.151 17.26 20.7653L12.4653 18.2446C12.174 18.0915 11.826 18.0915 11.5347 18.2446L6.74005 20.7653C6.00642 21.151 5.14899 20.528 5.2891 19.7111L6.20479 14.3723C6.26043 14.0479 6.15288 13.7169 5.91719 13.4871L2.03827 9.70612C1.44476 9.12759 1.77226 8.11961 2.59249 8.00043L7.95302 7.2215C8.27873 7.17417 8.5603 6.9696 8.70596 6.67446L11.1033 1.81699Z"
                                            fill="#currentColor"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="reviews-form__rating-item"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1033 1.81699C11.4701 1.07374 12.5299 1.07374 12.8967 1.81699L15.294 6.67446C15.4397 6.9696 15.7213 7.17417 16.047 7.2215L21.4075 8.00043C22.2277 8.11961 22.5552 9.12759 21.9617 9.70612L18.0828 13.4871C17.8471 13.7169 17.7396 14.0479 17.7952 14.3723L18.7109 19.7111C18.851 20.528 17.9936 21.151 17.26 20.7653L12.4653 18.2446C12.174 18.0915 11.826 18.0915 11.5347 18.2446L6.74005 20.7653C6.00642 21.151 5.14899 20.528 5.2891 19.7111L6.20479 14.3723C6.26043 14.0479 6.15288 13.7169 5.91719 13.4871L2.03827 9.70612C1.44476 9.12759 1.77226 8.11961 2.59249 8.00043L7.95302 7.2215C8.27873 7.17417 8.5603 6.9696 8.70596 6.67446L11.1033 1.81699Z"
                                            fill="#currentColor"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="reviews-form__rating-item"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1033 1.81699C11.4701 1.07374 12.5299 1.07374 12.8967 1.81699L15.294 6.67446C15.4397 6.9696 15.7213 7.17417 16.047 7.2215L21.4075 8.00043C22.2277 8.11961 22.5552 9.12759 21.9617 9.70612L18.0828 13.4871C17.8471 13.7169 17.7396 14.0479 17.7952 14.3723L18.7109 19.7111C18.851 20.528 17.9936 21.151 17.26 20.7653L12.4653 18.2446C12.174 18.0915 11.826 18.0915 11.5347 18.2446L6.74005 20.7653C6.00642 21.151 5.14899 20.528 5.2891 19.7111L6.20479 14.3723C6.26043 14.0479 6.15288 13.7169 5.91719 13.4871L2.03827 9.70612C1.44476 9.12759 1.77226 8.11961 2.59249 8.00043L7.95302 7.2215C8.27873 7.17417 8.5603 6.9696 8.70596 6.67446L11.1033 1.81699Z"
                                            fill="#currentColor"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="reviews-form__rating-item"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1033 1.81699C11.4701 1.07374 12.5299 1.07374 12.8967 1.81699L15.294 6.67446C15.4397 6.9696 15.7213 7.17417 16.047 7.2215L21.4075 8.00043C22.2277 8.11961 22.5552 9.12759 21.9617 9.70612L18.0828 13.4871C17.8471 13.7169 17.7396 14.0479 17.7952 14.3723L18.7109 19.7111C18.851 20.528 17.9936 21.151 17.26 20.7653L12.4653 18.2446C12.174 18.0915 11.826 18.0915 11.5347 18.2446L6.74005 20.7653C6.00642 21.151 5.14899 20.528 5.2891 19.7111L6.20479 14.3723C6.26043 14.0479 6.15288 13.7169 5.91719 13.4871L2.03827 9.70612C1.44476 9.12759 1.77226 8.11961 2.59249 8.00043L7.95302 7.2215C8.27873 7.17417 8.5603 6.9696 8.70596 6.67446L11.1033 1.81699Z"
                                            fill="#currentColor"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="reviews-form__rating-item"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1033 1.81699C11.4701 1.07374 12.5299 1.07374 12.8967 1.81699L15.294 6.67446C15.4397 6.9696 15.7213 7.17417 16.047 7.2215L21.4075 8.00043C22.2277 8.11961 22.5552 9.12759 21.9617 9.70612L18.0828 13.4871C17.8471 13.7169 17.7396 14.0479 17.7952 14.3723L18.7109 19.7111C18.851 20.528 17.9936 21.151 17.26 20.7653L12.4653 18.2446C12.174 18.0915 11.826 18.0915 11.5347 18.2446L6.74005 20.7653C6.00642 21.151 5.14899 20.528 5.2891 19.7111L6.20479 14.3723C6.26043 14.0479 6.15288 13.7169 5.91719 13.4871L2.03827 9.70612C1.44476 9.12759 1.77226 8.11961 2.59249 8.00043L7.95302 7.2215C8.27873 7.17417 8.5603 6.9696 8.70596 6.67446L11.1033 1.81699Z"
                                            fill="#currentColor"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <textarea
                            name="review"
                            class="reviews-form__textarea"
                            placeholder="Отзыв"
                        ></textarea>
                        <button class="btn btn--reviews">
                            Отправить отзыв
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VRating from "./VRating.vue";

export default {
    name: "VReview",
    components: {
        VRating,
    },
    // mounted() {
    //     this.$store.dispatch("reviews");
    //     console.log(this.$store.getters.getReviewsArr);
    // },
    data() {
        return {
            reviewsRatingTableIndex: 5,
        };
    },
    computed: {
        productInfo() {
            this.$store.dispatch("productItem", this.$route.params.id);
            const product = this.$store.getters.getProductItem;
            return product;
        },
        reviewsArr() {
            // this.$store.dispatch("reviews");
            return this.$store.getters.getReviewsArr;
        },
        reviewsRatingTable() {
            const resultTable = [0, 0, 0, 0, 0];
            this.reviewsArr.forEach((item) => {
                if (item.rating === 5) resultTable[4]++;
                if (item.rating === 4) resultTable[3]++;
                if (item.rating === 3) resultTable[2]++;
                if (item.rating === 2) resultTable[1]++;
                if (item.rating === 1) resultTable[0]++;
            });
            return resultTable.slice().reverse();
        },
        convertDate() {
            return (date) => {
                date = new Date(date);
                let day = date.getDate();
                day = day < 10 ? "0" + day : day;
                let month = date.getMonth() + 1;
                month = month < 10 ? "0" + month : month;
                let year = date.getFullYear();
                return day + "." + month + "." + year;
            };
        },
    },
};
</script>

<style>
.reviews__wrapper {
    display: flex;
    gap: 144px;
}

.reviews__rating-list {
    width: 169px;
}
.reviews__rating-head {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}
.reviews__rating-head .rating {
    margin-bottom: 0;
}
.reviews__rating-head-text {
    font-size: 18px;
    font-weight: 700;
}
.reviews__rating-item {
    display: flex;
    gap: 16px;
    align-items: center;
    width: 168px;
}
.reviews__rating-item .rating {
    margin-bottom: 0;
}
.reviews__rating-item-num {
    width: 20px;
}
.reviews__rating-item-res {
    width: 20px;
    text-align: right;
}
.reviews__list {
    width: 688px;
}
.reviews__item {
    margin-bottom: 40px;
}
.reviews__item-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}
.reviews__item-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: cover;
    width: 36px;
    height: 36px;
    border: 1px solid #f3f2f1;
    border-radius: 50%;
}
.reviews__item-name {
    font-weight: 500;
}
.reviews__item-rating {
    display: flex;
    gap: 16px;
    font-size: 12px;
}
.reviews__item-date {
    color: #8f8f8f;
}
.reviews-form__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}
.reviews-form__title {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
}
.reviews-form__rating-item {
    border: none;
    background-color: transparent;
}
.reviews-form__rating-item svg {
    fill: #8f8f8f;
    transition: fill 0.3s ease;
}
.reviews-form__rating-item:hover svg {
    fill: #ff6633;
}
.reviews-form__textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 16px;
    padding: 8px 16px;
    border: 1px solid #bfbfbf;
    outline: 1px solid transparent;
    border-radius: 4px;
    color: #414141;
}
.reviews-form__textarea:focus {
    border-color: #70c05b;
    outline: 1px solid #70c05b;
}
.btn--reviews {
    display: block;
    width: 188px;
    padding: 8px;
    text-align: center;
    background-color: #fcd5ba;
    color: #ff6633;
    font-size: 16px;
}

/* -------------------@MEDIA------------------ */
@media (max-width: 1070px) {
    .reviews__list {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .reviews__wrapper {
        flex-direction: column;
        gap: 16px;
    }
    .reviews__item {
        margin-bottom: 32px;
    }
}

@media (max-width: 679px) {
    .reviews__wrapper {
        gap: 32px;
    }
    .reviews-form__header {
        margin-bottom: 8px;
    }
    .reviews__item {
        margin-bottom: 16px;
    }
    .reviews__item-text {
        font-size: 14px;
    }
    .reviews-form__textarea {
        margin-bottom: 16px;
    }
    .products-slider__info {
        font-size: 10px;
    }
}
</style>
