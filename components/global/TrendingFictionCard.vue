<script setup lang="ts">
type ItemProp = {
  rank: number;
  title: string;
  author: string;
};

const props = withDefaults(defineProps<{ active: boolean; item: ItemProp }>(), {
  active: false,
  item: {
    rank: 1,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki'
  }
});

const { active, item } = props;

const { rank, title, author } = item;
</script>

<template>
  <div class="trending-card" :class="{ 'active-trending-card': active }">
    <div class="trending-rank">{{ rank }}</div>
    <h3 class="trending-title">{{ title }}</h3>
    <p class="trending-author">
      by <span class="trending-author-name">{{ author }}</span>
    </p>
  </div>
</template>

<style scoped>
.trending-card {
  @apply tw-relative tw-min-w-[14rem] tw-h-[20rem] tw-flex tw-flex-col tw-justify-around tw-text-center dark:tw-bg-background tw-rounded-lg tw-border-2 dark:tw-border-slate-600 tw-transition-all tw-duration-200 tw-p-2;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.trending-card::before {
  content: '';
  @apply tw-w-full tw-h-full tw-absolute tw-rounded-lg tw-border-2 dark:tw-border-slate-600 tw-translate-x-1 -tw-translate-y-3 tw-transition-all tw-duration-200;
  transform: rotateY(180deg) translateX(-0.5rem) translateZ(3rem);
}

.trending-card:hover::before {
  @apply dark:tw-border-primary;
}

.trending-rank {
  @apply tw-absolute tw-top-1/4 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-[40%] tw-text-8xl tw-font-body tw-font-bold tw-opacity-10 tw-transition-all tw-duration-500 tw-px-5 tw-z-50;
}

@supports (-webkit-text-stroke: 1px #00feb0) {
  .trending-card:hover .trending-rank {
    @apply -tw-translate-y-[125%] dark:tw-bg-background tw-opacity-100;
    -webkit-text-stroke: 2px #00feb0;
    -webkit-text-fill-color: #0f172a;
  }
}

.trending-title {
  @apply tw-max-h-24 tw-font-heading tw-font-bold dark:tw-text-text-color tw-text-2xl tw-opacity-80 tw-overflow-hidden tw-transition-all tw-duration-500 tw-mt-10;
}

.trending-card:hover .trending-title {
  @apply dark:tw-text-primary;
}

.trending-author {
  @apply tw-font-heading tw-font-bold tw-text-base dark:tw-text-slate-400;
}

.trending-card:hover .trending-author-name {
  @apply dark:tw-text-primary;
}

/* tw-min-w-[17rem] tw-h-[24.3rem] */
/* tw-min-w-[18rem] tw-h-[25.7rem] */
/* tw-min-w-[19rem] tw-h-[27.1rem] */
.active-trending-card {
  @apply tw-min-w-[17rem] tw-h-[24.3rem] dark:tw-border-primary tw-gap-11 tw-p-3;
}

.active-trending-card::before {
  @apply dark:tw-border-primary;
}

@supports (-webkit-text-stroke: 1px #00feb0) {
  .active-trending-card .trending-rank {
    @apply -tw-translate-y-[125%] dark:tw-bg-background tw-opacity-100 tw-text-9xl;
    -webkit-text-stroke: 2px #00feb0;
    -webkit-text-fill-color: #0f172a;
  }
}

.active-trending-card .trending-title {
  @apply dark:tw-text-primary tw-text-3xl;
}

.active-trending-card .trending-author {
  @apply tw-text-lg;
}

.active-trending-card .trending-author-name {
  @apply dark:tw-text-primary;
}
</style>
