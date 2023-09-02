<script setup lang="ts">
const genres = [
  {
    name: 'Drama'
  },
  {
    name: 'Triller'
  },
  {
    name: 'Romance'
  },
  {
    name: 'Comedy'
  }
];
</script>

<template>
  <div class="tw-flex tw-gap-4">
    <genre-chip v-for="(genre, idx) in genres" :key="idx" :genre="genre" />
  </div>
</template>

<style scoped></style>
