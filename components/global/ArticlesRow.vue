<script setup lang="ts">
const articles = [
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    catagory: 'Facts',
    date: '09',
    month: 'Aug 2023'
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    catagory: 'Politics',
    date: '05',
    month: 'May 2023'
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    catagory: 'Food',
    date: '17',
    month: 'May 2023'
  }
];
</script>

<template>
  <section class="tw-flex tw-flex-col tw-gap-12">
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
