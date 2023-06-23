<script setup>
import { ref, computed } from 'vue'; // the ref function allows us to create a reactive variable that vue can track

let todoList = ref([]); // make it reactive with a starting value
</script>

<template>
  <NuxtPage />
</template>

<style scoped></style>
