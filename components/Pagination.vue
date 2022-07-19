<template>
  <div
    v-if="props.numberOfPages > 1"
    class="flex flex-row text-center justify-center"
  >
    <PaginationButton v-if="currentPage !== 1" :to="'/?page=' + (currentPage - 1)">
      <LeftIcon />
    </PaginationButton>
    <div v-else class="w-10"></div>
    <div class="grid grid-flow-col auto-cols-[minmax(0,4fr)]">
      <div v-for="page in generateNumbers()" :key="page">
        <PaginationButton v-if="page === props.currentPage" :active="true">
          {{ page }}
        </PaginationButton>
        <div v-else-if="isNaN(page)" class="m-1">{{ page }}</div>
        <PaginationButton v-else :to="'/?page=' + page">
          {{ page }}
        </PaginationButton>
      </div>
    </div>
    <PaginationButton
      v-if="currentPage !== numberOfPages"
      :to="'/?page=' + (currentPage + 1)"
    >
      <RightIcon />
    </PaginationButton>
    <div v-else class="w-10"></div>
  </div>
</template>

<script setup>
import LeftIcon from "@/assets/svg/left.svg";
import RightIcon from "@/assets/svg/right.svg";
import { onBeforeRouteUpdate } from "vue-router";

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

onBeforeRouteUpdate(() => window.scrollTo({top: 0, behavior: 'smooth'}));

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