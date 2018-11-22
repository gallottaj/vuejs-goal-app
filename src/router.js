import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Goals from './views/Goals.vue'
import User from './views/User.vue'
// import Journals from './views/Journals.vue'
import Sub_goals from './views/Sub_goals.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/goals',
      name: 'goals',
      component: Goals
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/sub_goals',
      name: 'sub_goals',
      component: Sub_goals
    },
    //  {
    //   path: '/journals',
    //   name: 'journals',
    //   component: Journals
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
