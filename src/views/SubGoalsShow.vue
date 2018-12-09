<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
       <div class="card">
          <div class="card-body">
          <div class="card-body">
          <p class="card-title">id: {{ sub_goal.id }}</p>
          <p class="card-text">sub_goal_name: {{ sub_goal.sub_goal_name }}</p>
          <p class="card-text">sub_goal_name: {{ sub_goal.sub_goal_name }}</p>
          <p class="card-text">sub_goal_status: {{ sub_goal.sub_goal_status }}</p>
<!--           <a v-bind:href="'/#/subgoals/' + sub_goal.goal_id" class="btn btn-primary">See my goals</a>
 -->    </div>
      </div>  
    </div>
  </div>
</div>
</div>
</template>


<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "this is a sub_goal",
      sub_goal: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/sub_goals/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.sub_goal = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>