import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  // Components
  Dropdown,
  Menu,
  Tooltip,
  VClosePopper,
  // Directives
  VTooltip,
} from 'floating-vue';
import { createApp } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';

import App from './App.vue';
import CollapseSubheading from './components/CollapseSubheading.vue';
import SectionContainer from './containers/SectionContainer.vue';
dom.watch();

library.add(fab, fas, far);

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
  .component('video-background', VideoBackground)
  .component('CollapseSubheading', CollapseSubheading)
  .component('SectionContainer', SectionContainer)
  .mount('#app');
