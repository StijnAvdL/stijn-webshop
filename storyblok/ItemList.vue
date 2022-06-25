<template>
  <div v-if="products">
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/ProductStore";

export default {
  async setup() {
    const prodcutStore = useProductStore();

    await prodcutStore.fetchProductPage(1);

    const { products } = storeToRefs(prodcutStore);

    return {
      products,
    };
  },
};
</script>