<script setup lang="ts"></script>

<template>
  <div class="card-container">
    <img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      class="card-img"
    />
    <div class="card-content tw-rounded-b-lg">
      <div class="tw-flex tw-justify-between tw-items-center tw-p-5">
        <h3
          class="tw-basis-2/3 tw-font-body tw-font-bold dark:tw-text-text-color tw-text-2xl"
        >
          The Ethiopian Renaissance Dam
        </h3>
        <div class="tw-basis-1/4 tw-flex tw-flex-col">
          <span
            class="tw-font-body tw-font-extrabold tw-text-slate-400 tw-text-4xl tw-text-center"
          >
            09
          </span>
          <span class="tw-font-body tw-text-center"> June 2022 </span>
        </div>
      </div>
      <!-- <v-divider></v-divider> -->
      <p class="tw-font-body tw-text-base tw-text-gray-200 tw-p-5">
        Eyob . 3 min read . Sports
      </p>
      <!-- <font-awesome-icon
                class="tw-w-5 tw-h-5 dark:hover:tw-text-primary tw-ml-4"
                :icon="['fas', 'arrow-right-long']"
              /> -->
    </div>
    <button class="card-fab">
      <font-awesome-icon
        class="card-icon tw-w-8 tw-h-8"
        :icon="['fas', 'arrow-right']"
      />
    </button>
  </div>
</template>

<style scoped>
.card-container {
  @apply tw-relative tw-w-[26rem] tw-h-[26rem] tw-rounded-lg tw-border-2 tw-border-slate-600;
}

.card-container:hover {
  @apply tw-border-b-4 dark:tw-border-b-primary;
}

.card-container:hover .card-img {
  @apply tw-h-full;
}

.card-container:hover .card-content {
  @apply tw-h-full tw-bg-opacity-20;
}

.card-container:hover .card-fab {
  @apply tw--right-9 tw-bg-transparent dark:tw-border-primary tw-rotate-0;
}

.card-container:hover .card-icon {
  @apply dark:tw-text-primary;
}

.card-img {
  @apply tw-w-full tw-h-64 tw-rounded-t-lg tw-object-cover tw-transition-all tw-duration-[1200ms];
}

.card-content {
  @apply tw-h-40 tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-flex-col tw-justify-end  tw-bg-slate-900 tw-rounded-b-lg tw-transition-all tw-duration-700;
}

.card-fab {
  @apply tw-absolute tw-top-1/2 tw--right-6 tw--translate-y-[80%] tw-flex tw-justify-center tw-items-center tw-rounded-full dark:tw-bg-secondary tw-border-2 tw-border-solid dark:tw-border-secondary tw--rotate-[30deg] tw-duration-[1200ms] tw-transition-all tw-p-4;
}
</style>
