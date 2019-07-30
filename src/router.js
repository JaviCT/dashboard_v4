import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Camera from './views/Camera.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cameras',
      name: 'index',
      component: Index
    },
    {
      path: '/camera/:id',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/recordings',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/shares',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/details',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/logs',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/archives',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id',
      name: 'camera',
      component: Camera
    },
    {
      path: '/camera/:id/compare',
      name: 'camera',
      component: Camera
    }
  ]
})
