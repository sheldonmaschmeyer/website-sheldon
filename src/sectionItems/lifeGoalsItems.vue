<template>
  <div>
    <CollapseSubheading heading-text="High Priority" target="#highPriority" />
    <div id="highPriority" class="collapse ps-4">
      • Reduce debit. <br />
      • When I started at ANVIL my credit card debit was above $30K. When I left
      ANVIL, my debit was under $10K. <br />
      • For risk and adventure, I have invested in Alpha-El Inc. I have taken
      temporary random pay-cuts and skipped payments. I am paid between $0 and
      $6,000 GROSS monthly. Therefore, my debit increased to ~$45K. <br />
      • A new career employment opportunity must be a steady dependable
      pay-cheque. Preferably not as a contractor but with benefits at $75K+ per
      annam.
    </div>
  </div>
  <div>
    <CollapseSubheading heading-text="This year" target="#shortTerm" />
    <div id="shortTerm" class="collapse ps-4">
      • An economical electric vehicle <br />
      <span class="lf"
        >-> My partner and I would find a vehicle convenient, especially when
        starting a family. The current apartment build we are in has electric
        charging stations
      </span>
    </div>
  </div>
  <div>
    <CollapseSubheading
      heading-text="One to three years"
      target="#mediumTerm"
    />
    <div id="mediumTerm" class="collapse ps-4">
      • Pay-off Credit Card: <br />
      <span class="lf"
        >-> Used for educational expenses, a small business and, other personal
        expenses.</span
      ><br />
      • Start a family. <br />
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
    <div id="longTerm" class="collapse ps-4">
      • Pay off student loan. Currently renewing repayment assistance.<br />
      • Invest for family and old age.<br />
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
