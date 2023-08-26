<template>
  <footer class="">
    <footer-section-divider
      class="tw-w-full dark:tw-fill-background -tw-mt-60"
    />
    <div
      class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-font-body tw-mx-auto"
    >
      <!-- Top section -->
      <div class="tw-flex tw-justify-around tw-pb-20">
        <!-- First Row -->
        <div class="tw-flex tw-flex-col tw-justify-center tw-gap-3">
          <nuxt-link
            href="/"
            class="tw-font-heading tw-font-bold tw-text-[2rem] dark:tw-text-primary"
          >
            EthioPad
          </nuxt-link>
          <h4 class="tw-font-medium tw-text-xl tw-text-text-color">
            Follow Us
          </h4>
          <div class="tw-flex tw-gap-3">
            <font-awesome-icon
              class="tw-w-6 tw-h-6 tw-transition-all tw-duration-300 hover:tw-scale-110"
              :icon="['fab', 'facebook-f']"
            />
            <font-awesome-icon
              class="tw-w-6 tw-h-6 tw-transition-all tw-duration-300 hover:tw-scale-110"
              :icon="['fab', 'x-twitter']"
            />
            <font-awesome-icon
              class="tw-w-6 tw-h-6 tw-transition-all tw-duration-300 hover:tw-scale-110"
              :icon="['fab', 'instagram']"
            />
          </div>
        </div>

        <!-- Second Row -->
        <div class="tw-flex tw-flex-col tw-gap-4 tw-text-lg tw-text-slate-400">
          <nuxt-link to="/about"> About </nuxt-link>
          <!-- blog route takes to the profile page of ethiopad's account used for releasing articles -->
          <nuxt-link to="/"> Blog </nuxt-link>
          <nuxt-link to="/help-center"> Help </nuxt-link>
          <nuxt-link to="/authors"> Writers </nuxt-link>
        </div>

        <!-- Third Row -->
        <div class="tw-flex tw-flex-col tw-gap-4">
          <h4 class="tw-font-semibold tw-text-xl tw-text-text-color">
            Contact Us
          </h4>
          <!-- <div> -->
          <div class="tw-flex tw-gap-3 tw-text-slate-400">
            <font-awesome-icon
              class="tw-w-5 tw-h-5"
              :icon="['fas', 'location-dot']"
            />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div class="tw-flex tw-gap-3 tw-text-slate-400">
            <font-awesome-icon
              class="tw-w-5 tw-h-5"
              :icon="['fas', 'phone-volume']"
            />
            <span>+251997634891</span>
          </div>
          <div class="tw-flex tw-gap-3 tw-text-slate-400">
            <font-awesome-icon
              class="tw-w-5 tw-h-5"
              :icon="['fas', 'envelope']"
            />
            <span>support@ethiopad.com</span>
          </div>
          <!-- </div> -->
        </div>
      </div>

      <!-- Bottom section -->
      <div class="tw-flex tw-justify-between tw-pb-5">
        <span class="tw-font-thin tw-text-slate-500"
          >&copy; 2023 All Rights Reserved</span
        >
        <div class="tw-flex tw-gap-7 tw-text-slate-400">
          <nuxt-link to="/privacy-policy">Privacy</nuxt-link>
          <nuxt-link to="/terms">Terms</nuxt-link>
          <nuxt-link to="/legal">Legal</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterSectionDivider from '/components/layout/FooterSectionDivider.vue';
</script>

<style scoped></style>
