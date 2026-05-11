<template>
  <SectionContainer id="activities" heading="Activities" :classes="classes">
    <ActivitiesItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import ActivitiesItems from '../sectionItems/activitiesItems.vue';

export default {
  name: 'ActivitiesSection',
  components: {
    ActivitiesItems,
  },
  props: {
    classes: classes,
  },
};
</script>
