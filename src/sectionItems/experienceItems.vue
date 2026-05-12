<template>
  <div
    v-for="(experience, index) in experienceList"
    :key="index"
    :class="classes.item"
  >
    <div class="resume-content">
      <h3 class="mb-0">
        {{ experience.position }}
      </h3>
      <CollapseSubheading
        :heading-text="experience.company"
        :target="'#' + experience.id"
      />
      <component
        :is="experience.SUMMARY"
        :id="experience.id"
        class="collapse show"
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
import AlphaElSummaryChief from './experience/AlphaElChief.vue';
import ANVILSummary from './experience/ANVIL.vue';

export default {
  name: 'ExperienceItems',
  props: {
    classes: classes,
  },
  data() {
    return {
      experienceList: [
        {
          position: 'Chief Technology Officer',
          company: 'Alpha-El Inc.',
          SUMMARY: shallowRef(AlphaElSummaryChief),
          dates: [
            {
              start: 'March 2023',
              end: 'Present',
            },
          ],
          id: 'AlphaElChief',
        },
        {
          position: 'Full Stack Developer',
          company: 'ANVIL',
          SUMMARY: shallowRef(ANVILSummary),
          dates: [
            {
              start: 'Jan 2021',
              end: 'Oct 2022',
            },
          ],
          id: 'ANVIL',
        },
      ],
    };
  },
};
</script>
