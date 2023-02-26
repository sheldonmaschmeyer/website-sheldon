<template>
  <div :class="classes.item">
    <div class="resume-content">
      <h3 class="mb-0">BS: Computer Science (Minor Sociology)</h3>
      <CollapseSubheading
        heading-text="Carleton University"
        target="#compSci"
      />
      <div id="compSci" class="collapse">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">12.00 Points</th>
              <th scope="col">4.0 Points</th>
              <th scope="col">Alpha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Major</td>
              <td>7.86</td>
              <td>3.0</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Minor</td>
              <td>7.75</td>
              <td>3.0</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Overall</td>
              <td>7.48</td>
              <td>3.0</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>
        Conversion from Carleton U 12.00 point to 4.0 point system:
        <a href="https://gradecalc.info/ca/on/carleton/gradeconv.pl">
          https://gradecalc.info/ca/on/carleton/gradeconv.pl
        </a>
      </div>
    </div>
    <div class="resume-date text-md-right">
      <span class="text-primary">September 2015 - June 2019</span>
    </div>
  </div>
  <div :class="classes.item">
    <div class="resume-content">
      <h3 class="mb-0">BS: Integrated Science and Technology</h3>
      <CollapseSubheading heading-text="Carleton University" target="#sci" />
      <div id="sci" class="collapse">
        <table class="table dont-print">
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">12.00 Points</th>
              <th scope="col">4.0 Points</th>
              <th scope="col">Alpha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Major</td>
              <td>6.11</td>
              <td>2.3</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>Concentration</td>
              <td>8.60</td>
              <td>3.3</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>Overall</td>
              <td>6.54</td>
              <td>2.7</td>
              <td>B-</td>
            </tr>
          </tbody>
        </table>
        Conversion from Carleton U 12.00 point to 4.0 point system:
        <a href="https://gradecalc.info/ca/on/carleton/gradeconv.pl">
          https://gradecalc.info/ca/on/carleton/gradeconv.pl
        </a>
      </div>
    </div>
    <div class="resume-date text-md-right">
      <span class="text-primary">September 2009 - June 2014</span>
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
