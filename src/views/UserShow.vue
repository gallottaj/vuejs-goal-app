<template>
  <div class="home">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <p class="card-title">first name: {{ user.first_name }}</p>
          <p class="card-text">last_name: {{ user.last_name }}</p>
          <p class="card-text">phone_number: {{user.phone_number}}</p>
          <p class="card-text">email: {{user.email}}</p>
<!--           <a href="/show.html" class="btn btn-primary">Go somewhere</a>
 -->     </div>
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
      user: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/users/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>