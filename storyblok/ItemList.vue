<template>
  <div v-if="products" class="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto container">
    <div v-for="product in products" :key="product.id">
      <Item :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/ProductStore";
import Item from "./Item.vue";

export default {
  async setup() {
    const prodcutStore = useProductStore();

    await prodcutStore.fetchProductPage(1);

    const { products } = storeToRefs(prodcutStore);

    return {
      products,
    };
  },
  components: { Item },
};
</script>