<template>
  <div :class="languageSwitchMobileClass">
    <LanguageSwitchSelector />
  </div>
</template>

<script lang="ts">
import LanguageSwitchSelector from './LanguageSwitchSelector.vue';

export default {
  name: 'LanguageSwitchMobile',
  components: {
    LanguageSwitchSelector,
  },
  data() {
    return {
      languageSwitchMobileClass:
        'd-block d-lg-none position-absolute top-0 end-0 p-2 pe-3 z-3 me-5 mt-1',
    };
  },
};
</script>
