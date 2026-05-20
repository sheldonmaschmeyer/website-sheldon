<template>
  <div class="subheading mb-3">{{ $t('skillsItems.heading') }}</div>
  <ul class="fa-ul mb-0">
    <li
      v-for="(workflow, index) in $tm('skillsItems.workflowList')"
      :key="index"
      class="d-flex align-items-center"
    >
      <font-awesome-icon :icon="['fas', 'check']" class="fa-li" />
      {{ workflow }}
    </li>
  </ul>
  <ul class="list-inline dev-icons pt-4">
    <li
      v-for="(tools, index) in toolsList"
      :key="index"
      class="list-inline-item"
      style="cursor: pointer"
    >
      <img
        v-if="tools.image"
        v-tooltip="tools.name"
        class="image-icon"
        :src="tools.icon"
        alt="tools icon"
      />
      <font-awesome-icon
        v-else-if="tools.icon"
        v-tooltip="tools.name"
        :icon="[tools.library, tools.icon]"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { classes } from '../definitions/props';

export default {
  name: 'SkillsItems',
  props: {
    classes: classes,
  },
  data() {
    return {
      // You can keep data() empty or add other reactive states here if needed
    };
  },
  computed: {
    toolsList() {
      return [
        {
          name: 'HTML5',
          icon: 'html5',
          library: 'fab',
        },
        {
          name: 'CSS3',
          icon: 'css3-alt',
          library: 'fab',
        },
        {
          name: 'Javascript',
          icon: 'js-square',
          library: 'fab',
        },
        {
          name: 'React',
          icon: 'react',
          library: 'fab',
        },
        {
          name: 'NodeJS',
          icon: 'node-js',
          library: 'fab',
        },
        {
          name: 'SASS',
          icon: 'sass',
          library: 'fab',
        },
        {
          name: 'Yarn',
          icon: 'yarn',
          library: 'fab',
        },
        {
          name: 'NPM',
          icon: 'npm',
          library: 'fab',
        },
        {
          name: 'Python',
          icon: 'python',
          library: 'fab',
        },
        {
          name: this.$t('skillsItems.toolsList.linux'),
          icon: 'linux',
          library: 'fab',
        },
        {
          name: this.$t('skillsItems.toolsList.windows'),
          icon: 'windows',
          library: 'fab',
        },
        {
          name: this.$t('skillsItems.toolsList.network'),
          icon: 'network-wired',
          library: 'fas',
        },
        {
          name: this.$t('skillsItems.toolsList.terminal'),
          icon: 'terminal',
          library: 'fas',
        },
        {
          name: this.$t('skillsItems.toolsList.database'), // TODO: Access and SPSS should be under datascience along with R
          icon: 'database',
          library: 'fas',
        },
        {
          name: this.$t('skillsItems.toolsList.microsoft'),
          icon: 'microsoft',
          library: 'fab',
        },
        {
          name: this.$t('skillsItems.toolsList.latex'),
          icon: 'Icons/latex.png',
          image: true,
        },
      ];
    },
  },
};
</script>
