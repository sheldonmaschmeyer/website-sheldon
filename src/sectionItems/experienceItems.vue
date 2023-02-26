<template>
  <div
    v-for="(experience, index) in experienceList"
    :key="index"
    :class="classes.item"
  >
    <div class="resume-content">
      <h3 class="mb-0">{{ experience.position }}</h3>
      <CollapseSubheading
        :heading-text="experience.company"
        :target="'#' + experience.id"
      />
      <component
        :is="experience.SUMMARY"
        :id="experience.id"
        class="collapse"
      />
    </div>
    <div class="resume-date text-md-right">
      <span v-for="(date, i) in experience.dates" :key="i" class="text-primary"
        >{{ date.start }} - {{ date.end }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { shallowRef } from 'vue';

import { classes } from '../definitions/props';
import IAMSummary from './experience/IAM.vue';
import IMRSVSummary from './experience/IMRSV.vue';
import SDMSummary from './experience/SDM.vue';

export default {
  name: 'ExperienceItems',
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
