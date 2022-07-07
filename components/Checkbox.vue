<template>
  <div class="form-check">
    <input
      class="
        form-check-input
        appearance-none
        h-4
        w-4
        border border-grey-600
        rounded-sm
        bg-white
        checked:bg-blue-600 checked:border-blue-600
        focus:outline-none
        transition
        duration-200
        mt-1
        align-top
        bg-no-repeat bg-center bg-contain
        float-left
        mr-2
        cursor-pointer
      "
      type="checkbox"
      value=""
      :id="props.name" 
      @change="$emit('onChange', props.name)"
    />
    <label class="form-check-label inline-block" :for="props.name">
      {{ props.name }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  onChange: {
    type: Function
  }
});
</script>