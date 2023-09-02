<script setup lang="ts">
import ethioianArt from 'assets/images/ethiopian_art.jpg';
import history from 'assets/images/history.jpg';
import literature from 'assets/images/literature.jpg';
import management from 'assets/images/management.jpg';
import moneyTalk from 'assets/images/money_talk.jpg';
import officeHours from 'assets/images/office_hours.jpg';
import productivity from 'assets/images/productivity.jpg';
import technology from 'assets/images/technology.jpg';

import { useImage } from '@vueuse/core';

definePageMeta({
  layout: 'default'
});

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
  },
  {
    readTime: 5,
    title: 'Rise of Ethiopian Music',
    author: 'Fikirte Assefa',
    category: 'Music',
    date: '11',
    month: 'Dec 2023',
    image: productivity,
    imgObj: useImage({ src: productivity })
  },
  {
    readTime: 8,
    title: 'Ethiopian Culture',
    author: 'Abebech Alemu',
    category: 'Culture',
    date: '19',
    month: 'Jan 2023',
    image: technology,
    imgObj: useImage({ src: technology })
  },
  {
    readTime: 12,
    title: 'Ethiopian Literature',
    author: 'Hirut Tadesse',
    category: 'Literature',
    date: '21',
    month: 'Mar 2023',
    image: literature,
    imgObj: useImage({ src: literature })
  },
  {
    readTime: 9,
    title: 'Ethiopian Art',
    author: 'Tewodros Alemu',
    category: 'Art',
    date: '01',
    month: 'Feb 2023',
    image: ethioianArt,
    imgObj: useImage({ src: ethioianArt })
  },
  {
    readTime: 5,
    title: 'Rise of Ethiopian Music',
    author: 'Fikirte Assefa',
    category: 'Music',
    date: '11',
    month: 'Dec 2023',
    image: productivity,
    imgObj: useImage({ src: productivity })
  },
  {
    readTime: 8,
    title: 'Ethiopian Culture',
    author: 'Abebech Alemu',
    category: 'Culture',
    date: '19',
    month: 'Jan 2023',
    image: technology,
    imgObj: useImage({ src: technology })
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
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023',
    image: officeHours,
    imgObj: useImage({ src: officeHours })
  }
];
</script>

<template>
  <main>
    <!-- Hero section -->
    <section class="tw-w-full tw-flex tw-flex-col tw-items-center">
      <div
        class="tw-max-w-screen-2xl tw-h-[35rem] tw-flex tw-items-center tw-gap-20"
      >
        <div
          class="tw-w-[80%] tw-flex tw-flex-col tw-justify-center tw-items-start"
        >
          <h1
            class="tw-font-heading tw-text-6xl tw-font-bold dark:tw-text-text-color tw-mb-10"
          >
            Discover Ethiopian Literary Treasures
          </h1>
          <p class="tw-font-body tw-text-xl dark:tw-text-text-color tw-mb-24">
            Explore a World of Writing and Imagination, Ethiopian Style
          </p>

          <div class="tw-flex tw-gap-10">
            <v-btn class="hero-btn-secondary"> Start Writing </v-btn>

            <v-btn class="hero-btn">
              <span>Explore</span>
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'arrow-right-long']"
              />
            </v-btn>
          </div>
        </div>
        <div
          class="tw-w-[60%] tw-relative tw-flex tw-justify-center tw-items-center"
        >
          <div class="triangle-lg"></div>
          <div class="triangle-sm"></div>
          <div class="blur-shadow -tw-mt-2"></div>
          <div class="img-border-1"></div>
          <div class="img-border-2"></div>
          <div class="img-border-3"></div>
          <div class="img-border-4"></div>
          <div class="img-border-5"></div>
          <div class="img-border-6"></div>
          <img
            class="hero-img"
            src="https://cdn.discordapp.com/attachments/1063523239718035607/1144635166682251314/b89815bb-bf85-4b49-ad9d-c323e6e10033.jpg"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Below the fold -->
    <section class="articles-container">
      <trending-articles-row />

      <!-- Maybe add a recommended section based on the read's previous reads and interests -->

      <articles-row class="tw-pt-20" />

      <section class="tw-max-w-screen-2xl tw-flex tw-flex-col">
        <topic-chips-row class="tw-max-w-screen-2xl tw-mb-8" />

        <h3 class="topic-sub-heading">Topic</h3>
        <h2 class="topic-heading">Sport</h2>

        <div class="tw-flex tw-flex-wrap tw-gap-12 tw-mb-10">
          <article-card
            v-for="(article, idx) in articles"
            :key="idx"
            :item="article"
          />
        </div>

        <load-more-btn class="tw-mt-5" />
      </section>
    </section>
  </main>
