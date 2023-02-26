<template>
  <div :class="classes.item">
    <div class="resume-content white-space: pre-wrap;">
      <div class="subheading">IMRSV</div>
      • Donated to Canadian Red Cross for:
      <div class="ps-4">▪ COVID-19 aid in India</div>
      <div class="ps-4">▪ Canadian flood or fires</div>
      <div class="ps-4">▪ Urgent aid to Ukraine</div>
      • Donated to the Canada - Ukraine Foundation <br />
      • Donated to a food bank

      <div class="subheading pt-4">Carleton U</div>
      • Note Taker: for students with disabilities (PMC centre) at Carleton
      University multiple courses and terms <br />
      • Canadian Feed the Children: General Member at Carleton University: 2012
      - 2013

      <div class="subheading pt-4">Other</div>
      • Aurora Food Pantry: volunteer at Food Bank: 2008 <br />
      • Out of the Cold program for the homeless: volunteer: 2000 - 2003
      <br />
      • Terry Fox Run: occasional donor and participant <br />
      • Folding@Home: occasionally donate my unused CPU and/or GPU resources to
      the researchers
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'VolunteerItems',
  props: {
    classes: classes,
  },
};
</script>
