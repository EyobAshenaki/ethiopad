<script setup lang="ts">
import TrendingArticleCard from '@/components/home/TrendingArticleCard.vue';

const items = [
  {
    rank: 1,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    date: 'Aug 9, 2023'
  },
  {
    rank: 2,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    date: 'May 5, 2023'
  },
  {
    rank: 3,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    date: 'May 17, 2023'
  },
  {
    rank: 4,
    title: 'Racism in Ethiopia',
    author: 'Daneil Wondimu',
    date: 'Jun 13, 2023'
  },
  {
    rank: 5,
    title: 'Growth of Ethiopian Economy',
    author: 'Biruk Tadesse',
    date: 'Mar 21, 2023'
  },
  {
    rank: 6,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    date: 'Aug 9, 2023'
  },
  {
    rank: 7,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    date: 'May 5, 2023'
  },
  {
    rank: 8,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    date: 'May 17, 2023'
  },
  {
    rank: 9,
    title: 'Racism in Ethiopia',
    author: 'Daneil Wondimu',
    date: 'Jun 13, 2023'
  },
  {
    rank: 10,
    title: 'Growth of Ethiopian Economy',
    author: 'Biruk Tadesse',
    date: 'Mar 21, 2023'
  }
];

const disableLeftButton = ref(false);
const disableRightButton = ref(false);

const scrollWidth = ref<number>(115);
const carouselButtons = ref(null);
const totalOffset = ref<number>(0);

type CarouselDirection = 'backward' | 'forward';

const moveSlide = (direction: CarouselDirection) => {
  const btnsRef = carouselButtons.value;
  console.log(btnsRef);

  const carousel = btnsRef.closest('[data-carousel]');
  const slides = carousel.querySelector('[data-slides]');
  const activeSlide = slides.querySelector('[data-active]');

  disableRightButton.value = false;
  disableLeftButton.value = false;

  let targetSlide;
  if (direction === 'backward') {
    if (activeSlide.nextElementSibling.nextElementSibling === null)
      disableRightButton.value = true;
    else {
      totalOffset.value -= scrollWidth.value;
      targetSlide = activeSlide.nextElementSibling;

      targetSlide.dataset.active = true;
      delete activeSlide.dataset.active;
    }
  } else {
    if (activeSlide.previousElementSibling === null) {
      disableLeftButton.value = true;
    } else {
      totalOffset.value += scrollWidth.value;
      targetSlide = activeSlide.previousElementSibling;

      targetSlide.dataset.active = true;
      delete activeSlide.dataset.active;
    }
  }

  [...slides.children].forEach((slide) => {
    // console.log('TotalOffset: ', totalOffset.value);

    slide.style.transform = `translateX(${totalOffset.value}%)`;
  });
};

const nextNtBtnHandler = () => {
  moveSlide('backward');
};

const prevNtBtnHandler = () => {
  moveSlide('forward');
};
</script>

<template>
  <section class="tw-flex tw-flex-col tw-space-y-24">
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl">
      Trending Articles
    </h2>
    <div class="tw-max-w-screen-xl tw-flex tw-gap-5 tw-font-body">
      <!-- Main card -->
      <trending-article-card :active="true" :item="items[0]" />

      <!-- Tiny cards carousel -->
      <section
        class="tw-h-[24.5rem] tw-w-[58rem] tw-flex tw-flex-col tw-justify-between -tw-mt-12 tw-overflow-x-hidden"
        data-carousel
      >
        <div class="tw-flex tw-space-x-5 tw-mt-12" data-slides>
          <!-- Card -->
          <trending-article-card
            v-for="(item, idx) in items"
            :key="idx"
            :item="item"
            data-active
            class="tw-transition-transform tw-duration-700"
          />
        </div>
        <!-- Buttons -->
        <div ref="carouselButtons" class="tw-flex tw-gap-4 tw-pl-2 tw-pb-2">
          <button-light
            class="hover:tw-scale-125"
            :icon="true"
            size="43"
            :disabled="disableLeftButton"
            @click="prevNtBtnHandler"
          >
            <font-awesome-icon
              class="tw-w-3.5 tw-h-3.tw-w-3.5"
              :icon="['fas', 'arrow-left']"
            />
          </button-light>
          <button-light
            class="hover:tw-scale-125"
            :icon="true"
            size="43"
            :disabled="disableRightButton"
            @click="nextNtBtnHandler"
          >
            <font-awesome-icon
              class="tw-w-3.5 tw-h-3.tw-w-3.5"
              :icon="['fas', 'arrow-right']"
            />
          </button-light>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
