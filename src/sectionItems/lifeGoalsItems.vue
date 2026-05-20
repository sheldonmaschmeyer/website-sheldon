<template>
  <div>
    <CollapseSubheading
      :heading-text="$t('lifeGoalsItems.headingHighPriority')"
      target="#highPriority"
    />
    <div id="highPriority" class="collapse ps-4 show">
      • {{ $t('lifeGoalsItems.goal1') }}
      <br />
      <span class="lf">
        <ActivitiesList t-key="lifeGoalsItems.goal1Details" />
      </span>
    </div>
  </div>
  <div>
    <CollapseSubheading
      :heading-text="$t('lifeGoalsItems.headingThisYear')"
      target="#shortTerm"
    />
    <div id="shortTerm" class="collapse ps-4 show">
      • {{ $t('lifeGoalsItems.goal2') }}
      <br />
      <span class="lf">
        <ActivitiesList t-key="lifeGoalsItems.goal2Details" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ActivitiesList } from '../components';
import { classes } from '../definitions/props';
export default {
  name: 'LifeGoalsItems',
  components: {
    ActivitiesList,
  },
  props: {
    classes: classes,
  },
};
</script>
