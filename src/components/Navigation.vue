<template>
  <LanguageSwitchMobile />

  <a class="navbar-brand" href="#executiveSummary">
    <span class="d-block d-lg-none ps-3 navigation-mobile-name">
      {{ name.first }} {{ name.middle }} {{ name.last }}
    </span>

    <LanguageSwitchDesktop />

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
    <span class="navbar-toggler-icon" />
  </button>

  <div id="navContent" class="navbar-collapse collapse">
    <div class="navbar-nav" data-bs-spy="scroll" data-bs-smooth-scroll="true">
      <li
        v-for="(navigation, index) in navigationList"
        :key="index"
        class="nav-item"
      >
        <a class="nav-link scrollspy" :href="navigation.url">
          <span class="d-lg-none ps-3" />
          {{ navigation.title }}
        </a>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { useWindowSize } from 'vue-window-size';

import { name } from '../definitions/props';
import { LanguageSwitchDesktop, LanguageSwitchMobile } from './LangaugeSwitch';

export default {
  name: 'NavigationComponent',
  components: {
    LanguageSwitchMobile,
    LanguageSwitchDesktop,
  },
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
  computed: {
    // By placing this in global options computed, Vue tracks global state changes
    navigationList() {
      return [
        {
          title: this.$t('navigation.ExecutiveSummary'),
          url: '#executiveSummary',
        },
        { title: this.$t('navigation.Experience'), url: '#experience' },
        { title: this.$t('navigation.Skills'), url: '#skills' },
        { title: this.$t('navigation.Activities'), url: '#activities' },
        { title: this.$t('navigation.LifeGoals'), url: '#lifeGoals' },
        {
          title: this.$t('navigation.VolunteerDonations'),
          url: '#volunteering',
        },
        { title: this.$t('navigation.Education'), url: '#education' },
        { title: this.$t('navigation.Ancestry'), url: '#ancestry' },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.navigation-mobile-name {
  display: inline-block;
  font-size: 18pt;
  line-height: 1.1;
  padding-right: 4rem;
  word-break: break-word;
}

@media (max-width: 550px) {
  .navigation-mobile-name {
    font-size: 10pt;
    padding-right: 4.5rem;
  }
}
</style>
