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
      <div class="cover"></div>
      <span class="page" style="--i: 0.25"></span>
      <span class="page" style="--i: 0.5"></span>
      <span class="page" style="--i: 0.75"></span>
      <span class="page" style="--i: 1"></span>
      <span class="page" style="--i: 1.25"></span>
      <span class="page" style="--i: 1.5"></span>
      <span class="page" style="--i: 1.75"></span>
      <span class="page" style="--i: 2"></span>
      <span class="page" style="--i: 2.25"></span>
      <span class="page" style="--i: 2.5"></span>
      <span class="page" style="--i: 2.75"></span>
      <span class="page" style="--i: 3"></span>
      <span class="page" style="--i: 3.25"></span>
      <span class="page" style="--i: 3.5"></span>
      <span class="page" style="--i: 3.75"></span>
      <span class="page" style="--i: 4"></span>
      <span class="page" style="--i: 4.25"></span>
      <span class="page" style="--i: 4.5"></span>
      <span class="page" style="--i: 4.75"></span>
      <span class="page" style="--i: 5"></span>
    </div>
  </div>
</template>

<style scoped>
.b-container {
  @apply tw-flex;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.book {
  @apply tw-w-[13rem] tw-h-[18.57rem] tw-relative;
  transform-style: preserve-3d;
  transition: 0.8s ease-in-out;
  transform: rotateY(15deg) rotateX(60deg) rotateZ(-25deg);
}

.book:hover {
  transform: rotateY(45deg) rotateX(0deg) rotateZ(0deg);
}

.book:active {
  transform: rotateY(145deg) rotateX(20deg) rotateZ(-14deg);
}

.book::before {
  content: 'The Fate of Fausto';
  @apply tw-absolute tw-w-12 tw-h-full tw-flex tw-justify-start tw-items-center tw-font-mono tw-origin-left tw-bg-secondary tw-text-[20px] tw-leading-6 tw-p-4;
  writing-mode: tb-rl;
  transform: rotateY(90deg) rotateX(180deg) rotateZ(180deg);
}

.book::after {
  content: '';
  @apply tw-w-full tw-h-full tw-absolute tw-origin-center tw-bg-secondary;
  transform: rotateY(180deg) translateZ(0rem);
}

.book .cover {
  @apply tw-w-full tw-h-full tw-absolute tw-origin-center dark:tw-bg-green-400;
  background-image: url('/assets/images/book_cover_1.jpg');
  background-size: cover;
  transform: translateZ(3rem);
}

.book .page {
  @apply tw-w-[95%] tw-h-[95%] tw-absolute tw-top-1 tw-left-0 tw-origin-right dark:tw-bg-text-color tw-border tw-border-slate-800;
  transform: rotateZ(calc(0deg * var(--i)))
    translateZ(calc(-10px * var(--i) + 3rem)) translateY(calc(0.8px * var(--i)))
    translateX(calc(0px));
}
</style>
