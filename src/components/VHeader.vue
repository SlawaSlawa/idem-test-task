<template>
    <header class="header">
        <div class="container container--header">
            <div class="header__wrapper">
                <RouterLink to="/" class="logo" @click="resetIsLoadedFlags">
                    <img
                        class="logo__img"
                        alt="Logo - Магазин"
                        src="../assets/images/logo.png"
                    />
                </RouterLink>
                <button class="btn btn--catalog">
                    <svg
                        class="btn__image-catalog"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 18C2.5 17.7239 2.72386 17.5 3 17.5H21C21.2761 17.5 21.5 17.7239 21.5 18C21.5 18.2761 21.2761 18.5 21 18.5H3C2.72386 18.5 2.5 18.2761 2.5 18Z"
                            fill="white"
                        />
                    </svg>

                    Каталог
                </button>
            </div>
            <div class="header__wrapper header__wrapper--nav">
                <div class="btn btn--catalog btn--catalog-second">
                    <svg
                        class="btn__image-catalog"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 18C2.5 17.7239 2.72386 17.5 3 17.5H21C21.2761 17.5 21.5 17.7239 21.5 18C21.5 18.2761 21.2761 18.5 21 18.5H3C2.72386 18.5 2.5 18.2761 2.5 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    Каталог
                </div>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
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
                                    d="M11.6577 1.75827C12.783 0.632497 14.3095 0 15.9013 0C17.493 0 19.0195 0.632466 20.1448 1.75819C21.2705 2.88347 21.9031 4.41012 21.9031 6.00183C21.9031 7.59357 21.2706 9.12009 20.1448 10.2454C20.1448 10.2454 20.1449 10.2454 20.1448 10.2454L11.3048 19.0854C11.1096 19.2806 10.793 19.2806 10.5977 19.0854L1.75774 10.2454C-0.585912 7.90173 -0.585912 4.10192 1.75774 1.75827C4.10139 -0.585378 7.90119 -0.585378 10.2448 1.75827L10.9513 2.46472L11.6577 1.75827C11.6578 1.75824 11.6577 1.7583 11.6577 1.75827ZM15.9013 1C14.5748 1 13.3027 1.52711 12.3649 2.4653L11.3048 3.52538C11.2111 3.61915 11.0839 3.67183 10.9513 3.67183C10.8187 3.67183 10.6915 3.61915 10.5977 3.52538L9.53774 2.46538C7.58461 0.512254 4.41797 0.512254 2.46484 2.46538C0.511719 4.4185 0.511719 7.58515 2.46484 9.53827L10.9513 18.0247L19.4377 9.53827C20.3759 8.60052 20.9031 7.32831 20.9031 6.00183C20.9031 4.67534 20.376 3.40321 19.4378 2.46546C18.5001 1.52727 17.2278 1 15.9013 1Z"
                                    fill="#414141"
                                />
                            </svg>

                            <div class="header__item-text">Избранное</div>
                        </li>
                        <li class="header__item">
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
                                    d="M11.3325 1.89776C11.3324 1.89785 11.3327 1.89767 11.3325 1.89776L3.33366 5.89721L3.33255 5.89776C2.82288 6.15102 2.50045 6.67089 2.50005 7.24V16.7635C2.49608 17.3334 2.81541 17.8563 3.32416 18.113C3.32387 18.1129 3.32445 18.1132 3.32416 18.113L11.3237 22.1128C11.7462 22.3242 12.2438 22.3243 12.6663 22.1129L20.6664 18.1128L20.6675 18.1122C21.1773 17.8589 21.4997 17.3389 21.5 16.7697V7.24026C21.4997 6.67105 21.1773 6.15106 20.6675 5.89776L20.6664 5.89721L12.6675 1.89776C12.6674 1.89767 12.6677 1.89786 12.6675 1.89776C12.2474 1.6892 11.7527 1.68919 11.3325 1.89776ZM10.8875 1.00223C11.5883 0.654 12.4118 0.654 13.1125 1.00223L13.1137 1.00278L21.1125 5.00223C21.1124 5.00215 21.1127 5.00231 21.1125 5.00223C21.9618 5.42448 22.4995 6.29123 22.5 7.23973V16.77C22.4995 17.7184 21.9624 18.5852 21.1132 19.0074C21.113 19.0075 21.1134 19.0073 21.1132 19.0074L13.1138 23.0071C13.1138 23.0072 13.1138 23.0071 13.1138 23.0071C12.4097 23.3594 11.5806 23.3595 10.8764 23.0072C10.8764 23.0072 10.8765 23.0072 10.8764 23.0072L2.87644 19.0072L2.87506 19.0065C2.02685 18.5791 1.49413 17.708 1.50005 16.7584V7.24C1.50055 6.29154 2.03772 5.4248 2.88695 5.00253C2.88675 5.00263 2.88715 5.00243 2.88695 5.00253L10.8864 1.00278L10.8875 1.00223Z"
                                    fill="#414141"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.87272 5.9364C1.99621 5.68941 2.29655 5.5893 2.54354 5.71279L11.9999 10.441L21.4563 5.71279C21.7033 5.5893 22.0037 5.68941 22.1271 5.9364C22.2506 6.18339 22.1505 6.48373 21.9035 6.60722L12.2235 11.4472C12.0828 11.5176 11.9171 11.5176 11.7763 11.4472L2.09633 6.60722C1.84934 6.48373 1.74923 6.18339 1.87272 5.9364Z"
                                    fill="#414141"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V22.76C12.5 23.0361 12.2761 23.26 12 23.26C11.7239 23.26 11.5 23.0361 11.5 22.76V11C11.5 10.7239 11.7239 10.5 12 10.5Z"
                                    fill="#414141"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.5529 3.2764C6.67639 3.02941 6.97673 2.92929 7.22372 3.05279L17.2237 8.05279C17.4707 8.17628 17.5708 8.47662 17.4473 8.72361C17.3238 8.9706 17.0235 9.07071 16.7765 8.94722L6.7765 3.94722C6.52951 3.82372 6.4294 3.52339 6.5529 3.2764Z"
                                    fill="#414141"
                                />
                            </svg>

                            <div class="header__item-text">Заказы</div>
                        </li>
                        <li class="header__item header__item--cart">
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
                                    d="M5.5 21C5.5 19.6193 6.61929 18.5 8 18.5C9.38071 18.5 10.5 19.6193 10.5 21C10.5 22.3807 9.38071 23.5 8 23.5C6.61929 23.5 5.5 22.3807 5.5 21ZM8 19.5C7.17157 19.5 6.5 20.1716 6.5 21C6.5 21.8284 7.17157 22.5 8 22.5C8.82843 22.5 9.5 21.8284 9.5 21C9.5 20.1716 8.82843 19.5 8 19.5Z"
                                    fill="#414141"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.5 21C17.5 19.6193 18.6193 18.5 20 18.5C21.3807 18.5 22.5 19.6193 22.5 21C22.5 22.3807 21.3807 23.5 20 23.5C18.6193 23.5 17.5 22.3807 17.5 21ZM20 19.5C19.1716 19.5 18.5 20.1716 18.5 21C18.5 21.8284 19.1716 22.5 20 22.5C20.8284 22.5 21.5 21.8284 21.5 21C21.5 20.1716 20.8284 19.5 20 19.5Z"
                                    fill="#414141"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5H4.58051C5.33783 5.79147 6.10333 10.0643 6.74931 14.3709C6.93288 15.5947 7.98416 16.5 9.22165 16.5H19.3597C20.5514 16.5 21.5774 15.6588 21.8111 14.4903L23.2503 7.29417C23.436 6.36599 22.726 5.5 21.7795 5.5H7.16046C6.8575 5.5 6.57797 5.58901 6.34436 5.74093L5.49239 0.913107C5.45023 0.674179 5.24262 0.5 5 0.5H1ZM6.666 7.07417C6.62065 6.77187 6.85478 6.5 7.16046 6.5H21.7795C22.095 6.5 22.3316 6.78866 22.2698 7.09806L20.8305 14.2942C20.6903 14.9953 20.0747 15.5 19.3597 15.5H9.22165C8.47916 15.5 7.84839 14.9568 7.73825 14.2225L6.666 7.07417Z"
                                    fill="#414141"
                                />
                            </svg>

                            <div class="header__item-text">Корзина</div>
                            <div
                                class="cart-badge"
                                v-if="getQuantityInCart !== 0"
                            >
                                {{ getQuantityInCart }}
                            </div>
                        </li>
                    </ul>
                </nav>
                <div class="header__user">
                    <div class="header__user-img-wrap">
                        <img
                            class="header__user-img"
                            src="../assets/images/user-avatar.png"
                            alt="User - Photo"
                        />
                    </div>
                    <div class="header__user-text">Алексей</div>
                    <button class="btn-more">
                        <svg
                            width="13"
                            height="7"
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L6.5 5.79289L12.1464 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447C13.0488 0.341709 13.0488 0.658291 12.8536 0.853553L6.85355 6.85355C6.65829 7.04882 6.34171 7.04882 6.14645 6.85355L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z"
                                fill="#414141"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        resetIsLoadedFlags() {
            this.$store.commit("toggleIsLoadedError", false);
        },
    },
    computed: {
        getQuantityInCart() {
            return this.$store.getters.getQuantityInCart;
        },
    },
};
</script>

