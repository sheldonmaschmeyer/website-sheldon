<template>
  <section id="about" :class="[...classes.section, 'text-white']">
    <div class="w-100">
      <h1 class="pb-0 text-white w-100">
        {{ name.first }} {{ name.middle }}
        <span style="color: lightblue">{{ name.last }}</span>
      </h1>
      <div class="subheading mb-4">
        {{ address.street }}, {{ address.city }}, {{ address.province }},
        {{ address.country }} {{ address.postalCode }}
        <div>
          {{ telephone }} &middot;
          <a
            :href="'mailto:' + email"
            style="color: white; text-decoration: none"
            >{{ email }}</a
          >
        </div>
      </div>
      <p class="lead mb-4 ps-4">
        • Government cleared full stack developer. <br />
        • Skilled in creating analytic tools for the Government and private
        sector. <br />
        • Consummate team player with advanced problem-solving skills.
      </p>
      <div>
        <div class="social-icons pe-3 text-center" style="float: left">
          Professional Network <br />
          <a
            v-for="(social, index) in socialList"
            :key="index"
            :href="social.url"
            class="icon"
          >
            <div v-tooltip.bottom-start="social.name">
              <font-awesome-icon
                :icon="['fab', social.icon]"
              ></font-awesome-icon>
            </div>
          </a>
        </div>
        <div class="social-icons ps-3 text-center" style="float: left">
          Latest Résumé<br />
          <a
            v-for="(resume, index) in resumeFormat"
            :key="index"
            :href="resume.url"
            class="icon"
          >
            <div v-tooltip.bottom-start="resume.name">
              <font-awesome-icon
                :icon="['fas', resume.icon]"
              ></font-awesome-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { classes, name } from '../definitions/props';
export default {
  name: 'AboutSection',
  props: {
    name: name,
    classes: classes,
  },
  data() {
    return {
      address: {
        street: '515-740 Springland Drive',
        city: 'Ottawa',
        province: 'Ontario',
        country: 'Canada',
        postalCode: 'L5L-2Y4',
      },
      telephone: '+1 613-889-4320',
      email: 'sheldon@maschmeyer.ca',
      socialList: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/sheldonmaschmeyer/',
          icon: 'linkedin',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/sheldonmaschmeyer',
          icon: 'github',
        },
      ],
      resumeFormat: [
        {
          name: 'Word Format',
          url: './resumes/SoftwareDeveloperResume.docx',
          icon: 'file-word',
        },
        {
          name: 'PDF Format',
          url: './resumes/SoftwareDeveloperResume.pdf',
          icon: 'fa-file-pdf',
        },
      ],
    };
  },
};
</script>

<style>
.icon {
  filter: brightness(100%);
}
.icon:hover {
  filter: brightness(80%);
}
</style>
