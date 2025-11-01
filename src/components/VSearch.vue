<template>
    <section class="section section--search">
        <h2 class="section-min-title">Поиск</h2>
        <form class="search-form">
            <div class="search-form__input-wrapper">
                <input
                    type="text"
                    class="search-form__input"
                    placeholder="Найти товар"
                />
            </div>
        </form>
    </section>
</template>
<script></script>
<style>
.section--search {
    padding-top: 0;
    padding-bottom: 24px;
}
.search-form__input {
    width: 100%;
    border: 1px solid #70c05b;
    outline: 1px solid #70c05b;
    border-radius: 4px;
    padding: 8px;
}
.search-form__input:active {
    border: 1px solid #70c05b;
}

.search-form__input-wrapper {
    position: relative;
    transition: box-shadow 0.3s ease;
}
.search-form__input-wrapper:hover {
    box-shadow: 4px 8px 16px 0 rgba(112, 192, 91, 0.2);
}
.search-form__input-wrapper::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(../assets/images/icons/search-icon.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: 10;
}

/* --------------@MEDIA----------------- */

@media (max-width: 360px) {
    .section--search {
        padding-bottom: 16px;
    }
}
</style>
