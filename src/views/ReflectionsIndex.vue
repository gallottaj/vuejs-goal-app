<template>
  <div class="home">
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="img/full/02.jpg">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Reflections</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Intro Section -->

        <!-- Tab Section Section -->
        <section class="ptb ptb-sm-80">
            <div class="container">
                <div class="row text-center">
                    <h3 class="col-12">Reflections</h3>
                </div>
                <div class="spacer-60"></div>
                <div class="row">
                    <!-- Tab Style1 -->
                    <div class="col-md-8 offset-md-2">
                        <div class="tabs">
                            <ul>
                                <li><a href="#tabs-1">Type</a></li>
                                <li><a href="#tabs-2">Content</a></li>
                            </ul>
                            <div class="ui-tab-content">
                                <div id="tabs-1">
                                    <p>Today I learned..</p>
                                </div>
                                <div id="tabs-2">
                                    <p>Celebrate small wins. 1 lb. down!</p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="spacer-60"></div>
                      <div class="col-md-8 offset-md-2">
                        <div class="tabs">
                            <ul>
                                <li><a href="#tabs-1">Type</a></li>
                                <li><a href="#tabs-2">Content</a></li>
                            </ul>
                            <div class="ui-tab-content">
                                <div id="tabs-1">
                                    <p>Daily Check In</p>
                                </div>
                                <div id="tabs-2">
                                    <p>Woke up feeling great.</p>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
          </section> 
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