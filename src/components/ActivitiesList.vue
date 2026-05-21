/** Activities List component: A reusable component that takes in a translation
key and renders a list of activities based on the translation data. */
<template>
  <ul class="activities-list">
    <template v-for="(item, index) in listData" :key="index">
      <!-- Render simple string items -->
      <li v-if="typeof item === 'string'">
        {{ item }}
      </li>

      <!-- Render nested arrays as sub-lists -->
      <ul v-else-if="Array.isArray(item)" class="sub-activities">
        <li v-for="(subItem, subIndex) in item" :key="subIndex">
          {{ subItem }}
        </li>
      </ul>
    </template>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  tKey: {
    type: String,
    required: true,
  },
});

const { tm } = useI18n();

const listData = computed(() => {
  // Dependency on 'locale' triggers reactivity when language changes
  const result = tm(props.tKey);

  // Return the result if it's an array, otherwise empty array to prevent crashes
  return Array.isArray(result) ? result : [];
});
</script>
