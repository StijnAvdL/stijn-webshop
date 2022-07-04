<template>
  <header class="w-full h-24 bg-blue-600">
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-white text-3xl font-bold">Stijn's Webshop</h1>
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink :to="blok.link.cached_url" class="hover:text-orange-400 text-white">
              {{ blok.link.story.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/menu", {
  version: "draft",
  resolve_links: "url",
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header_menu;
</script>

<style scope>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-orange-600;
}
</style>