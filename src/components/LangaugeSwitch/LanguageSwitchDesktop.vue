<template>
  <span :class="languageSwitchDesktopClass">
    <LanguageSwitchSelector />
  </span>
</template>

<script lang="ts">

import LanguageSwitchSelector from './LanguageSwitchSelector.vue';

export default {
  name: 'LanguageSwitchDesktop',
  components: {
    LanguageSwitchSelector
  },
  data() {
    return {
      languageSwitchDesktopClass: 'd-none d-lg-block position-absolute top-0 end-0 p-2 z-3 me-2',
    };
  }
};
</script>
