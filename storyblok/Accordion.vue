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
        <MinusIcon v-if="visible" />
        <PlusIcon  v-if="!visible"/>
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
 
<script>
import { reactive, toRefs } from "vue";
import { useStoryblokApi } from "@storyblok/vue";
import MinusIcon from "@/assets/svg/minus.svg";
import PlusIcon from "@/assets/svg/plus.svg";

const storyblokApi = useStoryblokApi();

export default defineComponent({
  props: {
    blok: {
      type: Object,
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
  components: { MinusIcon, PlusIcon },
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