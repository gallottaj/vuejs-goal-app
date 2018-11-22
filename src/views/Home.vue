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
    console.log('in the created function');
    axios.get('http://localhost:3000/api/goals').then(response => {
      console.log(response.data);
      this.goals = response.data;
    }),
    console.log('in the created function');
    axios.get('http://localhost:3000/api/users').then(response => {
      console.log(response.data);
      this.users = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>