<style>
.header {
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
}
.container--header {
    display: flex;
    justify-content: space-between;
}
.header__wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
}

.header__wrapper--nav {
    background-color: #fff;
    gap: 24px;
}

.logo {
    display: block;
    width: 85px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}
.logo:hover {
    opacity: 0.8;
}

.logo__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.btn--catalog {
    width: auto;
    padding: 8px 12px;
    gap: 8px;
    font-size: 16px;
    background-color: #70c05b;
}
.btn--catalog:hover {
    background-color: #ff6633;
}

.btn--catalog-second {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 42px;
    height: 42px;
    margin-right: auto;
    padding: 0;
    border: none;
    background-color: #fff;
    color: #ff6633;
}
.btn--catalog-second:hover {
    background-color: #fff;
    color: #ff6633;
}
.btn--catalog-second svg {
    width: 24px;
    height: 24px;
    fill: #f63;
}

.btn__image-catalog {
    width: 24px;
    height: 24px;
}

.header__nav {
    font-size: 12px;
    text-align: center;
    color: #414141;
}

.header__list {
    display: flex;
    align-items: center;
    gap: 24px;
}

.header__item {
    cursor: pointer;
}

.header__user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header__user-img-wrap {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.header__user-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.header__item--cart {
    position: relative;
}

.cart-badge {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -3px;
    right: 14px;
    min-width: 11px;
    height: 11px;
    padding: 2px 3px;
    border-radius: 4px;
    font-size: 7px;
    line-height: 0;
    color: #ffffff;
    background-color: #ff6633;
}

@media (max-width: 768px) {
    .header__wrapper {
        gap: 20px;
    }
    .header__wrapper--nav {
        gap: 16px;
    }
    .btn-more {
        display: none;
    }
    .header__user-text {
        display: none;
    }
}
@media (max-width: 560px) {
    .header__wrapper {
        width: 100%;
        justify-content: space-between;
    }
    .header__wrapper--nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        padding: 8px 16px;
    }
    .btn--catalog-second {
        display: flex;
        font-size: 10px;
    }
}
</style>
