<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import SectionDivider from '/components/layout/SectionDivider.vue';
// import ButtonDark from '/components/global/ButtonDark.vue';

// useHead({
//   title: 'Ethiopad | Home'
// });

const isDark = useDark({
  valueDark: 'tw-dark'
  // valueLight: 'tw-light'
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <!-- 1c2c50 -->
  <!-- dark:tw-bg-[#0f252a] -->
  <section class="tw-bg-gradient-to-b tw-from-background tw-to-slate-800">
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
          class="tw-w-fit tw-flex tw-items-center tw-rounded-full tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-background dark:tw-bg-primary dark:hover:tw-text-primary dark:hover:tw-bg-transparent tw-border-2 tw-border-transparent tw-transition-all tw-duration-200 dark:hover:tw-border-primary tw-py-7 tw-px-6"
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
  </section>
</template>

<style scoped>
section.top {
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 39px),
    50% 100%,
    0 calc(100% - 39px)
  );
}
section.bottom {
  clip-path: polygon(0 0, 50% 39px, 100% 0, 100% 100%, 0 100%);
  margin-top: -33px;
}
</style>
