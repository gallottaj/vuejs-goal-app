<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
       <div class="card">
          <div class="card-body">
          <div class="card-body">
          <p class="card-title">id: {{ goal.id }}</p>
          <p class="card-text">goal_name: {{ goal.goal_name }}</p>
          <p class="card-text">due_date: {{ goal.due_date }}</p>
          <p class="card-text">status: {{ goal.status }}</p>
          <p class="card-text">journal id: {{ goal.journal_id }}</p>
<!--     <a v-bind:href="'/#/goals/' + goal.id" class="btn btn-primary">See my goals</a>
 -->    </div>
      </div>  
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
      message: "this is a goal",
      goal: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/goals/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.goal = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>