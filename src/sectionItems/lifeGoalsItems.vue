<template>
  <div>
    <CollapseSubheading heading-text="High Priority" target="#highPriority" />
    <div id="highPriority" class="collapse ps-4 show">
      • Reduce debt, while slowly paying off student loans. <br />
      • A new career employment opportunity must be a steady dependable
      pay-cheque. Preferably not as a contractor but with benefits at $75K+ per
      annam.
    </div>
  </div>
  <div>
    <CollapseSubheading heading-text="This year" target="#shortTerm" />
    <div id="shortTerm" class="collapse ps-4 show">
      • To get married and start a family.<br />
      <span class="lf"
        >->Plan a wedding in Canada and Philippines, my partner's childhood
        home.
      </span>
    </div>
  </div>
  <div>
    <CollapseSubheading
      heading-text="One to three years"
      target="#mediumTerm"
    />
    <div id="mediumTerm" class="collapse ps-4 show">
      • Pay-off Credit Card: <br />
      <span class="lf"
        >-> Used for educational expenses, a small business and, other personal
        expenses.</span
      ><br />
      • Own a house in Ottawa or Toronto area. <br />
      • A first mortgage which, is an investment. <br />
      <span class="lf"
        >->If getting a variable rate mortgage during high inflation: </span
      ><br />
      <span class="lf"
        ><span class="lf"
          >a) The base value of the property will be lower.</span
        ></span
      ><br />
      <span class="lf"
        ><span class="lf"
          >b) Lower monthly payments over time so, a better return on
          investment.
        </span></span
      ><br />
    </div>
  </div>
  <div>
    <CollapseSubheading heading-text="Within seven years" target="#longTerm" />
    <div id="longTerm" class="collapse ps-4 show">
      • Pay off student loan. Currently renewing repayment assistance. <br />
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
