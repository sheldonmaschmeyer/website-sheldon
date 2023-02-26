<template>
  <a class="navbar-brand" href="#about">
    <span class="d-block d-lg-none ps-3"
      >{{ name.first }} {{ name.middle }} {{ name.last }}</span
    >
    <span class="d-none d-lg-block">
      <img
        class="img-fluid img-profile rounded-circle mx-auto mb-2"
        src="https://maschmeyer.ca/images/profile.jpg"
        :alt="name.first + ' ' + name.middle + ' ' + name.last"
      />
    </span>
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navContent"
    aria-controls="navContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navContent" class="navbar-collapse collapse">
    <div class="navbar-nav" data-bs-spy="scroll" data-bs-smooth-scroll="true">
      <li
        v-for="(navigation, index) in navigationList"
        :key="index"
        class="nav-item"
      >
        <a class="nav-link scrollspy" :href="navigation.url">
          <span class="d-lg-none ps-3"></span>{{ navigation.title }}
        </a>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { useWindowSize } from 'vue-window-size';

import { name } from '../definitions/props';
export default {
  name: 'NavigationComponent',
  props: {
    name: name,
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  data() {
    return {
      navigationList: [
        {
          title: 'Executive Summary',
          url: '#about',
        },
        {
          title: 'Experience',
          url: '#experience',
        },
        {
          title: 'Skills',
          url: '#skills',
        },
        {
          title: 'Activities',
          url: '#activities',
        },
        {
          title: 'Life Goals',
          url: '#lifeGoals',
        },
        {
          title: 'Volunteering & Donations',
          url: '#volunteering',
        },
        {
          title: 'Education',
          url: '#education',
        },
        // TODO: More than just a link, give some background info here
        {
          title: '23andMe Ancestry Overview',
          url: 'https://you.23andme.com/published/reports/e670fc51bbde41be9e6a9fa9c165bc9d/?share_id=dc6b9b5f1627447e',
        },
      ],
    };
  },
};
</script>
