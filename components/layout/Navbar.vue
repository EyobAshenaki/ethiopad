<template>
  <header
    class="tw-max-w-screen-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-py-5 tw-mx-auto"
  >
    <nuxt-link
      href="/"
      class="tw-font-heading tw-font-bold tw-text-[2rem] dark:tw-text-primary"
    >
      EthioPad
    </nuxt-link>
    <nav
      class="tw-items-center tw-justify-between tw-w-full md:tw-flex md:tw-w-auto tw-font-heading"
    >
      <ul
        class="tw-flex tw-space-x-8 tw-font-bold tw-text-xl dark:tw-text-text-color"
      >
        <li class="nav-item">
          <nuxt-link to="/articles"> Articles </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/fictions"> Fictions </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="collaborations"> Collaborative </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/leaderboards"> Leaderboard </nuxt-link>
        </li>
      </ul>
    </nav>
    <section
      class="tw-w-full md:tw-flex md:tw-w-auto tw-items-center tw-space-x-4 tw-font-heading"
    >
      <!-- Todo: font code is buggy. Either fix it or change the icon mechanism -->
      <!-- <font-awesome-icon
          class="tw-w-5 tw-h-5 tw-transition-all tw-duration-300 hover:tw-scale-110 dark:hover:tw-text-primary"
          :icon="['fas', 'magnifying-glass']"
        /> -->
      <button
        class="tw-flex tw-items-center tw-rounded-md tw-font-heading tw-font-bold tw-text-xl dark:tw-text-text-color dark:hover:tw-text-primary tw-px-4 tw-py-1.5"
      >
        <span>Log in</span>
      </button>
      <button
        class="tw-flex tw-items-center tw-rounded-md tw-font-heading tw-font-bold tw-text-xl dark:tw-text-background dark:tw-bg-primary dark:hover:tw-text-primary dark:hover:tw-bg-transparent tw-px-4 tw-py-1.5"
      >
        <span>Join</span>
      </button>
    </section>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
/* router-link-active router-link-exact-active  */

.nav-item {
  @apply tw-relative tw-rounded-md dark:hover:tw-text-primary tw-py-2 tw-px-4;
}

.nav-item::after {
  content: '';
  @apply tw-w-0 tw-h-[3px] tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-block tw-rounded-xl tw-transition-all tw-duration-500 tw-mt-0.5 dark:hover:tw-bg-primary hover:tw-w-1/2 active:tw-w-2/3;
}

.nav-item:has(.router-link-active) {
  @apply dark:tw-text-primary;
}
.nav-item:has(.router-link-active)::after {
  content: '';
  @apply tw-w-1/2 tw-h-[3px] tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-block tw-rounded-xl dark:tw-bg-primary tw-mt-0.5;
}
</style>
