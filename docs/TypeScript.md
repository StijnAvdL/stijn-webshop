# TypeScript
Ik heb research gedaan hoe Storyblok + Nuxt samen werken met TypeScript. Hier kwam het volgende uit. 

Je krijg vaak via Props een `blok` Object meegestuurd waarmee je de content vanuit Storyblok in Nuxt kan gebruiken. Maar hiervoor hebben we dus een Type nodig als we TypeScript gebruiken. Het blijkt dat deze nog niet bestaan en [meer mensen hierop wachten](https://github.com/storyblok/storyblok-nuxt/issues/93). 
```Javascript
<script lang="ts">
import { useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();

export default {
  props: {
    blok: {
      type: Object,
    },
  },
}
</script>
```

De oplossing hiervoor is zelf interface te maken. 

```TypeScript
export interface StoryblokFeature {
    name: String,
    image: {
        filename: string,
        alt: string
    }
}
```
en deze vervolgens er aan te koppelen

```Javascript
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { StoryblokFeature } from "../types";

export default defineComponent({
  props: {
    blok: {
      type: Object as PropType<StoryblokFeature>,
      required: true,
    },
  },
})
</script>
```

Bij het volgende voorbeeld krijg ik de warning op de regel waar `v-for=blok in blok.columns` staan. 

*Block-scoped variable 'blok' used before its declaration.*

Ik kan hiervoor geen oplossing vinden ...
```Javascript
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
```

Tevens creeer het veel meer boilerplate ... moeten we dit wel willen?

https://gitlab.hosted-tools.com/intracto/asap/-/blob/master/htdocs/frontend/src/storyBlok/types.ts

https://gitlab.hosted-tools.com/intracto/asap/-/blob/master/htdocs/frontend/src/storyBlok/components/Page.vue


https://github.com/storyblok/storyblok-vue/issues/12