<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

html.tw-dark {
  color-scheme: dark;
}

body {
  @apply tw-bg-slate-50 tw-text-slate-800 dark:tw-bg-background dark:tw-text-text-color;
}
</style>
