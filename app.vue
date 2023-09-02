<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  valueDark: 'tw-dark',
  valueLight: 'tw-light'
});

// todo: add toggle button to header and implement the theme changes through out the website by storing the theme in global state
const toggleDark = useToggle(isDark);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
