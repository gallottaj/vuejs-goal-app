<template>
  <div class="home">
    <h1>{{ message }}</h1>
  <a v-bind:href="'/#/journals/create'" class="btn btn-primary">create a journal</a>
  <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="journal in journals">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Title: {{ journal.entry_title }}</h5>
              <h5 class="card-title">Type: {{ journal.entry_type }}</h5>
              <h5 class="card-title">Body: {{ journal.entry_body }}</h5>
              <a href="/#/journals/:id" class="btn btn-primary">view</a>
            </div>
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
      message: "Welcome to Vue.js!",
      journals: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/journals').then(function(response) {
      console.log(response.data);
      this.journals = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>