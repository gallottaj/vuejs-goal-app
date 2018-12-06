<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="sub_goal in sub_goals">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">id: {{ sub_goal.id }}</h5>
              <h5 class="card-title">name: {{ sub_goal.sub_goal_name }}</h5>
              <h5 class="card-title">due date: {{ sub_goal.sub_goal_due_date }}</h5>
              <h5 class="card-title">status: {{ sub_goal.status }}</h5>
<!--               <h5 class="card-title">Body: {{ sub_goal.entry_body }}</h5>
 -->        </div>
          </div>
        </div>
      </div>
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
      message: "These are your sub_goals pertaining to (goal_name)",
      sub_goals: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/sub_goals').then(function(response) {
      console.log(response.data);
      this.sub_goals = response.data;
    }.bind(this));
  },
  function() {
    console.log(this);
    axios.get('http://localhost:3000/api/sub_goals/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.sub_goals = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>