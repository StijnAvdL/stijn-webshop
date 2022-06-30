<template>
  <div>
    <Pagination :current-page="currentPage" :number-of-pages="numberOfPages" />
    <div
      v-if="products"
      class="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto container"
    >
      <div v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/ProductStore";
import { useRoute } from "vue-router";
import { watch, ref } from "vue";

const route = useRoute();
const numberOfPages = 10;
const productStore = useProductStore();
const currentPage = ref(parseInt(route.query.page) || 1);
const { products } = storeToRefs(productStore);

await productStore.fetchProductPage(currentPage);

watch([route], () => {
  currentPage.value = parseInt(route.query.page);
  productStore.fetchProductPage(route.query.page);
});
</script>


