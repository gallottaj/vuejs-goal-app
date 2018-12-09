<template>
  <div class="create a new goal">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>add new goal </h1>
        <div class="form-group">
          <label>journal_id:</label>
          <input type="text" class="form-control" v-model="journal_id">
        </div>
        <div class="form-group">
          <label>goal_name:</label>
          <input type="text" class="form-control" v-model="goal_name">
        </div>
        <div class="form-group">
          <label>due_date:</label>
          <input type="text" class="form-control" v-model="due_date">
        </div>     
        <div class="form-group">
          <label>status:</label>
          <input type="text" class="form-control" v-model="status">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
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
        journal_id: "",
        goal_name: "",
        due_date: "",
        status: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/goals').then(function(response) {
        console.log(response.data);
        this.goals = response.goals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          journal_id: this.journal_id,  
          goal_name: this.goal_name,
          due_date: this.due_date,
          status: this.status
        };
        axios
          .post('http://localhost:3000/api/goals', params)
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