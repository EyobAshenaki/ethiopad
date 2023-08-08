<template>
  <v-btn
    class="tw-w-fit tw-flex tw-items-center tw-rounded-full tw-font-heading tw-capitalize tw-font-bold tw-text-xl dark:tw-text-background dark:tw-bg-primary dark:hover:tw-text-primary dark:hover:tw-bg-transparent tw-border-2 tw-border-transparent tw-transition-all tw-duration-200 dark:hover:tw-border-primary tw-py-5 tw-px-5"
    depressed
    :ripple="false"
    :to="to"
    :disabled="disabled"
    :loading="loading"
    @click="$emit('click')"
  >
    <slot> Click Me </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonDark',
  props: {
    to: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
