<template>
  <div id="app">
    <link
      href="https://use.fontawesome.com/releases/v5.0.1/css/all.css"
      rel="stylesheet"
    />
    <VideoNav :name="name" />
    <div
      class="container-fluid p-0"
      data-bs-spy="scroll"
      data-bs-target=".navbar"
    >
      <VideoContainer :section="AboutSection" :name="name" :classes="classes"/>
      <BorderSpacer />
      <ExperienceSection :classes="classes" />
      <BorderSpacer />
      <SkillsSection :classes="classes" />
      <BorderSpacer />
      <ActivitiesSection :classes="classes" />
      <BorderSpacer />
      <LifeGoalsSection :classes="classes" />
      <BorderSpacer />
      <VolunteerSection :classes="classes" />
      <BorderSpacer />
      <EducationSection :classes="classes" />
    </div>
  </div>
</template>

<script lang="ts">
// TODO: not need the three links above
import smoothScroll from "smooth-scroll";

import AboutSection from "./components/About.vue";
import ExperienceSection from "./components/Experience.vue";
import EducationSection from "./components/Education.vue";
import SkillsSection from "./components/Skills.vue";
import VolunteerSection from "./components/volunteer.vue";
import VideoNav from "./components/VideoNav.vue";
import BorderSpacer from "./components/Border.vue";
import ActivitiesSection from "./components/Activities.vue";
import LifeGoalsSection from "./components/lifeGoals.vue";
import VideoContainer from "./components/VideoContainer.vue";
import { reactive } from 'vue';

export default {
  name: "App",
  components: {
    AboutSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    VolunteerSection,
    VideoNav,
    BorderSpacer,
    ActivitiesSection,
    LifeGoalsSection,
    VideoContainer
  },
  data() {
    return {
      AboutSection: reactive(AboutSection),
      name: {
        first: "Sheldon",
        middle: "W.B.",
        last: "Maschmeyer",
      },
      classes: {
        section: [
          "resume-section",
          "p-3",
          "p-lg-5",
          "d-flex",
          "align-items-center",
        ],
        item: [
          "resume-item",
          "d-flex",
          "flex-column",
          "flex-md-row",
          "justify-content-between",
          "mb-5",
        ],
      },
    };
  },
  created: function () {
    new smoothScroll('a[href*="#"]', {
      updateURL: true,
      speed: 500,
      speedAsDuration: true,
    });
  },
};
</script>

<style>
/** TODO: A different method, likely a v-on:click method, to update the arrow icons */
.summary:before {
  font-family: "Font Awesome\ 5 Free";
  float: left;
  content: "\f150\00a0\00a0";
}

.summary.collapsed:before {
  font-family: "Font Awesome\ 5 Free";
  float: left;
  content: "\f152\00a0\00a0";
}
</style>
