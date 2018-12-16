<template>
  <div class="motivation">
    <img v-bind:src="body.url" class="center">
    <h5>{{body.title}}</h5>
    <h5>{{body.date}}</h5>
    <h5>{{body.explanation}}</h5>
    <h5>{{body.copyright}}</h5>
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
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