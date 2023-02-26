<template>
  <nav
    id="sideNav"
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    style="background-color: transparent"
  >
    <Navigation :name="name" />
    <video-background
      src="background.mp4"
      style="
        position: absolute;
        z-index: -999;
        height: 105%;
        width: 100%;
        margin-top: -2em;
        margin-bottom: -2em;
      "
      overlay="linear-gradient(45deg,#FF2980B9,#6DD5FAE6)"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowSize } from 'vue-window-size';

import { name } from '../definitions/props';
import Navigation from './Navigation.vue';
export default defineComponent({
  name: 'VideoNav',
  components: {
    Navigation,
  },
  props: {
    name: name,
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
});
</script>
