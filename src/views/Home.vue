<template>
    <div class="home">
   <!--  <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ message }}</h1>
    <div v-for="goal in goals">
      <h3>{{ goal.goal_name }}</h3>
      <h4>{{ goal.due_date }}</h4>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      goals: [],
      users: []
    };
  },
  created: function() {
    console.log('showing all goals');
    axios.get('http://localhost:3000/api/goals').then(response => {
      console.log(response.data);
      this.goals = response.data;
    }),
    console.log('showing all users');
    axios.get('http://localhost:3000/api/users').then(response => {
      console.log(response.data);
      this.users = response.data;
    }),
    console.log('showing all sub_goals');
    axios.get('http://localhost:3000/api/sub_goals').then(response => {
      console.log(response.data);
      this.sub_goals = response.data;
    }),
    console.log('showing all journals');
    axios.get('http://localhost:3000/api/journals').then(response => {
      console.log(response.data);
      this.journals = response.data;          
    });
  },
  methods: {},
  computed: {}
};
</script>