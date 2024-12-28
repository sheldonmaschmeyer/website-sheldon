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
        Orville, House of the Dragon, Doctor Who). I read sci-fi and non-fiction
        books.
      </div>

      <div>I frequently watch sci-fi with my friends.</div>

      <div>
        I daily keep up-to-date with current events. I frequently watch The
        Daily Show with John Stewart, GPS with Fareed Zakaria, and diversity of
        news programs like CBC, CTV, CNN, DW News and, MSNBC.
      </div>

      <div>
        I also play video games during my free time, and I occassionally play
        chess and other board games.
      </div>

      <div>When I was a kid, I joined Scouts Canada from 1992 - 2003.</div>
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
