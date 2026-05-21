<template>
  <div :class="classes.item">
    <div class="resume-content">
      <h3 class="mb-0">{{ $t('education.computerScienceMajor') }}</h3>
      <br />
      <h4>{{ $t('education.computerScienceMinor') }}</h4>
    </div>
    <div class="resume-date text-md-right">
      <span class="text-primary">
        {{ $t('education.computerScienceDate') }}
      </span>
    </div>
  </div>
  <div :class="classes.item">
    <div class="resume-content">
      <h3 class="mb-0">{{ $t('education.scienceMajor') }}</h3>
      <br />
      <h4>{{ $t('education.scienceConcentration') }}</h4>
    </div>
    <div class="resume-date text-md-right">
      <span class="text-primary">{{ $t('education.scienceDate') }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'EducationItems',
  props: {
    classes: classes,
  },
};
</script>
