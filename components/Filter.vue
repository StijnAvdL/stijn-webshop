<template>
  <div class="grid grid-cols-1">
    <div v-for="option in props.options" :key="option">
      <Checkbox :name="option.name" @on-change="onChange" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  onChange: {
    type: Function
  }
});

</script>