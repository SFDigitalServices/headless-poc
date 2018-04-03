import Vue from 'vue'
import VueRouter from 'vue-router'

import ServiceList from './components/ServiceList'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/ServiceList',
        name: 'ServiceList',
        component: ServiceList
      }
    ]
});
