<template>
  <div class="home">
    <h1>{{ message }}</h1>
  <a v-bind:href="'/#/journals/create'" class="btn btn-primary">create a journal</a>
  <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="reflection in reflections">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">reflection_type: {{ reflection.reflection_type }}</h5>
              <h5 class="card-title">reflection_title: {{ reflection.reflection_title }}</h5>
              <h5 class="card-title">reflection_entry_date: {{ reflection.reflection_entry_date }}</h5>
              <h5 class="card-title">reflection_body: {{ reflection.reflection_body }}</h5>
<!--               <a v-bind:href="'/#/journals/' + reflection.id" class="btn btn-primary">View this Journal</a>
 -->            </div>
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
      message: "Reflections Page",
      reflections: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/reflections').then(function(response) {
      console.log(response.data);
      this.reflections = response.data;
    }.bind(this));
  },
  function() {
    console.log(this);
    axios.get('http://localhost:3000/api/reflections/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.reflections = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>