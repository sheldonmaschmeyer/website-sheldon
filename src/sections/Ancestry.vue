<template>
  <SectionContainer
    id="ancestry"
    :heading="$t('ancestry.heading')"
    :classes="classes"
  >
    <AncestryItems :classes="classes" />
  </SectionContainer>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
import AncestryItems from '../sectionItems/ancestryItems.vue';

export default {
  name: 'AncestrySection',
  components: {
    AncestryItems,
  },
  props: {
    classes: classes,
  },
};
</script>
