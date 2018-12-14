<template>
  <div class="home">
    
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
      reflection: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/reflections/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.reflection = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>