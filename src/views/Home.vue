<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {
    console.log('in the created function');
    console.log(this);
    axios.get('http://localhost:3000/api/goals').then(function(response) {
      console.log(response.data);
      this.people = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>