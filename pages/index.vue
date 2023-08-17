<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import HeroSectionDivider from '/components/layout/HeroSectionDivider.vue';
import TrendingArticlesRow from '/components/home/TrendingArticlesRow.vue';
import TopicsCarouselRow from '/components/home/TopicsCarouselRow.client.vue';
import SectionDivider from '/components/layout/SectionDivider.vue';

const isDark = useDark({
  valueDark: 'tw-dark',
  valueLight: 'tw-light'
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <!-- Hero section -->
    <section
      class="tw-flex tw-flex-col tw-bg-gradient-to-b tw-from-background tw-to-slate-800"
    >
      <div
        class="tw-w-full tw-h-[30rem] tw-flex tw-flex-col tw-items-center tw-justify-center"
      >
        <h1
          class="tw-font-heading tw-text-[4.2rem] tw-font-bold dark:tw-text-text-color tw-mb-5"
        >
          Write your own Ethiopian narrative
        </h1>
        <p class="tw-font-body tw-text-2xl dark:tw-text-text-color tw-mb-20">
          Craft compelling stories and share your unique voice with the world.
        </p>

        <v-btn
          class="tw-w-fit tw-flex tw-items-center tw-rounded-full tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-background dark:tw-bg-primary dark:hover:tw-text-primary dark:hover:tw-bg-transparent tw-border-2 tw-border-transparent tw-transition-all tw-duration-300 dark:hover:tw-border-primary tw-py-7 tw-px-6"
        >
          <span>Explore</span>
          <font-awesome-icon
            class="tw-w-5 tw-h-5 dark:hover:tw-text-primary tw-ml-4"
            :icon="['fas', 'arrow-right-long']"
          />
        </v-btn>
      </div>

      <hero-section-divider class="dark:tw-fill-background" />
    </section>

    <!-- Below the fold -->
    <!-- Article section -->
    <section class="tw-flex tw-flex-col tw-items-center tw-gap-20 tw-mt-28">
      <trending-articles-row />

      <div
        class="tw-w-full tw-relative tw-flex tw-flex-col tw-bg-gradient-to-b tw-from-background tw-to-slate-800"
      >
        <topics-carousel-row />

        <articles-row />

        <section-divider class="tw-w-full dark:tw-fill-background" />
      </div>
    </section>

    <!-- Fiction section -->
    <section class="tw-flex tw-flex-col tw-items-center tw-gap-20 tw-mt-12 tw-mb-16">
      <laying-book-3d-cards-row />
    </section>
  </main>
</template>

<style scoped></style>
