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
  @apply tw-bg-slate-50 tw-text-slate-800 dark:tw-bg-slate-800 dark:tw-text-slate-50;
}
</style>
