<template>
  <div :class="classes.item">
    <div class="resume-content white-space: pre-wrap;">
      Recreational racket sports (badminton or tennis) and jogging.
      <div>
        Cycle as a means of transportation more than recreation (Uber used more
        frequently).
      </div>

      <div>
        Favourite genre is sci-fi and fantasy (i.e. new Star Trek, Star Wars,
        Orville, House of the Drago, Doctor Who).
      </div>

      <div>
        I frequently watch sci-fi with my girlfriend and, a nearby friend (a
        former housemate who is a laboratory coordinator).
      </div>

      I daily keep up-to-date with current events. Hangout with friends and
      girlfriend. When I was a kid, Scouts Canada from 1992 - 2003.
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';

export default {
  name: 'ActivitiesItems',
  props: {
    classes: classes,
  },
};
</script>
