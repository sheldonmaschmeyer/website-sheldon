<template>
  <SectionContainer id="skills" heading="Skills" :classes="classes">
    <SkillsItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import SkillsItems from '../sectionItems/skillsItems.vue';
export default {
  name: 'SkillsSection',
  components: {
    SkillsItems,
  },
  props: {
    classes: classes,
  },
};
</script>

<style>
.image-icon {
  filter: contrast(0);
}
.image-icon:hover {
  filter: contrast(100);
}
</style>
