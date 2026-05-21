/** Experience section items. **/
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
      <span v-for="(date, i) in experience.dates" :key="i" class="text-primary">
        {{ date.start }} - {{ date.end }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import AlphaElSummaryChief from './experience/AlphaElChief.vue';
import ANVILSummary from './experience/ANVIL.vue';

export default {
  name: 'ExperienceItems',
  props: {
    classes: classes,
  },
  computed: {
    experienceList() {
      return [
        {
          position: this.$t('experience.items.alphaEl_position'),
          company: 'Alpha-El Inc.',
          SUMMARY: AlphaElSummaryChief,
          dates: [
            {
              start: this.$t('experience.items.alphaEl_start'),
              end: this.$t('experience.items.present'),
            },
          ],
          id: 'AlphaElChief',
        },
        {
          position: this.$t('experience.items.anvil_position'),
          company: 'ANVIL',
          SUMMARY: ANVILSummary,
          dates: [
            {
              start: this.$t('experience.items.anvil_start'),
              end: this.$t('experience.items.anvil_end'),
            },
          ],
          id: 'ANVIL',
        },
      ];
    },
  },
};
</script>
