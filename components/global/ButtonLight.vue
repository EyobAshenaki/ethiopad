<template>
  <v-btn
    class="tw-flex tw-items-center tw-rounded-full tw-font-heading tw-capitalize tw-font-bold tw-text-lg dark:tw-text-primary dark:tw-bg-transparent dark:hover:tw-text-background dark:hover:tw-bg-primary tw-border-2 dark:tw-border-primary tw-transition-all tw-duration-200 dark:hover:tw-border-transparent"
    text
    :ripple="false"
    :to="to"
    :x-small="isXSmall"
  >
    <slot> Click Me </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonLight',
  props: {
    to: {
      type: String,
      default: ''
    },
    isXSmall: {
      type: Boolean,
      default: false
    }
  }
};
</script>
