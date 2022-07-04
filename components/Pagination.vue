<template>
  <div
    v-if="props.numberOfPages > 1"
    class="flex flex-row text-center justify-center"
  >
    <Button v-if="currentPage !== 1" :to="'/?page=' + (currentPage - 1)">
      <LeftIcon />
    </Button>
    <div v-else class="w-10"></div>
    <div class="grid grid-cols-7 gap-1">
      <div v-for="page in generateNumbers()" :key="page">
        <Button v-if="page === props.currentPage" :active="true">
          {{ page }}
        </Button>
        <div v-else-if="isNaN(page)" class="m-1">{{ page }}</div>
        <Button v-else :to="'/?page=' + page">
          {{ page }}
        </Button>
      </div>
    </div>
    <Button
      v-if="currentPage !== numberOfPages"
      :to="'/?page=' + (currentPage + 1)"
    >
      <RightIcon />
    </Button>
    <div v-else class="w-10"></div>
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