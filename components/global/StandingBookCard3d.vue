<script setup lang="ts">
type FictionProp = {
  readTime: number;
  title: string;
  author: string;
  category: string; // TODO: change to enum
  date: string;
  month: string;
};

const props = withDefaults(defineProps<{ item: FictionProp; idx: number }>(), {
  item: {
    readTime: 4,
    title: 'Racism in Ethiopia',
    author: 'Daneil Wondimu',
    category: 'News',
    date: '13',
    month: 'Jun 2023'
  },
  idx: 0
});
</script>

<template>
  <div class="b-container">
    <div class="book">
      <!-- :style="`background-image: url(\'/assets/images/book_cover_${props.idx}.jpg\');`" -->
      <div
        class="cover"
      ></div>
      <span class="page" style="--i: 1"></span>
      <span class="page" style="--i: 2"></span>
      <span class="page" style="--i: 3"></span>
      <span class="page" style="--i: 4"></span>
      <span class="page" style="--i: 5"></span>
    </div>
  </div>
</template>

<style scoped>
.b-container {
  @apply tw-w-[13rem] tw-h-[19rem] tw-flex tw-justify-center tw-items-center tw-gap-16;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.b-container .book {
  @apply tw-w-full tw-h-full tw-relative;
  transform-style: preserve-3d;
  transition: 0.8s ease-in-out;
  transform: rotateY(50deg) rotateX(-14deg) rotateZ(-20deg);
}

.b-container .book:hover {
  /* @apply ; */
  /* transform: rotateY(145deg) rotateX(20deg) rotateZ(-14deg); */
  transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg);
}

.b-container .book:active {
  transform: rotateY(145deg) rotateX(20deg) rotateZ(-14deg);
}

.b-container .book::before {
  content: 'The Fate of Fausto';
  @apply tw-absolute tw-w-12 tw-h-full tw-flex tw-justify-center tw-items-center tw-font-mono tw-origin-left tw-bg-secondary tw-text-2xl;
  writing-mode: tb-rl;
  transform: rotateY(90deg) rotateX(180deg) translateX(-3rem);
}

.b-container .book::after {
  content: '';
  @apply tw-w-full tw-h-full tw-absolute tw-origin-center tw-bg-secondary;
  transform: rotateY(180deg) translateZ(0rem);
}

.b-container .book .cover {
  @apply tw-w-full tw-h-full tw-absolute tw-origin-center dark:tw-bg-green-400;
  background-image: url('/assets/images/book_cover_1.jpg');
  background-size: cover;
  transform: translateZ(3rem);
}

.b-container .book .page {
  @apply tw-w-[90%] tw-h-[90%] tw-absolute tw-top-0 tw-left-0 tw-origin-right dark:tw-bg-text-color;
  transform: rotateZ(calc(0deg * var(--i)))
    translateZ(calc(-10px * var(--i) + 3rem)) translateY(calc(0.8px * var(--i)))
    translateX(calc(0px));
}
</style>
