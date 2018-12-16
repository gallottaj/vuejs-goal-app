<template>
  <div class="motivation">
    <h5>{{body.url}}</h5>
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
      body: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/nasa_apod').then(function(response) {
      console.log(response.data.body);
      this.body = response.data.body;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>