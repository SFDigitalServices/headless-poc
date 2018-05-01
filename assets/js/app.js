var $ = require('jquery');
require('uswds');
require('uswds/src/stylesheets/uswds.scss');
require('../css/sfgov.css');

import Vue from 'vue'
import router from './router'
import apolloClient from './apolloClient.js'

new Vue({
  el: '#app',
  router,
  delimiters: ['${', '}'],
  provide: apolloClient.provide()
});
