<template>
  <SectionContainer
    id="education"
    :heading="$t('education.heading')"
    :classes="classes"
  >
    <EducationItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import EducationItems from '../sectionItems/educationItems.vue';
export default {
  name: 'EducationSection',
  components: {
    EducationItems,
  },
  props: {
    classes: classes,
  },
};
</script>
