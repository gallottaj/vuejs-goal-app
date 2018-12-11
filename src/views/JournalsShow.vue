<template>
  <div class="journal">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
     <!--      <p class="card-title">entry_type: {{ journal.entry_type }}</p>
          <p class="card-text">entry_body: {{ journal.entry_body }}</p> -->
          <p class="card-text">entry_title: {{ journal.entry_title }}</p>
          <a v-bind:href="'/#/goals/' + journal.goals[0].id" class="btn btn-primary">See goal</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      journal: {},
      goal: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/journals/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.journal = response.data;
      console.log(this);
    });
    // axios.get('http://localhost:3000/api/goals/' + this.$route.params.id).then(response => {
    //   console.log(response.data);
    //   this.goals = response.data;
    // });
  },
  methods: {},
  computed: {}
};
</script>