<script setup lang="ts">
type GenreProp = {
  name: string;
  icon: string[];
};

const props = withDefaults(defineProps<{ genre: GenreProp }>(), {
  genre: {
    name: 'Sport',
    icon: ['fas', 'basketball']
  }
});

const { genre } = props;

const { name, icon } = genre;
</script>

<template>
  <div
    class="tw-w-fit tw-flex tw-justify-around tw-items-center tw-gap-2 dark:tw-text-primary tw-rounded-lg tw-border-2 dark:tw-border-primary hover:dark:tw-bg-secondary active:dark:tw-bg-primary active:dark:tw-border-transparent active:dark:tw-text-background tw-px-4 tw-py-1.5"
  >
    <span class="tw-font-body tw-text-lg">{{ name }}</span>
  </div>
</template>

<style scoped></style>
