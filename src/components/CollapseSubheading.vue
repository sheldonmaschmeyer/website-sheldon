<template>
  <a
    class="subheading mb-3 summary"
    :href="target"
    data-bs-toggle="collapse"
    :data-bs-target="target"
    style="text-decoration: none"
    @click="() => (active = !active)"
  >
    <font-awesome-icon v-if="!active" :icon="['far', 'square-caret-right']" />
    <font-awesome-icon v-if="active" :icon="['far', 'square-caret-down']" />
    {{ headingText }}
  </a>
</template>

<script lang="ts">
export default {
  name: 'CollapseSubheading',
  props: {
    headingText: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
