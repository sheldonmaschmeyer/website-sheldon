<template>
  <section id="experience" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>
      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(experience, index) in experienceList"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ experience.position }}</h3>
          <div class="subheading mb-3">{{ experience.company }}</div>
          <component :is="experience.SUMMARY"></component>
        </div>
        <div class="resume-date text-md-right">
          <span
            class="text-primary"
            v-for="(date, index) in experience.dates"
            :key="index"
          >{{ date.start }} - {{ date.end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IMRSVSummary from './Experience/IMRSV.vue';
export default {
  name: "ExperienceSection",
  data() {
    return {
      experienceList: [
        {
          position: "Full Stack Developer",
          company: "IMRSV Data Labs",
          SUMMARY: IMRSVSummary,
          dates: [
            {
              start: "Jan 2021",
              end: "October 2022"
            }
          ]
        },
      ]
    };
  },
};
</script>