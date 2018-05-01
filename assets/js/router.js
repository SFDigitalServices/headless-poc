import Vue from 'vue'
import VueRouter from 'vue-router'

import ServiceList from './components/ServiceList'
import ServicePage from './components/ServicePage'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'ServiceList',
        component: ServiceList
      },{
        path: '/servicePage/:id',
        name: 'ServicePage',
        component: ServicePage
      }
    ]
});
