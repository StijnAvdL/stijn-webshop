<template>
  <component :is="componentType" :to="props.to">
    <div :class="[classBasic, classActive]">
      <slot />
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    require: false,
  },
});

const classBasic = "border rounded m-1 h-8 w-8 pt-0.5 cursor-pointer";
const classActive = props.active
  ? "border-blue-600 bg-blue-200 font-bold"
  : "border-grey-400 hover:border-grey-600 text-blue-600";

const componentType = props.to ? resolveComponent("NuxtLink") : "div";
</script>