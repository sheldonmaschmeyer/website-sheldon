<template>
  <div>
    <CollapseSubheading heading-text="High Priority" target="#highPriority" />
    <div id="highPriority" class="collapse ps-4 show">
      • Reduce debt, while slowly paying off student loans. <br />
      <span class="lf">
        -> Credit cards debt used for our educational expenses, business and,
        other personal expenses. <br />
        -> My current full-time job, paid as a contractor, is a start-up so
        monthly income fluctuates. As the business scales up, income
        fluctuations may reduce. <br />
        -> Build an emergency fund of 3-6 months of living expenses. <br />
        -> Build a retirement fund through RRSP and TFSA accounts. <br />
        -> Invest in stocks and bonds. <br />
        -> Continue professional development to increase my skill set and value
        in the job market. <br />
        -> Network with professionals and explore new opportunities and boldly
        stay updated with industry trends. <br />
        -> Maintain a healthy work-life balance to ensure long-term career
        satisfaction and personal well-being. <br />
      </span>
    </div>
  </div>
  <div>
    <CollapseSubheading heading-text="This year" target="#shortTerm" />
    <div id="shortTerm" class="collapse ps-4 show">
      • I am engaged to get married.<br />
      <span class="lf">
        ->Plan a wedding in Canada and Philippines, my fiancée's childhood home.
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
