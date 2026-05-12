<template>
  <SectionContainer id="ancestry" heading="Ancestry" :classes="classes">
    <AncestryItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import SectionContainer from '../containers/SectionContainer.vue';
import { classes } from '../definitions/props';
import AncestryItems from '../sectionItems/ancestryItems.vue';

export default {
  name: 'AncestrySection',
  components: {
    SectionContainer,
    AncestryItems,
  },
  props: {
    classes: classes,
  },
};
</script>
