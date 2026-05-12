<template>
  <div>
    <CollapseSubheading heading-text="High Priority" target="#highPriority" />
    <div id="highPriority" class="collapse ps-4 show">
      • Improve income and reduce debt. <br />
      <span class="lf">
        -> Income has been reduced, year over year, as inflation has increased.
        This has lead to greater difficulties in meeting financial obligations,
        but no missed minimum payments, yet. <br />
        -> Unsecured debt used for our educational expenses, business and, other
        personal expenses. <br />
        -> My current full-time job, paid as a contractor, is a start-up so
        monthly income fluctuates and currently, it is far below expectations. I
        am told to work less hours to help the business with financial
        sustainability. As the business scales up, income fluctuations may
        reduce but, I am looking for new opportunities. <br />
        -> My fiancé has been baring the increasing burden of our financial
        obligations due to my income issues. <br />
      </span>
    </div>
  </div>
  <div>
    <CollapseSubheading heading-text="This year" target="#shortTerm" />
    <div id="shortTerm" class="collapse ps-4 show">
      • I am engaged to get married.<br />
      <span class="lf">
        -> Debating between a court house wedding or a ceremony where we can
        invite family and friends. <br />
      </span>
      • Family Planning.<br />
      <span class="lf">
        -> We want to be in an stable financial situation to have a family while
        we are still young. <br />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'LifeGoalsItems',
  props: {
    classes: classes,
  },
};
</script>
