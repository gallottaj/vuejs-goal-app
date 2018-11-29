import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from "./views/Logout.vue";


import GoalsIndex from './views/GoalsIndex.vue'
import UserShow from './views/UserShow.vue'
import JournalsIndex from './views/JournalsIndex.vue'
import SubGoalsIndex from './views/SubGoalsIndex.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'userShow',
      component: UserShow
    },
    {
      // users create
      path: '/signup', 
      name: 'signup',
      component: Signup
    },
    {
      // sessions create
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
     {
      path: '/goals',
      name: 'goalsIndex',
      component: GoalsIndex
    },
    
    {
      path: '/subgoals',
      name: 'subgoalsIndex',
      component: SubGoalsIndex
    },
     {
      path: '/journals',
      name: 'journalsIndex',
      component: JournalsIndex
    },
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
