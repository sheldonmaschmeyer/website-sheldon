<template>
  <div id="app">
    <NavigationComponent :name="name" />
    <b-container class="p-0" fluid>
      <AboutSection :name="name" />
      <BorderSpacer />
      <ExperienceSection />
      <BorderSpacer />
      <EducationSection />
      <BorderSpacer />
      <SkillsSection />
      <BorderSpacer />
      <InterestsSection />
      <BorderSpacer />
      <AwardsSection />
    </b-container>
  </div>
</template>

<script>
import smoothScroll from 'smooth-scroll';

import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import SkillsSection from "@/components/Skills";
import InterestsSection from "@/components/Interests";
import AwardsSection from "@/components/Awards";
import NavigationComponent from "@/components/Navigation";
import BorderSpacer from "@/components/Border";

export default {
  name: "app",
  data() {
    return {
      name: {
        first: "Clarence",
        last: "Taylor"
      }
    }
  },
  components: {
    AboutSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    InterestsSection,
    AwardsSection,
    NavigationComponent,
    BorderSpacer
  },
  created: function() {
    var scroll = new smoothScroll('a[href*="#"]', {
      updateURL: false
    })
  }
};
</script>
