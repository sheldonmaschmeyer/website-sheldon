/** Alpha-El Inc. Chief Technology Officer Experience details section */
<template>
  <div class="pt-2">
    <div class="pb-4">{{ $t('experience.alphaElChief.intro1') }}</div>
    {{ $t('experience.alphaElChief.intro2') }}
    <div class="pt-3 container-fluid">
      <div
        v-for="(detail, i) in $tm('experience.alphaElChief.details')"
        :key="i"
        class="row gx-2 mb-2"
      >
        <span class="col-auto">&#8226;</span>
        <span class="col">{{ detail }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AlphaElChief',
};
</script>
