<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: transparent" id="sideNav">
      <video-background
            v-if="windowWidth > 960"
            src="background.mp4"
            style="height: 150vh; width: 100%; margin-top: -2em; margin-bottom: -2em"
            overlay="linear-gradient(45deg,#FF2980B9,#6DD5FAE6)"
      >
      <Navigation :name="name" />
      </video-background>
      <div v-show="windowWidth <= 992" :style="windowWidth <= 992 ? 'margin-top: -1.5em' : ''" class="bg-primary" style="height: 6em; width: 100%; background-color: black">
        <Navigation :name="name" />
        </div>
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