</template>

<style scoped>
.hero-btn-secondary {
  @apply tw-w-fit tw-flex tw-items-center tw-rounded-lg tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-primary dark:tw-bg-transparent tw-border-2 dark:tw-border-primary tw-transition-all tw-duration-300 tw-py-6 tw-px-5;
}

.hero-btn-secondary:hover {
  @apply dark:hover:tw-bg-secondary;
}

.hero-btn {
  @apply tw-w-fit tw-flex tw-items-center tw-rounded-lg tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-background dark:tw-bg-primary tw-border-2 tw-border-transparent tw-transition-all tw-duration-300 tw-py-6 tw-px-5;
}

.hero-btn:hover {
  @apply dark:hover:tw-text-primary dark:hover:tw-bg-transparent dark:hover:tw-border-primary;
}

.hero-btn:hover .icon {
  @apply tw-w-5 tw-ml-4;
}

.icon {
  @apply tw-w-0 tw-h-5 dark:tw-text-primary tw-transition-all tw-duration-500;
}

.triangle-lg {
  @apply tw-w-0 tw-h-0 tw-absolute -tw-top-14 -tw-left-20 tw-border-solid tw-rotate-[165deg] tw-border-t-[200px] tw-border-r-[320px] tw-border-l-[250px] tw-border-transparent dark:tw-border-t-accent-secondary/80 tw-z-10;
}

.triangle-sm {
  @apply tw-w-0 tw-h-0 tw-absolute -tw-bottom-8 tw-right-10 tw-border-solid -tw-rotate-[5deg] tw-border-b-[90px] tw-border-l-[190px] tw-border-transparent dark:tw-border-b-primary/70 tw-z-10;
}

.blur-shadow {
  @apply tw-w-80 tw-h-80 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-blur-[8rem] tw-rounded-full dark:tw-bg-primary;
}

.img-border-1 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-4deg);
}

.img-border-2 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-8deg);
}

.img-border-3 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-12deg);
}

.img-border-4 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-16deg);
}

.img-border-5 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-20deg);
}

.img-border-6 {
  @apply tw-w-[24rem] tw-h-[24rem] tw-absolute tw-rounded-3xl tw-border-2 tw-border-solid dark:tw-border-primary/80 tw-z-20;
  transform-style: preserve-3d;
  transform: rotateY(15deg) rotateZ(-24deg);
}

.hero-img {
  @apply tw-w-[22rem] tw-h-[22rem] tw-object-cover tw-rounded-sm tw-z-20;
}

.articles-container {
  @apply tw-flex tw-flex-col tw-items-center tw-gap-20 tw-bg-gradient-to-b dark:tw-from-background dark:tw-via-background dark:tw-to-slate-800 tw-pt-36 tw-pb-60;
}

.topic-sub-heading {
  @apply tw-font-heading tw-font-bold tw-capitalize tw-text-xl dark:tw-text-slate-300 tw-mb-4;
  letter-spacing: 2px;
}

.topic-heading {
  @apply tw-font-heading tw-font-bold tw-capitalize tw-text-5xl dark:tw-text-text-color tw-mb-12;
  letter-spacing: 2px;
}
</style>
