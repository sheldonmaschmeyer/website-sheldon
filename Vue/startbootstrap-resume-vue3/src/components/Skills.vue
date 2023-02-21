<template>
  <section id="skills" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>
      <div class="subheading mb-3">Programming Languages & Tools</div>
      <ul class="fa-ul mb-0">
        <li v-for="(workflow, index) in workflowList" :key="index" class="d-flex align-items-center">
          <font-awesome-icon :icon="['fas', 'check']" class="fa-li"></font-awesome-icon>
          {{ workflow }}
        </li>
      </ul>
      <ul class="list-inline dev-icons pt-4">
        <li class="list-inline-item" v-for="(tools, index) in toolsList" :key="index" style="cursor: pointer">
          <font-awesome-icon :icon="['fab', tools.icon]" v-tooltip="tools.name"></font-awesome-icon>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    name: "SkillsSection",
    data() {
        return {
            toolsList: [
                {
                    name: "HTML5",
                    icon: "html5"
                },
                {
                    name: "CSS3",
                    icon: "css3-alt"
                },
                {
                    name: "Javascript",
                    icon: "js-square"
                },
                {
                    name: "Angular",
                    icon: "angular"
                },
                {
                    name: "React",
                    icon: "react"
                },
                {
                    name: "NodeJS",
                    icon: "node-js"
                },
                {
                    name: "SASS",
                    icon: "sass"
                },
                {
                    name: "LESS",
                    icon: "less"
                },
                {
                    name: "WordPress",
                    icon: "wordpress"
                },
                {
                    name: "Gulp",
                    icon: "gulp"
                },
                {
                    name: "Grunt",
                    icon: "grunt"
                },
                {
                    name: "NPM",
                    icon: "npm"
                }
            ],
            workflowList: [
                "Mobile-First, Responsive Design",
                "Cross Browser Testing & Debugging",
                "Cross Functional Teams",
                "Agile Development & Scrum"
            ]
        };
    }
};
</script>