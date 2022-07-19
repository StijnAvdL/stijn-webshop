<template>
  <button :class="[btn, btnSize]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
  },
  secondary: {
    type: Boolean,
  },
});

const btn = props.secondary ? "btn-secondary" : "btn";
const btnSize = props.size ? `btn-${props.size}` : "btn-base";
</script>

<style>
.btn {
  @apply bg-orange-500 rounded-full text-white font-semibold;
}
.btn:hover {
  @apply bg-dark-blue-400;
}
.btn:active {
  @apply bg-dark-blue-600;
}
.btn:disabled {
  @apply bg-grey-300 text-black/40;
}
.btn-secondary {
  @apply rounded-full text-dark-blue-600 border-grey-600 border font-semibold;
}
.btn-secondary:hover {
  @apply border-dark-blue-600;
}
.btn-secondary:active {
  @apply border-dark-blue-600 bg-dark-blue-400/5;
}
.btn-secondary:disabled {
  @apply bg-grey-300 text-black/40 border-0;
}
.btn-lg {
  @apply text-lg px-[26px] py-[18px];
}
.btn-base {
  @apply text-base px-6 py-4;
}
.btn-md {
  @apply text-base px-5 py-3;
}
.btn-sm {
  @apply text-sm px-4 py-2.5;
}
.btn-xs {
  @apply text-xs px-3 py-2;
}
</style>