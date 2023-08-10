<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import SectionDivider from '/components/layout/SectionDivider.vue';
import TrendingArticles from '/components/home/TrendingArticles.vue';

const isDark = useDark({
  valueDark: 'tw-dark',
  valueLight: 'tw-light'
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <section>
    <!-- Above the fold -->
    <div class="tw-bg-gradient-to-b tw-from-background tw-to-slate-800">
      <div
        class="tw-w-full tw-h-[30rem] tw-flex tw-justify-center tw-items-center"
      >
        <div class="tw-flex tw-flex-col tw-items-center">
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

          <!-- <button-dark>
            <span>Submit</span>
            <font-awesome-icon
              class="tw-w-4 tw-h-4 dark:hover:tw-text-primary tw-ml-4"
              :icon="['fas', 'arrow-right-long']"
            />
          </button-dark> -->
        </div>
      </div>

      <section-divider color-class="dark:tw-fill-background" />
    </div>

    <!-- Below the fold -->
    <div
      class="tw-max-w-screen-xl tw-flex tw-flex-col tw-flex-wrap tw-mx-auto tw-my-24"
    >
      <!-- Trending section -->
      <h3 class="tw-font-heading tw-font-semibold tw-text-3xl tw-mb-24">
        Trending Articles
      </h3>
      <trending-articles />
    </div>
  </section>
</template>

<style scoped></style>
