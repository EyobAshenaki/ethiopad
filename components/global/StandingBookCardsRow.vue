<script setup lang="ts">
import bookCover1 from 'assets/images/book_cover_1.jpg';
import bookCover2 from 'assets/images/book_cover_2.webp';
import bookCover3 from 'assets/images/book_cover_3.jpg';

import { useImage } from '@vueuse/core';

const props = defineProps<{ rowTitle: string }>();

const { rowTitle } = props;

const fictions = [
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023',
    cover: bookCover1,
    coverObj: useImage({ src: bookCover1 })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    cover: bookCover2,
    coverObj: useImage({ src: bookCover2 })
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023',
    cover: bookCover3,
    coverObj: useImage({ src: bookCover3 })
  }
  // {
  //   readTime: 10,
  //   title: 'Ethiopian Politics',
  //   author: 'Ibrahim Mohammed',
  //   category: 'Politics',
  //   date: '05',
  //   month: 'May 2023',
  //   cover: bookCover4,
  //   coverObj: useImage({ src: bookCover4 })
  // }
];
</script>

<template>
  <section
    class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-self-center tw-gap-24"
  >
    <h2 v-if="!!rowTitle" class="tw-font-heading tw-font-semibold tw-text-3xl">
      {{ rowTitle }}
    </h2>
    <div class="collection">
      <standing-book-card
        v-for="(fiction, idx) in fictions"
        :key="idx"
        :item="fiction"
        :idx="idx"
      />
    </div>

    <load-more-btn class="-tw-mt-5" />
  </section>
</template>

<style scoped>
.collection {
  @apply tw-w-max tw-flex tw-flex-wrap tw-gap-12 -tw-ml-24;
  /* transform-style: preserve-3d;
  perspective: 140rem; */
}
</style>
