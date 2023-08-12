<script setup lang="ts">
type TopicProp = {
  name: string;
  icon: string[];
};

const props = withDefaults(defineProps<{ topic: TopicProp }>(), {
  topic: {
    name: 'Sport',
    icon: ['fas', 'basketball']
  }
});

const { topic } = props;

const { name, icon } = topic;
</script>

<template>
  <div
    class="tw-w-fit tw-flex tw-justify-around tw-items-center tw-gap-2 dark:tw-text-primary tw-rounded-full tw-border-2 dark:tw-border-primary hover:dark:tw-bg-secondary hover:dark:tw-text-text-color active:dark:tw-bg-primary active:dark:tw-border-transparent active:dark:tw-text-secondary tw-px-2.5 tw-py-1"
  >
    <font-awesome-icon class="tw-w-4 tw-h-4" :icon="icon"> </font-awesome-icon>
    <span class="tw-font-body">{{ name }}</span>
  </div>
</template>

<style scoped></style>
