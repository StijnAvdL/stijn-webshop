<template>
  <div
    v-editable="blok"
    class="container mx-auto grid grid-cols-3 gap-12 place-items-center py-16"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
      default: {},
    },
  },
});
</script>