<template>
  <div id="app">
    <NavigationComponent :name="name" />
    <div class="container-fluid p-0">
      <AboutSection :name="name" />
      <BorderSpacer />
      <ExperienceSection />
      <BorderSpacer />
      <EducationSection />
      <BorderSpacer />
      <SkillsSection />
      <BorderSpacer />
      <InterestsSection />
      <BorderSpacer />
      <AwardsSection />
    </div>
  </div>
</template>

<script>
import smoothScroll from 'smooth-scroll';

import AboutSection from "./components/About.vue";
import ExperienceSection from "./components/Experience.vue";
import EducationSection from "./components/Education.vue";
import SkillsSection from "./components/Skills.vue";
import InterestsSection from "./components/Interests.vue";
import AwardsSection from "./components/Awards.vue";
import NavigationComponent from "./components/Navigation.vue";
import BorderSpacer from "./components/Border.vue";

export default {
  name: "app",
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
    InterestsSection,
    AwardsSection,
    NavigationComponent,
    BorderSpacer
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
