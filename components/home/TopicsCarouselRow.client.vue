<script setup lang="ts">
// Not Used
// const trailer = ref();
// const animateTrailer = (e: MouseEvent, interacting: Boolean) => {
//   const x = e.clientX - trailer.value.offsetWidth / 2;
//   const y = e.clientY - trailer.value.offsetWidth / 2;

//   if (!trailer) return;

//   const keyframes = {
//     transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
//   };

//   trailer.value.animate(keyframes, {
//     duration: 700,
//     fill: 'forwards' // keep the last frame and continue where it left off
//   });
// };

// Used ------------------

const items = [
  {
    title: 'Shower Thoughts',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'shower']
  },
  {
    title: 'Productivity',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'person-walking-arrow-right']
  },
  {
    title: 'Management',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'people-group']
  },
  {
    title: 'Vent',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'mask']
  },
  {
    title: 'Technology',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'robot']
  },
  {
    title: 'Management',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'people-group']
  },
  {
    title: 'Vent',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'mask']
  },
  {
    title: 'Technology',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    icon: ['fas', 'robot']
  }
];
let icon = ref();
let scale = ref(0);

const handleMouseMove = (e) => {
  icon.value = e.target.querySelector('.topic-carousel-icon');

  moveClipPath(e);
};

const handleMouseEnter = (e) => {
  scale.value = 1;
};

const handleMouseLeave = (e) => {
  scale.value = 0;

  moveClipPath(e);
};

const moveClipPath = (e) => {
  const rect = e.currentTarget?.getBoundingClientRect();
  const targetX = e.clientX - rect?.left;
  const targetY = e.clientY - rect?.top;

  if (!icon.value) return;

  icon.value.style.clipPath = `circle(${3 * scale.value}rem at ${
    targetX / 1.2
  }px ${targetY / 1.2}px)`;
};
</script>

<template>
  <section
    class="tw-w-full tw-flex tw-flex-col tw-self-center tw-items-center tw-gap-12 tw-bg-secondary/60 tw-py-14"
  >
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl tw-text-text-color">
      Topics
    </h2>
    <div class="topic-carousel-container">
      <!-- <div ref="trailer" id="trailer"></div> -->
      <div
        v-for="({ image, icon, title }, idx) in items"
        :key="idx"
        class="tw-h-full"
      >
        <div
          class="topic-carousel-item"
          @mousemove="handleMouseMove"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @click="console.log('clicked')"
        >
          <!-- <img :src="image" class="topic-carousel-img" :alt="title" /> -->
          <font-awesome-icon class="topic-carousel-icon" :icon="icon" />
          <span class="topic-carousel-name"> {{ title }} </span>
          <div
            v-if="idx !== items.length - 1"
            class="tw-w-[1px] tw-h-1/3 tw-absolute tw-top-1/2 tw-right-0 -tw-translate-y-1/2 tw-border tw-border-accent"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.topic-carousel-container {
  @apply tw-w-full tw-h-40 tw-flex tw-items-center tw-cursor-pointer tw-overflow-hidden;
}

.topic-carousel-item {
  --item-width: 14rem;
  @apply tw-min-w-[var(--item-width)] tw-h-full tw-relative;
  animation-name: move;
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

.topic-carousel-icon {
  @apply tw-w-[80%] tw-h-[80%] tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-object-cover tw-pointer-events-none dark:tw-text-accent dark:tw-bg-transparent;
  clip-path: circle(1px at 50% 50%);
}

.topic-carousel-name {
  @apply tw-min-w-max tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-font-heading tw-font-bold tw-text-2xl tw-text-text-color tw-transition-opacity tw-duration-200 tw-pointer-events-none tw-px-10;
}

.topic-carousel-item:hover > .topic-carousel-name {
  @apply tw-opacity-0;
}

@keyframes move {
  0% {
    transform: translateX(calc(var(--item-width) - 6rem));
  }
  100% {
    transform: translateX(calc((var(--item-width) * -8) / 15));
  }
}

/* Not Used */
/* #trailer {
  @apply tw-fixed tw-top-0 tw-left-0 tw-w-4 tw-h-4 tw-bg-transparent tw-border tw-border-primary tw-rounded-full tw-opacity-0 tw-transition-opacity tw-duration-500  tw-z-[500];
}
.topic-carousel-container:hover > #trailer {
  @apply tw-opacity-100;
} */
</style>
