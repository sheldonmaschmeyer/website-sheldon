<template>
  <div class="subheading mb-3">Programming Languages & Tools</div>
  <ul class="fa-ul mb-0">
    <li
      v-for="(workflow, index) in workflowList"
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
      toolsList: [
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
          name: 'Linux OS',
          icon: 'linux',
          library: 'fab',
        },
        {
          name: 'Windows OS',
          icon: 'windows',
          library: 'fab',
        },
        {
          name: 'Network security: Burp, Wireshark tools',
          icon: 'network-wired',
          library: 'fas',
        },
        {
          name: 'Shell Script, Bash, Batch, Terminal, CMD, PowerShell',
          icon: 'terminal',
          library: 'fas',
        },
        {
          name: 'PostgreSQL, Oracle, mySQL, MongoDB, Access, SPSS', // TODO: Access and SPSS should be under datascience along with R
          icon: 'database',
          library: 'fas',
        },
        {
          name: 'Office: Word, Excel, Outlook, PowerPoint, Publisher',
          icon: 'microsoft',
          library: 'fab',
        },
        {
          name: 'LaTeX: Used for all computer science documents',
          icon: 'Icons/latex.png',
          image: true,
        },
      ],
      workflowList: [
        'React.JS, Vue.JS, TypeScript, JavaScript, SASS (with CSS Modules), HTML5, Bootstrap-5.2, PHP.',
        'Git for collaboration and version control.',
        'Databases: PostgreSQL, Oracle, mySQL, MongoDB.',
        'Linux and Windows.',
        'C++ and Java (Carleton U courses).',
        'Windows (Batch scripting) and Linux (Bash scripting).',
        'OS Kernel programming on Linux.',
        'Computer/Network Security: Burp, Wireshark, and Packet Tracing.',
        'MS Office programs including advanced skills such as physics tables with Excel.',
        'Adobe Photoshop, Animate and Premier.',
      ],
    };
  },
};
</script>
