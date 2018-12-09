<template>
  <div class="create journal">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create a journal </h1>
        <div class="form-group">
          <label>entry_type:</label>
          <input type="text" class="form-control" v-model="entry_type">
        </div>
        <div class="form-group">
          <label>entry_body:</label>
          <input type="text" class="form-control" v-model="entry_body">
        </div>
        <div class="form-group">
          <label>entry_title:</label>
          <input type="text" class="form-control" v-model="entry_title">
        </div>     
        <div class="form-group">
          <label>user_id:</label>
          <input type="text" class="form-control" v-model="user_id">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
    <a v-bind:href="'/#/goals-create'" class="btn btn-primary">Create a new goal</a>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
    data: function() {
      return {
        entry_type: "",
        entry_body: "",
        entry_title: "",
        user_id: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/journals').then(function(response) {
        console.log(response.data);
        this.journals = response.journals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          entry_type: this.entry_type,
          entry_body: this.entry_body,
          entry_title: this.entry_title,
          user_id: this.user_id
        };
        axios
          .post('http://localhost:3000/api/journals', params)
          .then(response => {
            this.$router.push("/journals");
          // })
          // .catch(error => {
          //   this.errors = error.response.data.errors;
          });
      }
    }
};
</script>