<template>
  <video-background
    ref="aboutBackground"
    src="background.mp4"
    style="max-height: 100vh; height: 100vh"
    overlay="linear-gradient(-10deg,#FF2980B9,#6DD5FAE6)"
  >
    <component
      :is="section"
      :name="name"
      :classes="classes"
      style="z-index: 1"
    />
  </video-background>
</template>

<script lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, shallowRef } from 'vue';

import defaultComponent from '../definitions/component.vue';
import { classes, name } from '../definitions/props';
export default {
  props: {
    section: {
      type: Object,
      default: () => shallowRef(defaultComponent),
    },
    name: name,
    classes: classes,
  },
  setup() {
    const aboutBackground = ref(null);
    const aboutBackgroundIsVisible = useElementVisibility(aboutBackground);

    return {
      aboutBackground,
      aboutBackgroundIsVisible,
    };
  },
  watch: {
    aboutBackgroundIsVisible(newValue) {
      if (newValue === false) {
        this.$refs.aboutBackground.player.pause();
      } else {
        this.$refs.aboutBackground.player.play();
      }
    },
  },
};
</script>
