<script setup lang="ts">
import bookCover1 from 'assets/images/book_cover_1.jpg';
import bookCover2 from 'assets/images/book_cover_2.webp';
import bookCover3 from 'assets/images/book_cover_3.jpg';
import bookCover4 from 'assets/images/book_cover_4.webp';

import { useImage } from '@vueuse/core';
import { ref } from 'vue';

const fictions = [
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023',
    cover: bookCover1,
    coverObj: useImage({ src: bookCover1 })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    cover: bookCover2,
    coverObj: useImage({ src: bookCover2 })
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023',
    cover: bookCover3,
    coverObj: useImage({ src: bookCover3 })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    cover: bookCover4,
    coverObj: useImage({ src: bookCover4 })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    cover: bookCover2,
    coverObj: useImage({ src: bookCover2 })
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023',
    cover: bookCover3,
    coverObj: useImage({ src: bookCover3 })
  },
  {
    readTime: 10,
    title: 'Ethiopian Politics',
    author: 'Ibrahim Mohammed',
    category: 'Politics',
    date: '05',
    month: 'May 2023',
    cover: bookCover4,
    coverObj: useImage({ src: bookCover4 })
  },
  {
    readTime: 7,
    title: 'The Ethiopian Renaissance Dam',
    author: 'Eyob Aschenaki',
    category: 'Facts',
    date: '09',
    month: 'Aug 2023',
    cover: bookCover1,
    coverObj: useImage({ src: bookCover1 })
  },
  {
    readTime: 16,
    title: 'Best Ethiopian Food',
    author: 'Adem Mohammed',
    category: 'Food',
    date: '17',
    month: 'May 2023',
    cover: bookCover3,
    coverObj: useImage({ src: bookCover3 })
  }
];

const heroClipPath = ref(null);
const prevRandNumber = ref();

// function getRandomNumFromInterval(min: number, max: number) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function selectRandomPath() {
//   const paths = heroClipPath.value.children;

//   console.log('Prev Random clip: ', prevRandNumber.value);

//   if (prevRandNumber.value) {
//     paths[prevRandNumber.value - 1].classList.add('tw-hidden');
//   }

//   const rand = getRandomNumFromInterval(1, paths.length);
//   prevRandNumber.value = rand;

//   console.log('Random clip: ', rand);

//   paths[rand - 1].classList.remove('tw-hidden');
// }

