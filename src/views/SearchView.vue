<template>
    <v-search-form></v-search-form>
    <v-catalog></v-catalog>
</template>

<script>
import VSearchForm from "../components/VSearchForm.vue";
import VCatalog from "../components/VCatalog.vue";
export default {
    components: { VSearchForm, VCatalog },
};
</script>
