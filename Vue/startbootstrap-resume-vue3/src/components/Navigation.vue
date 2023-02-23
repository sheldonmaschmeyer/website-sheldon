<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand" href="#about">
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
          title: "Education",
          url: "#education"
        },
        {
          title: "Skills",
          url: "#skills"
        },
        {
          title: "Interests",
          url: "#interests"
        },
      ]
    };
  },
};
</script>