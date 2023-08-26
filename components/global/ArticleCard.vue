<script setup lang="ts">
type ArticleProp = {
  readTime: number;
  title: string;
  author: string;
  category: string; // TODO: change to enum
  date: string;
  month: string;
};

const props = withDefaults(defineProps<{ item: ArticleProp }>(), {
  item: {
    readTime: 4,
    title: 'Racism in Ethiopia',
    author: 'Daneil Wondimu',
    category: 'News',
    date: '13',
    month: 'Jun 2023'
  }
});

const { title, date, month, author, readTime, category } = props.item;
</script>

<template>
  <div class="card-container">
    <img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      class="card-img"
    />
    <div class="card-content tw-rounded-b-lg">
      <div class="tw-flex tw-justify-between tw-items-center tw-py-3 tw-px-5">
        <h3
          class="tw-basis-[60%] tw-font-body tw-font-medium dark:tw-text-text-color tw-text-xl"
        >
          {{ title }}
        </h3>
        <div class="tw-basis-[30%] tw-flex tw-flex-col">
          <span
            class="tw-font-body tw-font-bold tw-text-slate-400 tw-text-3xl tw-text-center"
          >
            {{ date }}
          </span>
          <span class="tw-font-body tw-text-center"> {{ month }} </span>
        </div>
      </div>
      <!-- <v-divider></v-divider> -->
      <p class="tw-font-body tw-text-sm tw-text-gray-200 tw-py-3 tw-px-5">
        {{ author }} . {{ readTime }} min read . {{ category }}
      </p>
      <!-- <font-awesome-icon
                class="tw-w-5 tw-h-5 dark:hover:tw-text-primary tw-ml-4"
                :icon="['fas', 'arrow-right-long']"
              /> -->
    </div>
    <button class="card-fab">
      <font-awesome-icon
        class="card-icon tw-w-7 tw-h-7"
        :icon="['fas', 'arrow-right-long']"
      />
    </button>
  </div>
</template>

<style scoped>
.card-container {
  @apply tw-relative tw-w-[20rem] tw-h-[20rem] tw-rounded-lg tw-border-2 tw-border-slate-600 tw-transition-all tw-duration-1000;
}

.card-container:hover {
  @apply tw-border-transparent;
}

.card-container::after {
  content: '';
  /* background: linear-gradient(transparent, #00feb0, transparent); */
  background: linear-gradient(to right, transparent, #00feb0, transparent);
  height: 2px;
  width: 5rem;
  position: absolute;
  left: 50%;
  bottom: -2px;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 1s ease;
}

.card-container:hover::after {
  width: 100%;
  opacity: 1;
}

.card-container:hover .card-img {
  @apply tw-h-full tw-rounded-b-lg;
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
  @apply tw-w-full tw-h-64 tw-rounded-t-lg tw-object-cover tw-transition-all tw-duration-1000;
}

.card-content {
  @apply tw-w-full tw-h-32 tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-flex-col tw-justify-end  tw-bg-slate-900 tw-rounded-b-lg tw-transition-all tw-duration-1000;
}

.card-fab {
  @apply tw-absolute tw-top-1/2 tw--right-6 tw--translate-y-[80%] tw-flex tw-justify-center tw-items-center tw-rounded-full dark:tw-bg-secondary tw-border-2 tw-border-solid dark:tw-border-secondary tw--rotate-[30deg] tw-duration-1000 tw-transition-all tw-p-4;
}
</style>
