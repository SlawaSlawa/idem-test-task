<template>
    <div class="container">
        <div class="breadcrumbs">
            <ul class="breadcrumbs__list">
                <li class="breadcrumbs__item">
                    <a href="#" class="breadcrumbs__link">Главная</a>
                </li>
                <li class="breadcrumbs__item">
                    <a
                        href="#"
                        class="breadcrumbs__link breadcrumbs__link--active"
                        >Поиск</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script></script>

<style>
.breadcrumbs {
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 12px;
    font-weight: 500;
}

.breadcrumbs__list {
    display: flex;
    align-items: center;
    gap: 56px;
}

.breadcrumbs__item {
    position: relative;
}
.breadcrumbs__item::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -3px;
    right: calc(-24px - 16px);
    background-image: url(../assets/images/icons/breadcrumbs-arrow-icon.svg);
    background-position: center center;
    background-size: 7px 13px;
    background-repeat: no-repeat;
}
.breadcrumbs__item:last-child::after {
    display: none;
}

.breadcrumbs__link {
    text-decoration: none;
    color: #414141;
}
.breadcrumbs__link--active {
    color: #8f8f8f;
}

/* ----------------@MEDIA------------ */
@media (max-width: 768px) {
    .breadcrumbs__list {
        gap: 40px;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .breadcrumbs__item::after {
        right: calc(-24px - 9px);
    }
}

@media (max-width: 360px) {
    .breadcrumbs {
        font-size: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .breadcrumbs__list {
        gap: 24px;
    }
    .breadcrumbs__item::after {
        top: -5px;
        right: -24px;
    }
}
</style>
