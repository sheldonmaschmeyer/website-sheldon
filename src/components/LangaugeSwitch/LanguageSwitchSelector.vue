<template>
  <div :class="selectorClass" role="group" aria-label="Language Selector">
    <button
      type="button"
      class="btn py-0 px-2 fw-bold text-uppercase"
      :class="locale === 'en' ? selectedLanguageClass : unselectedLanguageClass"
      @click="setLanguage('en')"
    >
      <MapleLeaf :red-white="locale === 'en' ? true : false" />
      EN
    </button>
    <button
      type="button"
      class="btn py-0 px-2 fw-bold text-uppercase"
      :class="locale === 'fr' ? selectedLanguageClass : unselectedLanguageClass"
      @click="setLanguage('fr')"
    >
      <MapleLeaf :red-white="locale === 'fr' ? true : false" />
      FR
    </button>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';

import MapleLeaf from './MapleLeaf.vue'; // 1. Static Import

export default {
  name: 'LanguageSelector',
  components: {
    MapleLeaf,
  },
  props: {
    selectorClass: {
      type: String,
      default: 'btn-group btn-group-sm',
    },
  },
  setup() {
    const { locale } = useI18n();

    const setLanguage = (lang: 'en' | 'fr') => {
      locale.value = lang;
      localStorage.setItem('user-lang', lang);
    };

    return {
      locale,
      setLanguage,
    };
  },
  data() {
    return {
      selectedLanguageClass: 'btn-light text-dark',
      unselectedLanguageClass: 'btn-outline-light text-white unselected-lang',
    };
  },
};
</script>
<style scoped>
.unselected-lang:hover {
  color: red !important; /* Forces the text to black on hover */
}
</style>
