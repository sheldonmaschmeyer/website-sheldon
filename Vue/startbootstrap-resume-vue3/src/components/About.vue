<template>
  <section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center text-white">
    <div class="w-100">
      <h1 class="mb-0 text-white">
        {{ name.first }} {{name.middle}}
        <span style="color: turquoise">{{ name.last }}</span>
      </h1>
      <div class="subheading mb-4">
        {{ address.street }}, {{ address.city }}, {{ address.province }}, {{address.country}} {{ address.postalCode }}
        <div>{{ telephone }} &middot; <a :href="'mailto:' + email" style="color: white; text-decoration: none;">{{ email }}</a></div>
      </div>
      <p
        class="lead mb-4 ps-4"
      >
        • Government cleared full stack developer. <br>
        • Skilled in creating analytic tools for the Government and private sector. <br>
        • Consummate team player with advanced problem-solving skills.
      </p>
      <div class="social-icons pe-5" style=" float: left">
        Professional Network <br>
        <a :href="social.url" v-for="(social, index) in socialList" :key="index">
          <font-awesome-icon :icon="['fab', social.icon]"></font-awesome-icon>
        </a>
      </div>
      <div class="social-icons ps-5" style="float: left">
        Latest Résumé <br>
        <a :href="resume.url" v-for="(resume, index) in resumeFormat" :key="index">
          <font-awesome-icon :icon="['fas', resume.icon]"></font-awesome-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    name: Object
  },
  data() {
    return {
      address: {
        street: "515-740 Springland Drive",
        city: "Ottawa",
        province: "Ontario",
        country: "Canada",
        postalCode: "L5L-2Y4"
      },
      telephone: "+1 613-889-4320",
      email: "sheldon@maschmeyer.ca",
      socialList: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sheldonmaschmeyer/",
          icon: "linkedin"
        },
        {
          name: "GitHub",
          url: "https://github.com/sheldonmaschmeyer",
          icon: "github"
        },
      ],
      resumeFormat: [
        {
          name: "Word",
          url: "https://github.com/sheldonmaschmeyer/Resumes/raw/master/SoftwareDeveloperResume.docx",
          icon: "file-word"
        },
        {
          name: "PDF",
          url: "https://github.com/sheldonmaschmeyer/Resumes/raw/master/SoftwareDeveloperResume.pdf",
          icon: "fa-file-pdf"
        }
      ]
    };
  }
};
</script>