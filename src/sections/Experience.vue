<template>
  <SectionContainer id="experience" heading="Experience" :classes="classes">
    <ExperienceItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import ExperienceItems from '../sectionItems/experienceItems.vue';

export default {
  name: 'ExperienceSection',
  components: {
    ExperienceItems,
  },
  props: {
    classes: classes,
  },
};
</script>
