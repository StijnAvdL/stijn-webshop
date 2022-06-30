<template>
  <div class="flex sm:flex-row md:flex-col p-3">
    <img
      class="w-1/2 md:w-auto h-48 pb-3 object-cover pr-3 md:pr-0"
      :src="product.thumbnail"
      :alt="product.title"
    />
    <div>
      <span
        class="
          text-sm
          font-bold
          text-orange-600
          rounded-sm
          bg-orange-400
          px-1
          w-min
        "
        >{{ product.category }}</span
      >
      <p class="text-xl font-bold text-blue-600">{{ product.title }}</p>
      <div class="flex flex-row">
        <Rating :value="product.rating" />
        <span class="text-blue-600 pl-1">{{ product.reviews }} reviews</span>
      </div>

      <div class="md:flex flex-row">
        <div class="pb-1">
          <p>
            <span class="text-grey font-bold line-through pr-3">{{
              transformPrice(product.price)
            }}</span>
            <span class="font-bold">{{
              transformPrice(
                (product.price / 100) * (100 - product.discountPercentage)
              )
            }}</span>
          </p>
          <p class="text-sm">
            You save {{ product.discountPercentage }}% with discount!
          </p>
        </div>
        <button
          class="
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-bold
            rounded
            py-2
            px-4
            ml-auto
          "
        >
          BUY!
        </button>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    product: Object,
  },
  setup(props) {
    const { product } = props;

    const transformPrice = (price) => {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format(price);
    };

    return {
      product,
      transformPrice,
    };
  },
};
</script>