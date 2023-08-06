<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

useHead({
  title: 'Ethiopad | Home'
});

const isDark = useDark({
  valueDark: 'tw-dark'
  // valueLight: 'tw-light'
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <section class="dark:tw-bg-gray-800">
    <div
      class="tw-w-full tw-h-52 tw-flex tw-flex-col dark:tw-bg-green-600 tw-border-2"
    >
      <div class="tw-w-2/3">
        <h1>Join the community</h1>
        <p>Share your story</p>
        <v-btn
          class="tw-bg-purple-600 dark:tw-bg-green-800"
          @click="toggleDark()"
          >Dark</v-btn
        >
        <p>isDark: {{ isDark }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-family: 'Poiret One';
}
</style>
