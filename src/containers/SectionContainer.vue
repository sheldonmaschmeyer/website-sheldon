<template>
  <section :id="id" :class="classes.section">
    <div class="w-100">
      <h2 class="mb-5">{{ heading }}</h2>
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { classes } from '../definitions/props';

export default {
  name: 'SectionContainer',
  props: {
    id: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: '',
    },
    classes: classes,
  },
};
</script>
