<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script>

<template>
  <main>
    <!-- Hero section -->
    <section class="tw-w-full tw-flex tw-flex-col tw-items-center">
      <div
        class="tw-max-w-screen-2xl tw-h-[35rem] tw-flex tw-items-center tw-gap-48"
      >
        <div
          class="tw-w-[80%] tw-flex tw-flex-col tw-justify-center tw-items-start"
        >
          <h1
            class="tw-font-heading tw-text-6xl tw-font-bold dark:tw-text-text-color tw-mb-10"
          >
            Discover Ethiopian Literary Treasures
          </h1>
          <p class="tw-font-body tw-text-xl dark:tw-text-text-color tw-mb-24">
            Explore a World of Writing and Imagination, Ethiopian Style
          </p>

          <div class="tw-flex tw-gap-10">
            <v-btn class="hero-btn-secondary"> Start Writing </v-btn>

            <v-btn class="hero-btn">
              <span>Explore</span>
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'arrow-right-long']"
              />
            </v-btn>
          </div>
        </div>
        <div
          class="tw-w-[60%] tw-relative tw-flex tw-justify-center tw-items-center"
        >
          <div class="triangle-lg"></div>
          <div class="triangle-sm"></div>
          <div class="blur-shadow -tw-mt-2"></div>
          <img
            class="tw-w-[22rem] tw-h-[22rem] tw-object-cover tw-rounded-sm tw-z-20"
            src="https://cdn.discordapp.com/attachments/1063523239718035607/1144635166682251314/b89815bb-bf85-4b49-ad9d-c323e6e10033.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-btn-secondary {
  @apply tw-w-fit tw-flex tw-items-center tw-rounded-lg tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-primary dark:tw-bg-transparent tw-border-2 tw-border-primary tw-transition-all tw-duration-300 tw-py-6 tw-px-5;
}

.hero-btn-secondary:hover {
  @apply dark:hover:tw-bg-secondary;
}

.hero-btn {
  @apply tw-w-fit tw-flex tw-items-center tw-rounded-lg tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-background dark:tw-bg-primary tw-border-2 tw-border-transparent tw-transition-all tw-duration-300 tw-py-6 tw-px-5;
}

.hero-btn:hover {
  @apply dark:hover:tw-text-primary dark:hover:tw-bg-transparent dark:hover:tw-border-primary;
}

.hero-btn:hover .icon {
  @apply tw-w-5 tw-ml-4;
}

.icon {
  @apply tw-w-0 tw-h-5 dark:tw-text-primary tw-transition-all tw-duration-500;
}

.triangle-lg {
  @apply tw-w-0 tw-h-0 tw-absolute -tw-top-20 -tw-left-24 tw-border-solid tw-rotate-[155deg] tw-border-t-[350px] tw-border-r-[350px] tw-border-l-[250px] tw-border-transparent dark:tw-border-t-accent-secondary/90 tw-z-10;
}

.triangle-sm {
  @apply tw-w-0 tw-h-0 tw-absolute -tw-bottom-8 tw-right-3 tw-border-solid -tw-rotate-[10deg] tw-border-b-[110px] tw-border-l-[220px] tw-border-transparent dark:tw-border-b-primary/90 tw-z-10;
}

.blur-shadow {
  @apply tw-w-80 tw-h-80 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-blur-[6rem] tw-rounded-full dark:tw-bg-primary;
}
</style>
