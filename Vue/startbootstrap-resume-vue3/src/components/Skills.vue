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
                  name: "Yarn",
                  icon: "yarn"
                },
                {
                    name: "NPM",
                    icon: "npm"
                }
            ],
            workflowList: [
                "React.JS, Vue.JS, TypeScript, JavaScript, SASS (with CSS Modules), HTML5, Bootstrap-5.2, PHP.",
                "Git for collaboration and version control.",
                "Databases: PostgreSQL, Oracle, mySQL, MongoDB.",
                "Linux and Windows.",
                "C++ and Java (Carleton U courses).",
                "Windows (Batch scripting) and Linux (Bash scripting).",
                "OS Kernel programming on Linux.",
                "Computer/Network Security: Burp, Wireshark, and Packet Tracing.",
                "MS Office programs including advanced skills such as physics tables with Excel.",
                "Adobe Photoshop, Animate and Premier."
            ]
        };
    }
};
</script>