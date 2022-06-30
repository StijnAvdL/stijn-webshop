<template>
  <div
    v-if="props.numberOfPages > 1"
    class="flex flex-row text-center justify-center"
  >
    <div
      class="
        border border-grey-400
        hover:border-grey-600
        rounded
        m-1
        h-8
        w-8
        pt-0.5
        cursor-pointer
      "
    >
      <LeftIcon />
    </div>
    <div class="grid grid-cols-7 gap-1">
      <div v-for="page in generateNumbers()" :key="page">
        <div v-if="page === props.currentPage">
          <div
            class="
              border border-blue-600
              bg-blue-200
              rounded
              m-1
              h-8
              w-8
              pt-0.5
              cursor-pointer
              font-bold
            "
          >
            {{ page }}
          </div>
        </div>
        <div v-else-if="isNaN(page)">
          <div class="m-1">{{ page }}</div>
        </div>
        <div v-else>
          <NuxtLink :to="'/?page=' + page">
            <div
              class="
                border border-grey-400
                hover:border-grey-600
                rounded
                m-1
                h-8
                w-8
                pt-0.5
                cursor-pointer
                text-blue-600
              "
            >
              {{ page }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="
        border border-grey-400
        hover:border-grey-600
        rounded
        m-1
        h-8
        w-8
        pt-0.5
        cursor-pointer
      "
    >
      <RightIcon />
    </div>
  </div>
</template>

<script setup>
import LeftIcon from "@/assets/svg/left.svg";
import RightIcon from "@/assets/svg/right.svg";

const props = defineProps({
  numberOfPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const generateNumbers = () => {
  var pageNumbers = null;
  // show all pages
  if (props.numberOfPages <= 7) pageNumbers = props.numberOfPages;
  // show first amount of pages
  else if (props.currentPage <= 3)
    pageNumbers = [1, 2, 3, 4, 5, "...", props.numberOfPages];
  // show last amount of pages
  else if (props.numberOfPages - props.currentPage < 3) {
    pageNumbers = [1, "..."];
    for (let i = 4; i >= 0; i--) pageNumbers.push(props.numberOfPages - i);
    // show pages arround
  } else {
    pageNumbers = [1, "..."];
    for (let i = props.currentPage - 1; i < props.currentPage + 2; i++)
      pageNumbers.push(i);
    pageNumbers.push("...", props.numberOfPages);
  }

  return pageNumbers;
};
</script>