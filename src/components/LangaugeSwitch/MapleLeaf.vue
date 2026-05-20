<template>
  <span class="me-1">
    <font-awesome-icon
      :icon="['fab', 'canadian-maple-leaf']"
      :color="iconColor"
    />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  redWhite?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  redWhite: true,
});

const iconColor = computed(() => {
  return props.redWhite === true ? 'red' : 'white';
});
</script>
