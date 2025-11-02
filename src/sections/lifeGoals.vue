<template>
  <SectionContainer id="lifeGoals" heading="Life Goals" :classes="classes">
    <LifeGoalsItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { classes } from '../definitions/props';
import LifeGoalsItems from '../sectionItems/lifeGoalsItems.vue';

export default defineComponent({
  name: 'LifeGoalsSection',
  components: {
    LifeGoalsItems,
  },
  props: {
    classes: classes,
  },
});
</script>
