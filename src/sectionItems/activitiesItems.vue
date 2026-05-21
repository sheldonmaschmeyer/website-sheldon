<template>
  <div :class="classes.item">
    <div class="resume-content" style="white-space: pre-wrap">
      <ActivitiesList t-key="activities.items" />
    </div>
  </div>
</template>

<script lang="ts">
import { ActivitiesList } from '../components';
import { classes } from '../definitions/props';

export default {
  name: 'ActivitiesItems',
  components: {
    ActivitiesList,
  },
  props: {
    classes: classes,
  },
};
</script>
