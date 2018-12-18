<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div id="container" style="width:100%; height:400px;"></div>
  </div>
</template>

<style>
</style>

<script>

var Highcharts = require('highcharts');

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      journals: {}
    };
  },
  mounted: function() {
    $(function() { 
      var myChart = Highcharts.chart('container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
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