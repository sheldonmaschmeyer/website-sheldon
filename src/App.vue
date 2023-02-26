<template>
  <div id="app">
    <VideoNav :name="name" />
    <div
      class="container-fluid p-0"
      data-bs-spy="scroll"
      data-bs-target=".navbar"
    >
      <VideoContainer :section="AboutSection" :name="name" :classes="classes" />
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
import smoothScroll from 'smooth-scroll';
import { reactive } from 'vue';

import BorderSpacer from './components/Border.vue';
import VideoNav from './components/VideoNav.vue';
import VideoContainer from './containers/VideoContainer.vue';
import AboutSection from './sections/About.vue';
import ActivitiesSection from './sections/Activities.vue';
import EducationSection from './sections/Education.vue';
import ExperienceSection from './sections/Experience.vue';
import LifeGoalsSection from './sections/lifeGoals.vue';
import SkillsSection from './sections/Skills.vue';
import VolunteerSection from './sections/volunteer.vue';

export default {
  name: 'App',
  components: {
    ExperienceSection,
    EducationSection,
    SkillsSection,
    VolunteerSection,
    VideoNav,
    BorderSpacer,
    ActivitiesSection,
    LifeGoalsSection,
    VideoContainer,
  },
  data() {
    return {
      AboutSection: reactive(AboutSection),
      name: {
        first: 'Sheldon',
        middle: 'W.B.',
        last: 'Maschmeyer',
      },
      classes: {
        section: [
          'resume-section',
          'p-3',
          'p-lg-5',
          'd-flex',
          'align-items-center',
        ],
        item: [
          'resume-item',
          'd-flex',
          'flex-column',
          'flex-md-row',
          'justify-content-between',
          'mb-5',
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
