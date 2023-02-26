<template>
    <video-background
        ref="aboutBackground"
        src="background.mp4"
        style="max-height: 100vh; height: 100vh; z-index: -1"
        overlay="linear-gradient(-10deg,#FF2980B9,#6DD5FAE6)"
      >
        <component :is="section" :name="name" :classes="classes" />
      </video-background>
</template>

<script lang='ts'>
import { name, classes } from '../definitions/props';
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";
export default {
    setup() {
    const aboutBackground = ref(null);
    const aboutBackgroundIsVisible = useElementVisibility(aboutBackground);

    return {
      aboutBackground,
      aboutBackgroundIsVisible,
    };
  },
  props: {
    section: {
        type: Object,
        default: {}
    },
    name: name,
    classes: classes
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
}
</script>