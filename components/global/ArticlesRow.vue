<script setup lang="ts">
const articles = [
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023'
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023'
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023'
  }
];
</script>

<template>
  <section
    class="tw-max-w-screen-xl tw-flex tw-flex-col tw-self-center tw-gap-12 tw-pt-20 -tw-mb-16"
  >
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl">
      Recent Articles
    </h2>
    <div class="tw-flex tw-gap-16">
      <article-card
        v-for="(article, idx) in articles"
        :key="idx"
        :item="article"
      />
    </div>
  </section>
</template>

<style scoped></style>
