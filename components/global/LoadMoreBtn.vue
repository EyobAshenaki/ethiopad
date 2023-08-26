<script setup lang="ts"></script>

<template>
  <button-light
    class="load-more-btn tw-w-fit tw-self-center dark:tw-text-accent-secondary/90 dark:tw-border-accent-secondary/50 dark:hover:tw-text-text-color dark:hover:tw-bg-accent-secondary/70 tw-transition-all tw-duration-300"
  >
    <span class="tw-font-body tw-font-normal tw-text-base">Load more</span>
    <font-awesome-icon class="load-more-icon" :icon="['fas', 'arrow-right']" />
  </button-light>
</template>

<style scoped>
.load-more-btn:hover .load-more-icon,
.load-more-btn:hover span {
  @apply tw-text-text-color tw-bg-transparent;
}

.load-more-icon {
  @apply tw-w-4 tw-h-4 dark:tw-text-background dark:tw-bg-accent-secondary/80 tw-rounded-full tw-transition-all tw-duration-300 tw-p-1 tw-ml-2 -tw-mr-2.5;
}
</style>
