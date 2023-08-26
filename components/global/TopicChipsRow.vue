<script setup lang="ts">
const topics = [
  {
    name: 'Sport',
    icon: ['fas', 'basketball']
  },
  {
    name: 'Politics',
    icon: ['fas', 'landmark']
  },
  {
    name: 'Entertainment',
    icon: ['fas', 'film']
  },
  {
    name: 'Technology',
    icon: ['fas', 'microchip']
  }
];
</script>

<template>
  <div class="tw-flex tw-gap-3">
    <topic-chip v-for="topic in topics" :key="topic" :topic="topic" />
  </div>
</template>

<style scoped></style>
