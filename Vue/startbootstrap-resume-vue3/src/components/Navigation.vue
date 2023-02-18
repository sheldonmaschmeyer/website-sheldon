<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#about">
      <span class="d-block d-lg-none ps-3">{{name.first}} {{name.middle}} {{name.last}}</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="images/profile.jpg"
          :alt="name.first + ' ' + name.middle + ' ' + name.last"
        />
      </span>
    </a>
    <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggleNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="collapseNav ? 'collapse' : ''" class="navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav">
        <li class="nav-item"
          v-for="(navigation, index) in navigationList"
          :key="index">
          <a class="nav-link js-scroll-trigger scrollspy" :href="navigation.url" v-on:click="collapseNav = true">
            <span class="d-lg-none ps-3"></span>{{ navigation.title }}
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
    name: Array
  },
  methods: {
    toggleNav() {
      this.collapseNav = !this.collapseNav;
    }
  },
  data() {
    return {
      collapseNav: true,
      navigationList: [
        {
          title: "About",
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
        {
          title: "Awards",
          url: "#awards"
        }
      ]
    };
  },
};
</script>