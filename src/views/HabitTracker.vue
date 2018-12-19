<template>
  <div class="home">
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1540111970170-b1c4d4fbadaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Habit Tracker</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Intro Section -->
        <div class="spacer-60"></div>
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Activity</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Sleep:</label>
          <input type="text" class="form-control" v-model="sleep">
        </div>
        <div class="form-group">
          <label>Exercise:</label>
          <input type="text" class="form-control" v-model="Exercise">
        </div>
        <div class="form-group">
          <label>Water:</label>
          <input type="text" class="form-control" v-model="Exercise">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
    <div class= "center" id="container" style="width:75%; height:400px;"></div>
  </div>
</template>

<style>
</style>

<script>

var Highcharts = require('highcharts');

export default {
  data: function() {
    return {
      journals: {}
    };
  },
  mounted: function() {
    $(function() { 
      var myChart = Highcharts.chart('container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Average Activity'
        },
        xAxis: {
          categories: ['Sleep', 'Exercise', 'Water']
        },
        yAxis: {
          title: {
            text: 'Time'
          }
        },
        series: [{
          name: 'Jane',
          data: [6, 1, 1]
        }, {
        }]
      });
    });
  },
  function() {
  },
  methods: {},
  computed: {}
};
</script>