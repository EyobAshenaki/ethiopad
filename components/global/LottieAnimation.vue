<template>
  <client-only>
    <Vue3Lottie :animation-data="lottieOptions" />
  </client-only>
</template>

<script>
export default {
  name: 'LottieAnimation',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: this.item.animationData
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    test() {
      console.log(this.item.animationData);
    }
  }
};
</script>
