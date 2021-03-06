import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from "./views/Logout.vue";
import UserShow from './views/UserShow.vue'
import JournalsCreate from './views/JournalsCreate.vue'
import JournalsIndex from './views/JournalsIndex.vue'
import JournalsShow from './views/JournalsShow.vue'
import GoalsShow from './views/GoalsShow.vue'
import GoalsCreate from './views/GoalsCreate.vue'
import GoalsUpdate from './views/GoalsUpdate.vue'
import SubGoalsIndex from './views/SubGoalsIndex.vue'
import SubGoalsShow from './views/SubGoalsShow.vue'
import SubGoalsCreate from './views/SubGoalsCreate.vue'
import ReflectionsIndex from './views/ReflectionsIndex.vue'
import ReflectionsShow from './views/ReflectionsShow.vue'
import MotivationShow from './views/MotivationShow.vue'
import HabitTracker from './views/HabitTracker.vue'
import WellDone from './views/WellDone.vue'
import ReflectionsCreate from './views/ReflectionsCreate.vue'




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
      path: '/goals/:id',
      name: 'goalsShow',
      component: GoalsShow
    },
    {
      path: '/goals-create',
      name: 'goalsCreate',
      component: GoalsCreate
    },
    {
      path: '/goals-update',
      name: 'goalsUpdate',
      component: GoalsUpdate
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
      path: '/subgoals-create',
      name: 'SubGoalsCreate',
      component: SubGoalsCreate
    },
     {
      path: '/journals-create',
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
      path: '/reflections',
      name: 'reflectionsIndex',
      component: ReflectionsIndex
    },
    {
      path: '/reflections/:id',
      name: 'reflectionsShow',
      component: ReflectionsShow
    },
    // motivation
    {
      path: '/motivation',
      name: 'motivationShow',
      component: MotivationShow
    },
    {
      path: '/habittracker',
      name: 'habitTracker',
      component: HabitTracker
    },
    {
      path: '/welldone',
      name: 'wellDone',
      component: WellDone
    },
    {
      path: '/reflections-create',
      name: 'reflections',
      component: ReflectionsCreate
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
