<template>
  <section id="lifeGoals" :class="classes.section">
    <div class="w-100">
      <h2 class="pb-5">Life Goals</h2>
      <div>
        <a
          class="subheading pb-3 summary"
          href="#highPriority"
          data-bs-toggle="collapse"
          style="text-decoration: none"
        >
          High Priority
        </a>
        <div id="highPriority" class="collapse ps-5">
          • A new career employment opportunity.
        </div>
      </div>
      <div>
        <a
          class="subheading pb-3 summary"
          href="#shortTerm"
          data-bs-toggle="collapse"
          style="text-decoration: none"
        >
          This year
        </a>
        <div id="shortTerm" class="collapse ps-5">
          • G Drivers License: <br />
          <span class="lf"
            >-> Currently girlfriend and I enrolled in Young Drivers Gold
            Automatic, in-car lessons.</span
          >
          <br />
          <span class="lf"
            >-> The pandemic and a focus on daytime job has slowed down the test
            schedule. </span
          ><br />
          <span class="lf">-> We have a G2. </span><br />
          <span class="lf">-> G in about a year.</span><br />
          • Move into larger apartment or small town-house: <br />
          <span class="lf"
            >-> A studio (one large room) apartment is too small for regular
            co-habitation.</span
          ><br />
          <span class="lf"
            >-> We will likely move into a larger apartment in the same area
            relatively soon.</span
          ><br />
          • Buy an vehicle that is economical and, causes the lest environmental
          damage. <br />
          <p></p>
        </div>
      </div>
      <div>
        <a
          class="subheading pb-3 summary"
          href="#mediumTerm"
          data-bs-toggle="collapse"
          style="text-decoration: none"
        >
          Within one to three years
        </a>
        <div id="mediumTerm" class="collapse ps-5">
          • Pay-off Credit Card: <br />
          <span class="lf"
            >-> Used for educational expenses, a small business and, other
            personal expenses.</span
          ><br />
          <span class="lf"
            >-> Credit card debit reduced from ~$30K when graduated to now
            ~$15K.</span
          >
          <br />
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
        <a
          class="subheading pb-3 summary"
          href="#longTerm"
          data-bs-toggle="collapse"
          style="text-decoration: none"
        >
          Within seven years
        </a>
        <div id="longTerm" class="collapse ps-5">
          • Pay off student loan: Currently at ~$48K.<br />
        </div>
      </div>
      <div>
        <a
          class="subheading pb-3 summary"
          href="#longerTerm"
          data-bs-toggle="collapse"
          style="text-decoration: none"
        >
          Longer-Term
        </a>
        <div id="longerTerm" class="collapse ps-5">
          • Invest: <br />
          <span class="lf"
            >-> Using the equivalent of student loan monthly payment: ~$585 per
            month (adjusted for inflation)
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'LifeGoalsSection',
  props: {
    classes: classes,
  },
};
</script>
