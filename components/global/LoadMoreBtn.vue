<script setup lang="ts"></script>

<template>
  <v-btn class="load-more-btn">
    <span class="tw-font-body tw-font-normal tw-text-base">Load more</span>
    <font-awesome-icon class="load-more-icon" :icon="['fas', 'arrow-right']" />
  </v-btn>
</template>

<style scoped>
.load-more-btn {
  @apply tw-w-fit tw-flex tw-items-center tw-self-center tw-rounded-full tw-font-heading tw-capitalize tw-font-bold tw-text-lg dark:tw-text-accent-secondary/90 dark:tw-bg-transparent tw-border-2 dark:tw-border-accent-secondary/50 dark:hover:tw-text-text-color dark:hover:tw-bg-accent-secondary/70 dark:hover:tw-border-transparent tw-transition-colors tw-duration-300;
}

.load-more-btn:hover .load-more-icon {
  @apply dark:tw-text-accent-secondary dark:tw-bg-text-color;
}

.load-more-btn:hover span {
  @apply tw-text-text-color dark:tw-bg-transparent;
}

.load-more-icon {
  @apply tw-w-4 tw-h-4 dark:tw-text-background dark:tw-bg-accent-secondary/80 tw-rounded-full tw-transition-colors tw-duration-300 tw-p-1 tw-ml-2 -tw-mr-2.5;
}
</style>
