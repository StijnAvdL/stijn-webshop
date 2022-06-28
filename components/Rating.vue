<template>
  <div class="flex items-center">
    <div v-for="index in 5" :key="index">
      <svg class="w-5 h-5">
        <defs>
          <linearGradient :id="index + '' + value">
            <stop :offset="offset(index - 1)" stop-color="gold" />
            <stop offset="0%" stop-color="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          :fill="'url(#' + index + value + ')'"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  setup(props) {
    const { value } = props;
    const offset = (i) => value - i;

    return {
      value,
      offset
    };
  },
};
</script>
