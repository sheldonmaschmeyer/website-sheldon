<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: transparent" id="sideNav">
      <Navigation :name="name" />
      <video-background
            src="background.mp4"
            style="position: absolute; z-index: -999; height: 100%; width: 100%; margin-top: -2em; margin-bottom: -2em"
            overlay="linear-gradient(45deg,#FF2980B9,#6DD5FAE6)"
      />
    </nav>
  </template>

<script>
import Navigation from './Navigation.vue';
import { defineComponent } from 'vue';
import { useWindowSize } from 'vue-window-size';
export default defineComponent ({
    name: "VideoNav",
    props: {
        name: Object
    },
    setup() {
        const { width, height } = useWindowSize();
        return {
        windowWidth: width,
        windowHeight: height,
        };
    },
    components: {
        Navigation
    }
})
</script>