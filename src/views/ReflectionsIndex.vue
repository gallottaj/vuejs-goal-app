<template>
  <div class="home">
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="img/full/02.jpg">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Reflections</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>/<span>Tab & Accordian</span>
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
                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel</p>
                                    <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
                                </div>
                                <div id="tabs-2">
                                    <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.</p>
                                    <p>Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel</p>
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