onUpdated(() => {
  console.log('Updated');
  // selectRandomPath();
});
</script>
<template>
  <main>
    <!-- Hero section -->
    <section class="tw-w-full tw-flex tw-flex-col tw-items-center">
      <div
        class="tw-max-w-screen-2xl tw-h-[35rem] tw-flex tw-items-center tw-justify-between"
      >
        <div
          class="tw-w-[50%] tw-flex tw-flex-col tw-justify-center tw-items-start"
        >
          <h1
            class="tw-font-heading tw-text-6xl tw-font-bold dark:tw-text-text-color tw-mb-10"
          >
            Unleash Your Creativity
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
        <div class="tw-w-[50%] tw-relative">
          <div class="masonry-wrapper">
            <div class="masonry-container">
              <img class="masonry" :src="bookCover1" alt="" />
              <img class="masonry" :src="bookCover2" alt="" />
              <img class="masonry" :src="bookCover1" alt="" />
            </div>
            <div class="masonry-container">
              <img class="masonry" :src="bookCover2" alt="" />
              <img class="masonry" :src="bookCover3" alt="" />
              <img class="masonry" :src="bookCover4" alt="" />
              <img class="masonry" :src="bookCover3" alt="" />
            </div>
            <div class="masonry-container">
              <img class="masonry" :src="bookCover4" alt="" />
              <img class="masonry" :src="bookCover2" alt="" />
              <img class="masonry" :src="bookCover1" alt="" />
              <img class="masonry" :src="bookCover2" alt="" />
            </div>
            <div class="masonry-container">
              <img class="masonry" :src="bookCover4" alt="" />
              <img class="masonry" :src="bookCover3" alt="" />
              <img class="masonry" :src="bookCover4" alt="" />
            </div>
            <div class="masonry-container">
              <img class="masonry" :src="bookCover1" alt="" />
              <img class="masonry" :src="bookCover4" alt="" />
              <img class="masonry" :src="bookCover1" alt="" />
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute">
            <defs>
              <clipPath ref="heroClipPath" id="mask">
                <!-- class="tw-hidden" -->
                <path
                  style="transform: translate(380px, 420px) scale(5)"
                  d="M43.5,-45.6C56.6,-40.9,67.5,-27.4,73.6,-10.4C79.7,6.6,81,27.1,70.2,35.6C59.4,44.1,36.5,40.6,19.1,42.6C1.8,44.6,-9.9,52,-26,53.8C-42.2,55.7,-62.7,51.8,-70.5,39.9C-78.4,28,-73.6,7.9,-67.8,-9.8C-62.1,-27.4,-55.4,-42.8,-43.9,-47.7C-32.5,-52.7,-16.2,-47.3,-0.5,-46.6C15.2,-46,30.5,-50.2,43.5,-45.6Z"
                />

                <!-- <path
                  class="tw-hidden"
                  style="transform: translate(360px, 470px) scale(0.87)"
                  d="M206.8 -353.4C250 -333.3 254.5 -241.4 279.2 -170.5C304 -99.7 349 -49.8 387 22C425 93.7 456.1 187.5 409.3 220.3C362.6 253 238 224.8 156.9 213.1C75.7 201.4 37.8 206.2 -3.2 211.6C-44.2 217.1 -88.3 223.3 -159.5 229.2C-230.7 235.2 -328.8 240.8 -348.6 202.6C-368.3 164.3 -309.7 82.2 -301.9 4.5C-294.1 -73.2 -337.1 -146.3 -330.2 -206.8C-323.3 -267.3 -266.4 -315.1 -203 -323.5C-139.7 -331.9 -69.8 -301 6 -311.3C81.8 -321.7 163.7 -373.5 206.8 -353.4"
                ></path> -->

                <!-- <path
                  class="tw-hidden"
                  style="transform: translate(250px, 400px) scale(0.8)"
                  d="M260.9 -398.4C342 -404.9 414.6 -343.1 463 -265.3C511.4 -187.5 535.7 -93.8 521.9 -8C508.1 77.8 456.3 155.7 407.9 233.5C359.5 311.3 314.5 389 247.1 423.1C179.7 457.2 89.8 447.6 27.3 400.2C-35.2 352.9 -70.3 267.8 -124.3 226C-178.3 184.1 -251.1 185.6 -280.3 155.1C-309.6 124.7 -295.3 62.3 -274.5 12C-253.7 -38.3 -226.5 -76.7 -198.8 -109.9C-171.1 -143.1 -143.1 -171.1 -109.9 -192.3C-76.7 -213.5 -38.3 -227.7 25.7 -272.3C89.8 -316.9 179.7 -391.9 260.9 -398.4"
                ></path>

                <path
                  class="tw-hidden"
                  style="transform: translate(350px, 440px) scale(0.8)"
                  d="M195.1 -314.2C271.1 -293.9 363.8 -278.7 398.8 -227.2C433.9 -175.7 411.5 -87.8 374.1 -21.6C336.7 44.7 284.4 89.3 258.1 156.2C231.9 223 231.7 312 193 336.8C154.3 361.6 77.2 322.3 -4.7 330.4C-86.5 338.5 -173 394 -254.2 393.7C-335.4 393.4 -411.3 337.3 -432.2 262.4C-453.1 187.5 -419 93.8 -368.3 29.3C-317.6 -35.2 -250.1 -70.3 -219.7 -128.8C-189.3 -187.2 -195.9 -269 -165.4 -315.6C-135 -362.2 -67.5 -373.6 -4 -366.7C59.5 -359.7 119 -334.4 195.1 -314.2"
                ></path>

                <path
                  class="tw-hidden"
                  style="transform: translate(350px, 440px) scale(0.8)"
                  d="M239.8 -368C311.2 -374.1 370 -310.8 407.5 -237.9C445.1 -165 461.6 -82.5 461.1 -0.3C460.7 82 443.4 164 402.6 231.4C361.9 298.8 297.7 351.6 226.7 357.5C155.7 363.3 77.8 322.1 9.6 305.5C-58.7 288.9 -117.3 296.9 -194.1 294.4C-270.9 291.9 -365.8 278.9 -400 228.1C-434.2 177.3 -407.6 88.7 -412 -2.5C-416.4 -93.7 -451.8 -187.5 -415.6 -234.8C-379.4 -282.2 -271.7 -283.1 -190.5 -271.4C-109.3 -259.7 -54.7 -235.3 14.7 -260.9C84.2 -286.4 168.3 -361.9 239.8 -368"
                ></path>

                <path
                  class="tw-hidden"
                  style="transform: translate(330px, 440px) scale(5)"
                  d="M47.2,-68.5C61.6,-73.4,73.9,-61.6,79.4,-47.4C84.8,-33.2,83.4,-16.6,78.4,-2.9C73.3,10.8,64.8,21.6,53.9,26.5C43.1,31.4,30,30.4,20.7,37.9C11.3,45.5,5.6,61.7,0.6,60.6C-4.4,59.6,-8.9,41.3,-17.4,33.2C-25.9,25.2,-38.4,27.3,-49.5,23.5C-60.5,19.6,-70,9.8,-63.9,3.5C-57.8,-2.8,-36.1,-5.5,-30.1,-18.1C-24.1,-30.7,-33.9,-53.2,-31.5,-55.2C-29.1,-57.3,-14.6,-38.9,0.9,-40.5C16.4,-42.1,32.8,-63.7,47.2,-68.5Z"
                />

                <path
                  class="tw-hidden"
                  style="transform: translate(330px, 440px) scale(5)"
                  d="M47.2,-68.5C61.6,-73.4,73.9,-61.6,79.4,-47.4C84.8,-33.2,83.4,-16.6,78.4,-2.9C73.3,10.8,64.8,21.6,53.9,26.5C43.1,31.4,30,30.4,20.7,37.9C11.3,45.5,5.6,61.7,0.6,60.6C-4.4,59.6,-8.9,41.3,-17.4,33.2C-25.9,25.2,-38.4,27.3,-49.5,23.5C-60.5,19.6,-70,9.8,-63.9,3.5C-57.8,-2.8,-36.1,-5.5,-30.1,-18.1C-24.1,-30.7,-33.9,-53.2,-31.5,-55.2C-29.1,-57.3,-14.6,-38.9,0.9,-40.5C16.4,-42.1,32.8,-63.7,47.2,-68.5Z"
                />

                <path
                  class="tw-hidden"
                  style="transform: translate(460px, 340px) scale(5.5)"
                  d="M24.4,-46.3C25.1,-41.9,14.8,-22.2,23.4,-11.9C32.1,-1.7,59.8,-0.8,63.8,2.3C67.8,5.5,48.1,10.9,37.9,18.6C27.8,26.2,27.1,36.1,22.4,37.2C17.7,38.3,8.8,30.8,-3.5,36.9C-15.9,43.1,-31.9,62.9,-40.4,64C-48.8,65,-49.9,47.2,-58.4,33.4C-66.9,19.6,-82.9,9.8,-80.2,1.6C-77.5,-6.7,-56.1,-13.4,-42.2,-17.8C-28.2,-22.1,-21.7,-24.2,-15.9,-25.8C-10.1,-27.4,-5.1,-28.4,3.4,-34.2C11.8,-40.1,23.7,-50.8,24.4,-46.3Z"
                /> -->
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>

    <!-- Below the fold -->
    <section class="fictions-container">
      <trending-fictions-row />

      <!-- Maybe add a recommended section based on the read's previous reads and interests -->
      <standing-book-cards-row class="tw-mb-24" row-title="Recent Fictions" />

      <section class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-gap-4">
        <genre-chips-row class="tw-max-w-screen-2xl tw-mb-4" />

        <h3 class="genre-sub-heading">Genre</h3>
        <h2 class="genre-heading">Drama</h2>

        <div class="tw-flex tw-flex-wrap tw-gap-12 tw-mb-10">
          <standing-book-card
            v-for="(fiction, idx) in fictions"
            :key="idx"
            :item="fiction"
            :idx="idx"
          />
        </div>

        <load-more-btn />
      </section>
    </section>
  </main>
