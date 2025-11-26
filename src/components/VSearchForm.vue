<template>
    <section class="section section--search">
        <h2 class="section-min-title">Поиск</h2>
        <form class="search-form">
            <div class="search-form__input-wrapper">
                <input
                    type="text"
                    class="search-form__input"
                    placeholder="Найти товар"
                    name="search-input"
                    v-model="searchText"
                    @input="searchProducts"
                    @focus="isFocus = true"
                    :class="{ 'search-form__input--active': isFocus }"
                />
                <ul
                    class="search-form__input-result"
                    v-if="resultArray.length > 0"
                >
                    <li
                        class="search-form__input-result-item"
                        v-for="item in searchResultText"
                        :key="item.id"
                        @click="gotoPageById(item.id)"
                        v-html="item.text"
                    ></li>
                </ul>
                <div class="search-form__input-result" v-else>
                    По запросу ничего не найдено
                </div>
            </div>
        </form>
    </section>
</template>
<script>
export default {
    name: "SearchForm",
    data() {
        return {
            searchText: "",
            resultArray: [],
            isFocus: false,
            searchResultText: [],
        };
    },
    methods: {
        searchProducts() {
            this.resultArray = this.$store.getters.getProducts.filter(
                (item) => {
                    if (
                        item.title
                            .toLowerCase()
                            .indexOf(this.searchText.toLowerCase()) >= 0
                    ) {
                        return true;
                    }
                }
            );
            this.searchResultText = this.resultArray.map((item) => {
                const regExp = new RegExp(this.searchText, "g");
                let resItem = "";

                resItem = item.title.replace(
                    regExp,
                    '<span class="search-form__input-result-target">' +
                        this.searchText +
                        "</span>"
                );
                return { id: item.id, text: resItem };
            });
            if (this.searchText === "") this.resultArray = [];
        },
        gotoPageById(id) {
            console.log(id);
            this.searchText = "";
            this.isFocus = false;
            this.resultArray = [];
            this.$router.push("/products/" + id);
        },
    },
};
</script>
<style>
.section--search {
    padding-top: 0;
    padding-bottom: 24px;
}
.search-form__input {
    position: relative;
    width: 100%;
    border: 1px solid #70c05b;
    outline: none;
    border-radius: 4px;
    padding: 8px 16px;
    z-index: 30;
}
.search-form__input:focus {
    border-bottom-color: #fff;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.search-form__input--active + .search-form__input-result {
    display: block;
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

.search-form__input-result {
    display: none;
    position: absolute;
    top: 34px;
    left: 0;
    width: 100%;
    max-height: 144px;
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #70c05b;
    border-top-color: #ffffff;
    border-radius: 0 0 4px 4px;
    font-size: 16px;
    line-height: 1.5;
    color: #414141;
    z-index: 20;
    box-shadow: 4px 8px 16px 0px rgba(112, 192, 91, 0.2);
    overflow-y: auto;
    cursor: pointer;
}
.search-form__input-result-item:hover {
    opacity: 1;
    transition: opacity 0.3s ease;
}
.search-form__input-result-item:hover {
    opacity: 0.7;
}
.search-form__input-result-target {
    color: #70c05b;
}

/* --------------@MEDIA----------------- */

@media (max-width: 360px) {
    .section--search {
        padding-bottom: 16px;
    }
}
</style>
