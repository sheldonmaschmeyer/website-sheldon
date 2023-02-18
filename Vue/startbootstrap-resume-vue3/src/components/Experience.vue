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
          <a class="subheading mb-3 summary"
            style="text-decoration:none; cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#' + experience.id">
              {{ experience.company }}
          </a>
          <component :id="experience.id" :is="experience.SUMMARY" class="collapse"/>
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
import SDMSummary from './Experience/SDM.vue'
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
          ],
          id: 'IMRSV'
        },
        {
          position: "Suppervisor, Primary Cashier & Merchandiser",
          company: "Shoppers Drug Mart",
          SUMMARY: SDMSummary,
          dates: [
            {
              start: "May 2016",
              end: "Jan 2021"
            }
          ],
          id: 'SDM'
        },
      ]
    };
  },
};
</script>

<style scoped>

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