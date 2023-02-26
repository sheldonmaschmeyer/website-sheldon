<template>
  <SectionContainer
    id="volunteering"
    heading="Volunteering & Donations"
    :classes="classes"
  >
    <VolunteerItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import VolunteerItems from '../sectionItems/volunteerItems.vue';
export default {
  name: 'VolunteerSection',
  components: {
    VolunteerItems,
  },
  props: {
    classes: classes,
  },
};
</script>
