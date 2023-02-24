<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: transparent" id="sideNav">
    <video-background 
          src="background.mp4"
          style="height: 110%; margin-top: -2em; margin-bottom: -2em"
          overlay="linear-gradient(45deg,#FF2980B9,#6DD5FAE6)"
    >
    <a class="navbar-brand" style="margin-top: 100%; margin-left: 15%" href="#about">
      <span class="d-block d-lg-none ps-3">{{name.first}} {{name.middle}} {{name.last}}</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="images/profile.jpg"
          :alt="name.first + ' ' + name.middle + ' ' + name.last"
        />
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navContent">
      <div class="navbar-nav" data-bs-spy="scroll" data-bs-smooth-scroll="true">
        <li class="nav-item"
          v-for="(navigation, index) in navigationList"
          :key="index">
          <a class="nav-link scrollspy" :href="navigation.url">
            <span class="d-lg-none ps-3"></span>{{navigation.title}}
          </a>
        </li>
      </div>
    </div>
    </video-background>
  </nav>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {
    name: Object
  },
  data() {
    return {
      navigationList: [
        {
          title: "Executive Summary",
          url: "#about"
        },
        {
          title: "Experience",
          url: "#experience"
        },
        {
          title: "Skills",
          url: "#skills"
        },
        {
          title: 'Activities',
          url: '#activities'
        },
        {
          title: 'Life Goals',
          url: '#lifeGoals'
        },
        {
          title: "Volunteering & Donations",
          url: "#volunteering"
        },
        {
          title: "Education",
          url: "#education"
        },
        // TODO: More than just a link, give some background info here
        {
          title: '23andMe Ancestry Overview',
          url: 'https://you.23andme.com/published/reports/e670fc51bbde41be9e6a9fa9c165bc9d/?share_id=dc6b9b5f1627447e'
        }
      ]
    };
  },
};
</script>