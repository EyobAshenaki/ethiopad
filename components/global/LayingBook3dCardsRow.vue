<script setup lang="ts">
const fictions = [
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
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023'
  }
];
</script>

<template>
  <section
    class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-self-center tw-gap-20"
  >
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl">
      Recent Fictions
    </h2>
    <div class="tw-w-max tw-flex tw-flex-wrap tw-gap-48">
      <laying-book-3d-card
        v-for="(fiction, idx) in fictions"
        :key="idx"
        :item="fiction"
        :idx="idx"
      />
    </div>

    <load-more-btn />
  </section>
</template>

<style scoped></style>
