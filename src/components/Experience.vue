<template>
  <section id="experience" :class="classes.section">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>
      <div
        v-for="(experience, index) in experienceList"
        :key="index"
        :class="classes.item"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ experience.position }}</h3>
          <a
            class="subheading mb-3 summary"
            style="text-decoration: none; cursor: pointer"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + experience.id"
          >
            {{ experience.company }}
          </a>
          <component
            :is="experience.SUMMARY"
            :id="experience.id"
            class="collapse"
          />
        </div>
        <div class="resume-date text-md-right">
          <span
            v-for="(date, i) in experience.dates"
            :key="i"
            class="text-primary"
            >{{ date.start }} - {{ date.end }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import { shallowRef } from 'vue';
import IMRSVSummary from './Experience/IMRSV.vue';
import SDMSummary from './Experience/SDM.vue';
import IAMSummary from './Experience/IAM.vue';

export default {
  name: 'ExperienceSection',
  props: {
    classes: classes,
  },
  data() {
    return {
      experienceList: [
        {
          position: 'Full Stack Developer',
          company: 'IMRSV Data Labs',
          SUMMARY: shallowRef(IMRSVSummary),
          dates: [
            {
              start: 'Jan 2021',
              end: 'October 2022',
            },
          ],
          id: 'IMRSV',
        },
        {
          position: 'Suppervisor, Primary Cashier & Merchandiser',
          company: 'Shoppers Drug Mart',
          SUMMARY: shallowRef(SDMSummary),
          dates: [
            {
              start: 'May 2016',
              end: 'Jan 2021',
            },
          ],
          id: 'SDM',
        },
        {
          position: 'IT & Media Arts (Part-Time)',
          company: 'I-AM Retailer Solutions · Abaan & Associates',
          SUMMARY: shallowRef(IAMSummary),
          dates: [
            {
              start: 'June 2008',
              end: 'September 2020',
            },
          ],
          id: 'IAM',
        },
      ],
    };
  },
};
</script>
