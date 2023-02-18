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

dom.watch()

library.add(faLinkedin, faGithub, faFilePdf, faFileWord, faCss3Alt, faJsSquare, faHtml5, faReact, faNodeJs, faAngular, faLess, faSass, faWordpress, faGulp, faGrunt, faNpm, faCheck)

// Main SCSS File
import './assets/scss/resume.scss'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
