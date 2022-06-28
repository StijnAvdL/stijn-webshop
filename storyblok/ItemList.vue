<template>
  <div v-if="products" class="grid grid-cols-1 md:grid-cols-2 md:gap-2">
    <div v-for="product in products" :key="product.id">
      <div class="flex sm:flex-row md:flex-col p-6">
        <img
          class="w-1/2 md:w-auto pb-3 pr-3"
          :src="product.thumbnail"
          :alt="product.title"
        />
        <div>
          <p class="text-xl font-bold">{{ product.title }}</p>
          <p>{{ product.rating }} {{product.reviews }} Review</p>

          <p>{{ transformPrice(product.price) }}</p>
        </div>
      </div>
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

    const transformPrice = (price: number) => {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format(price);
    };

    return {
      products,
      transformPrice,
    };
  },
};
</script>