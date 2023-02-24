<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet">
    <NavigationComponent :name="name" />
    <div class="container-fluid p-0" data-bs-spy="scroll" data-bs-target=".navbar">
      <video-background
          ref="aboutBackground" 
          src="background.mp4"
          style="max-height: 100vh; height: 100vh;"
          overlay="linear-gradient(-10deg,#FF2980B9,#6DD5FAE6)" 
      >
        <AboutSection :name="name" />
      </video-background>
      <BorderSpacer />
      <ExperienceSection />
      <BorderSpacer />
      <SkillsSection />
      <BorderSpacer />
      <ActivitiesSection />
      <BorderSpacer />
      <LifeGoalsSection />
      <BorderSpacer />
      <VolunteerSection />
      <BorderSpacer />
      <EducationSection />
    </div>
  </div>
</template>

<script>
import smoothScroll from 'smooth-scroll';
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue';

import AboutSection from "./components/About.vue";
import ExperienceSection from "./components/Experience.vue";
import EducationSection from "./components/Education.vue";
import SkillsSection from "./components/Skills/Skills.vue";
import VolunteerSection from "./components/volunteer.vue";
import NavigationComponent from "./components/Navigation.vue";
import BorderSpacer from "./components/Border.vue";
import ActivitiesSection from "./components/Activities.vue";
import LifeGoalsSection from "./components/lifeGoals.vue";

export default {
  name: "app",
  setup() {
    const aboutBackground = ref(null)
    const aboutBackgroundIsVisible = useElementVisibility(aboutBackground)
    
    return {
      aboutBackground,
      aboutBackgroundIsVisible,
    }
  },
  watch: {
    aboutBackgroundIsVisible(newValue, _) {
      if (newValue === false) {
        this.$refs.aboutBackground.player.pause();
      } else {
        this.$refs.aboutBackground.player.play();
      }
    }
  },
  data() {
    return {
      name: {
        first: "Sheldon",
        middle: "W.B.",
        last: "Maschmeyer"
      }
    }
  },
  components: {
    AboutSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    VolunteerSection,
    NavigationComponent,
    BorderSpacer,
    ActivitiesSection,
    LifeGoalsSection
  },
  created: function() {
    var scroll = new smoothScroll('a[href*="#"]', {
      updateURL: true,
      speed: 500,
      speedAsDuration: true
    })
  }
};
</script>

<style>

  .summary:before {
    font-family: 'Font Awesome\ 5 Free';
    float: left;
    content: "\f150\00a0\00a0"; 
  }

  .summary.collapsed:before {
    font-family: 'Font Awesome\ 5 Free';
    float: left;
    content: "\f152\00a0\00a0";
  }

</style>
