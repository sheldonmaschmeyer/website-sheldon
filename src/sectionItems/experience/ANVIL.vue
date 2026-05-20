<template>
  <div class="pt-2">
    {{ $t('experience.anvil.intro1') }}
    <div class="pt-3 container-fluid">
      <div
        v-for="(detail, i) in $tm('experience.anvil.details')"
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
  name: 'ANVILSummary',
};
</script>