</template>

<style scoped>
.masonry-wrapper {
  @apply tw-flex tw-justify-center tw-gap-4 tw-items-center tw-rotate-12;
  clip-path: url(#mask);
}

.masonry-container {
  @apply tw-w-[13rem] tw-flex tw-flex-col tw-gap-4;
}

.masonry-container:nth-child(even) {
  @apply -tw-mt-20;
}

.masonry-container:nth-child(odd) {
  @apply -tw-mb-20;
}

.masonry {
  @apply tw-aspect-[13/18.57] tw-object-cover dark:tw-bg-slate-400 tw-rounded-sm tw-opacity-75;
}

.hero-btn-secondary {
  @apply tw-w-fit tw-flex tw-items-center tw-rounded-lg tw-font-heading tw-capitalize tw-font-bold tw-text-2xl dark:tw-text-primary dark:tw-bg-transparent tw-border-2 dark:tw-border-primary tw-transition-all tw-duration-300 tw-py-6 tw-px-5;
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

.hero-img {
  @apply tw-w-52 tw-object-cover tw-rounded-sm tw-z-20;
}

.fictions-container {
  @apply tw-flex tw-flex-col tw-items-center tw-gap-20 dark:tw-bg-gradient-to-b dark:tw-from-background dark:tw-via-background dark:tw-to-slate-800 tw-pt-24 tw-pb-60;
}

.genre-sub-heading {
  @apply tw-font-heading tw-font-bold tw-capitalize tw-text-xl dark:tw-text-slate-300;
  letter-spacing: 2px;
}

.genre-heading {
  @apply tw-font-heading tw-font-bold tw-capitalize tw-text-5xl dark:tw-text-text-color tw-mb-10;
  letter-spacing: 2px;
}
</style>
