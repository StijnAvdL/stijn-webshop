<template>
  <div
    v-editable="blok"
    class="flex"
    :class="{
      'reverse-row': blok.ImagePosition === 'left',
      'reverse-col': blok.ImagePosition === 'top',
      'flex-col': blok.ImagePosition === 'bottom'
    }"
  >
    <p class="p-2">{{ blok.text }}</p>
    <div><img :src="blok.image.filename" /></div>
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.reverse-row {
  flex-direction: row-reverse;
}
.reverse-col {
  flex-direction: column-reverse;
}

.flex-col {
    flex-direction: column;
}
</style>