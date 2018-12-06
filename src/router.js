import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from "./views/Logout.vue";
import GoalsIndex from './views/GoalsIndex.vue'
import UserShow from './views/UserShow.vue'
import JournalsCreate from './views/JournalsCreate.vue'
import JournalsIndex from './views/JournalsIndex.vue'
import JournalsShow from './views/JournalsShow.vue'
import GoalsShow from './views/GoalsShow.vue'
import SubGoalsIndex from './views/SubGoalsIndex.vue'
import SubGoalsShow from './views/SubGoalsShow.vue'






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
    // sessions
    {
      path: '/signup', 
      name: 'signup',
      component: Signup
    },
    {
  
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    // goals 
     {
      path: '/goals',
      name: 'goalsIndex',
      component: GoalsIndex
    },
    {
      path: '/goals/:id',
      name: 'goalsShow',
      component: GoalsShow
    },
    // subgoals
    {
      path: '/subgoals',
      name: 'subgoalsIndex',
      component: SubGoalsIndex
    },
    {
      path: '/subgoals/:id',
      name: 'subgoalsShow',
      component: SubGoalsShow
    },
     {
      path: '/journals/create',
      name: 'journalsCreate',
      component: JournalsCreate
    },
     {
      path: '/journals/index',
      name: 'journalsIndex',
      component: JournalsIndex
    },
     {
      path: '/journals/:id',
      name: 'journalsShow',
      component: JournalsShow
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
