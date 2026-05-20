<template>
  <div :class="classes.item">
    <div class="resume-content white-space: pre-wrap;">
      <div class="subheading">2025</div>
      <ActivitiesList t-key="volunteer.2025" />

      <div class="subheading">2024</div>
      <ActivitiesList t-key="volunteer.2024" />

      <div class="subheading">2023</div>
      <ActivitiesList t-key="volunteer.2023" />

      <div class="subheading">ANVIL</div>
      <ActivitiesList t-key="volunteer.ANVIL" />

      <div class="subheading">2022</div>
      <ActivitiesList t-key="volunteer.2022" />

      <div class="subheading">Carleton U</div>
      <ActivitiesList t-key="volunteer.CarletonU" />

      <div class="subheading">Other</div>
      <ActivitiesList t-key="volunteer.Other" />
    </div>
  </div>
</template>

<script lang="ts">
import { ActivitiesList } from '../components';
import { classes } from '../definitions/props';
export default {
  name: 'VolunteerItems',
  components: {
    ActivitiesList,
  },
  props: {
    classes: classes,
  },
};
</script>
