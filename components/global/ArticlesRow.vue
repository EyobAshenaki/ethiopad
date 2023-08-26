<script setup lang="ts">
import officeHours from 'assets/images/office_hours.jpg';
import moneyTalk from 'assets/images/money_talk.jpg';
import management from 'assets/images/management.jpg';
import history from 'assets/images/history.jpg';

import { useImage } from '@vueuse/core';

const articles = [
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023',
    image: officeHours,
    imgObj: useImage({ src: officeHours })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    image: moneyTalk,
    imgObj: useImage({ src: moneyTalk })
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023',
    image: management,
    imgObj: useImage({ src: management })
  },
  {
    readTime: 3,
    title: 'Ethiopian History',
    author: 'Daneil Wondimu',
    category: 'History',
    date: '13',
    month: 'Jun 2023',
    image: history,
    imgObj: useImage({ src: history })
  }
];
</script>

<template>
  <section
    class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-self-center tw-gap-20"
  >
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl">
      Recent Articles
    </h2>
    <div class="tw-flex tw-flex-wrap tw-gap-12">
      <article-card
        v-for="(article, idx) in articles"
        :key="idx"
        :item="article"
      />
    </div>
    <load-more-btn class="-tw-mt-5" />
  </section>
</template>

<style scoped></style>
