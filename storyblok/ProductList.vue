<template>
  <div>
    <Pagination :current-page="currentPage" :number-of-pages="numberOfPages" />
    <Filter :options="categories" :onChange="filterCategories" />
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
import { useCategoryStore } from "../stores/CategoryStore";
import { useRoute, useRouter } from "vue-router";
import { watch, ref, reactive } from "vue";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const categoryStore = useCategoryStore();
const currentPage = ref(parseInt(route.query.page) || 1);
const filters = reactive([]);
const { products, numberOfPages } = storeToRefs(productStore);
const { categories } = storeToRefs(categoryStore);

await categoryStore.fetchCategories();
await productStore.fetchProductPage(currentPage);
await productStore.fetchNumberOfProducts(filters);

// change page
watch([route], () => changePage());

// change filter
watch([filters], () => {
  router.push({ path: "/", params: { page: 1 } });
  productStore.fetchNumberOfProducts(filters);
  changePage();
});

const filterCategories = (category) => {
  if (filters.includes(category)) {
    filters.splice(filters.indexOf(category), 1);
  } else {
    filters.push(category);
  }
};

const changePage = () => {
  currentPage.value = parseInt(route.query.page || 1);
  productStore.fetchProductPage(route.query.page, filters);
};
</script>


