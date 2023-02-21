import { createApp } from 'vue';
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faCss3Alt, faJsSquare, faHtml5, faReact, faNodeJs, faAngular, faLess, faSass, faWordpress, faGulp, faGrunt, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

import {
    // Directives
    VTooltip,
    VClosePopper,
    // Components
    Dropdown,
    Tooltip,
    Menu
  } from 'floating-vue'
dom.watch()

library.add(faLinkedin, faGithub, faFilePdf, faFileWord, faCss3Alt, faJsSquare, faHtml5, faReact, faNodeJs, faAngular, faLess, faSass, faWordpress, faGulp, faGrunt, faNpm, faCheck)

// Main SCSS File
import './assets/scss/resume.scss';
import 'floating-vue/dist/style.css';

createApp(App)
    .directive('tooltip', VTooltip)
    .directive('close-popper', VClosePopper)
    .component('VDropdown', Dropdown)
    .component('VTooltip', Tooltip)
    .component('VMenu', Menu)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
