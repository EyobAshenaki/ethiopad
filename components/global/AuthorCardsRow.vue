<script setup lang="ts">
const authors = [
  {
    followerCount: 7,
    name: 'Eyob Aschenaki',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a eveniet dolorem.'
  },
  {
    followerCount: 43,
    name: 'Dawit Kiflu',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a eveniet dolorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  {
    followerCount: 25,
    name: 'Abebe Kebede',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a eveniet dolorem. Minima a eveniet dolorem.'
  },
  {
    followerCount: 13,
    name: 'Eyasu Alemayehu',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a eveniet dolorem. Minima a eveniet dolorem.'
  },
  {
    followerCount: 31,
    name: 'Daneil Wondimu',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a eveniet dolorem. Minima a eveniet dolorem.'
  }
];

const handleMouseMove = (e): void => {
  const cards = document.querySelectorAll('[data-card]');
  for (const card of cards) {
    const cardBoundingRect = card.getBoundingClientRect(),
      x = e.clientX - cardBoundingRect.left,
      y = e.clientY - cardBoundingRect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }
};
</script>

<template>
  <section
    class="tw-max-w-screen-2xl tw-flex tw-flex-col tw-self-center tw-gap-24"
  >
    <h2 class="tw-font-heading tw-font-semibold tw-text-3xl">Top Authors</h2>
    <div class="author-cards" @mousemove="handleMouseMove">
      <div
        v-for="({ name, followerCount, bio }, idx) in authors"
        :key="idx"
        data-card
        class="author-card"
        @click="() => console.log('Author card clicked')"
      >
        <div class="author-card-border"></div>
        <div class="author-card-content">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            alt="author-image"
            class="author-card-avatar"
          />
          <div class="author-card-info">
            <h3>{{ name }}</h3>
            <span> {{ followerCount }} followers</span>
            <p>
              {{ bio }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.author-cards {
  @apply tw-flex tw-flex-wrap tw-gap-5;
}

.author-cards:hover > .author-card > .author-card-border {
  @apply tw-opacity-100;
}

.author-card {
  @apply tw-relative tw-w-[280px] tw-rounded-[10px] tw-cursor-pointer tw-mb-12;
  background-color: rgba(255, 255, 255, 0.1);
}

.author-card:hover::before {
  @apply tw-opacity-100;
}

.author-card::before,
.author-card > .author-card-border {
  @apply tw-content-[""] tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-0 tw-duration-500;
  border-radius: inherit;
}

.author-card::before {
  background: radial-gradient(
    800px circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
}

.author-card > .author-card-border {
  background: radial-gradient(
    400px circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  z-index: 1;
}

.author-card > .author-card-content {
  @apply tw-relative tw-h-[calc(100%-2px)] tw-w-[calc(100%-2px)] tw-flex tw-flex-col tw-items-center tw-gap-9 tw-bg-background/80 tw-px-5 tw-pb-10 tw-m-[1px];
  border-radius: inherit;
  z-index: 2;
}

.author-card-avatar {
  @apply tw-w-[110px] tw-h-[110px] tw-rounded-full tw-self-center tw-ring-8 tw-ring-background tw-border-2 tw-border-solid tw-border-primary -tw-mt-[18%];
}

.author-card-info {
  @apply tw-flex tw-flex-col tw-justify-between tw-items-center;
}

.author-card-info > h3 {
  @apply tw-font-body tw-font-medium tw-text-xl;
  /* letter-spacing: 0.05rem; */
}

.author-card-info > span {
  @apply tw-font-body tw-font-light tw-text-sm tw-text-slate-400;
}

.author-card-info > p {
  @apply tw-font-body tw-font-light tw-text-center tw-text-sm tw-mt-6;
}
</style>
