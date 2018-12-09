<template>
  <div class="create a sub-goal">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1> add your sub-goals </h1>
        <div class="form-group">
          <label>sub_goal_name:</label>
          <input type="text" class="form-control" v-model="sub_goal_name">
        </div>
        <div class="form-group">
          <label>sub_goal_due_date:</label>
          <input type="text" class="form-control" v-model="sub_goal_due_date">
        </div>
        <div class="form-group">
          <label>sub_goal_status:</label>
          <input type="text" class="form-control" v-model="sub_goal_status">
        </div>     
        <div class="form-group">
          <label>goal_id:</label>
          <input type="text" class="form-control" v-model="goal_id">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
    <a v-bind:href="'/#/subgoals'" class="btn btn-primary"> I'm done - take me to index page </a>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
    data: function() {
      return {
        sub_goal_name: "",
        sub_goal_due_date: "",
        sub_goal_status: "",
        goal_id: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/sub_goals').then(function(response) {
        console.log(response.data);
        this.sub_goals = response.sub_goals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          sub_goal_name: this.sub_goal_name,  
          sub_goal_due_date: this.sub_goal_due_date,
          sub_goal_status: this.sub_goal_status,
          goal_id: this.goal_id
        };
        axios
          .post('http://localhost:3000/api/sub_goals/', params)
          .then(response => {
            this.$router.push("/subgoals-create");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
};
</script>

