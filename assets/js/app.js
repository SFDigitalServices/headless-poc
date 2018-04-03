var $ = require('jquery');
require('uswds');
require('uswds/src/stylesheets/uswds.scss');

import Vue from 'vue'
import App from './components/App'
import router from './router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
