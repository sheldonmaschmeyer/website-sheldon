<template>
  <SectionContainer id="lifeGoals" heading="Life Goals" :classes="classes">
    <LifeGoalsItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import LifeGoalsItems from '../sectionItems/lifeGoalsItems.vue';
export default {
  name: 'LifeGoalsSection',
  components: {
    LifeGoalsItems,
  },
  props: {
    classes: classes,
  },
};
</script>
