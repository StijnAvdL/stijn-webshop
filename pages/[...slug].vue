<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStoryblok } from "@storyblok/vue";

export default defineComponent({
  async setup() {
    const routePrams = useRoute().params;
    const slug: string = Array.isArray(routePrams.slug)
      ? routePrams.slug[0]
      : routePrams.slug;

    const story = await useStoryblok(slug ? slug : "home", {
      version: "draft",
    });
    return {
      story,
    };
  },
});
</script>
