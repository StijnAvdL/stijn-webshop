<template>
  <div
    v-editable="blok"
    class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>
 
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { StoryblokTeaser } from "../types";

export default defineComponent({
  props: {
    blok: {
      type: Object as PropType<StoryblokTeaser>,
      required: true,
    },
  },
})
</script>