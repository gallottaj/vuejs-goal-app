<template>
  <div class="home">
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1483425571841-9662f86c7154?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1905&q=80">
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
                    <h3 class="col-12">Reflection</h3>
                </div>
                <div class="spacer-60"></div>
                <div class="row">
                    <!-- Tab Style1 -->
                    <div class="col-md-8 offset-md-2">
                        <div class="tabs">
                            <ul>
                                <li><a href="#tabs-1">{{reflection.reflection_type}}</a></li>
                                <li><a href="#tabs-2">Content</a></li>
                            </ul>
                            <div class="ui-tab-content">
                                <div id="tabs-1">
                                    <p>{{reflection.reflection_title}}</p>
                                    <p>{{reflection.reflection_body}}</p>
                                </div>
                                <div id="tabs-2">
                                    <p>{{reflection.reflection_body}}</p>
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