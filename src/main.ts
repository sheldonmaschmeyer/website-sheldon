import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import VideoBackground from 'vue-responsive-video-background-player';

import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu,
} from 'floating-vue';
dom.watch();

library.add(fab, fas);

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
  .mount('#app');
