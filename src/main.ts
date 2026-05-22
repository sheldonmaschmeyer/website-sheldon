import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import i18n from './i18n';

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCheck,
  faNetworkWired,
  faTerminal,
  faDatabase,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquareCaretRight,
  faSquareCaretDown,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faYarn,
  faNpm,
  faPython,
  faLinux,
  faWindows,
  faMicrosoft,
  faCanadianMapleLeaf,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  // Components
  Dropdown,
  Menu,
  Tooltip,
  vClosePopper,
  // Directives
  vTooltip,
} from 'floating-vue';
import { createApp } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';

import App from './App.vue';
import { CollapseSubheading } from './components';
import { SectionContainer } from './containers';
dom.watch();

library.add(
  faCheck,
  faNetworkWired,
  faTerminal,
  faDatabase,
  faFilePdf,
  faSquareCaretRight,
  faSquareCaretDown,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faYarn,
  faNpm,
  faPython,
  faLinux,
  faWindows,
  faMicrosoft,
  faCanadianMapleLeaf,
  faGithub,
  faLinkedin,
);

// Main SCSS File
import './assets/scss/resume.scss';
import 'floating-vue/dist/style.css';

createApp(App)
  .use(i18n)
  .directive('tooltip', vTooltip)
  .directive('close-popper', vClosePopper)
  .component('VDropdown', Dropdown)
  .component('VTooltip', Tooltip)
  .component('VMenu', Menu)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('video-background', VideoBackground)
  .component('CollapseSubheading', CollapseSubheading)
  .component('SectionContainer', SectionContainer)
  .mount('#app');
