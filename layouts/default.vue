<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue';
import FooterSection from '@/components/layout/FooterSection.vue';
</script>

<template>
  <navbar />

  <slot />

  <footer-section />
</template>
