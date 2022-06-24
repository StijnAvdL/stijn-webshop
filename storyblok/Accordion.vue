<template>
  <div v-editable="blok">
    <h2>
      <button
        type="button"
        @click="toggle"
        class="
          flex
          justify-between
          items-center
          p-5
          w-full
          font-medium
          text-left text-black text-lg
        "
        :aria-expanded="visible"
      >
        <span>{{ blok.headline }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="visible ? 'M20 12H4' : 'M12 4v16m8-8H4'"
          />
        </svg>
      </button>
    </h2>
    <Transition name="content">
      <div v-if="visible" class="pl-5 pr-5 pb-5">
        <div v-html="content"></div>
      </div>
    </Transition>
    <hr />
  </div>
</template>
 
<script lang="ts">
import { reactive, toRefs, PropType, defineComponent } from "vue";
import { useStoryblokApi } from "@storyblok/vue";
import { StoryblokAccordion } from "../types";

const storyblokApi = useStoryblokApi();

export default defineComponent({
  props: {
    blok: {
      type: Object as PropType<StoryblokAccordion>,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      visible: false,
      icon: "plus",
    });
    const content = storyblokApi.richTextResolver.render(props.blok.content);

    const toggle = () => {
      state.visible = !state.visible;
      state.icon = state.icon === "minus" ? "plus" : "minus";
    };

    return {
      content,
      toggle,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
.content-enter-active {
  transition: all 0.3s ease-in;
}

.content-leave-active {
  transition: all 0.3s ease-out;
}

.content-enter-from,
.content-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>