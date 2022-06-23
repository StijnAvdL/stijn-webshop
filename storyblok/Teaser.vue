<template>
  <div
    v-editable="blok"
    class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>
 
<script lang="ts">
export default {
  props: {
    blok: {
      type: Object,
      default: {} // TODO geen mooie oplossing!
    },
  },
}
</script>