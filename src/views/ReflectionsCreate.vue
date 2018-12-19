<template>
  <div class="create a reflection">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1504722754074-60e9f87d2817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Reflect</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>/<span>Reflection</span>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>
        <!-- End Intro Section -->

        <!-- Contact Section -->
        <section class="ptb ptb-sm-80">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h3>Reflect</h3>
                    </div>
                </div>
                <div class="spacer-75"></div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <!-- Contact FORM -->
                        <form v-on:submit.prevent="submit()">
                            <!-- IF MAIL SENT SUCCESSFULLY -->
                            <h6 class="successContent">
                                <i class="fa fa-check left" style="color: #5cb45d;"></i>Your message has been sent successfully.
                            </h6>
                            <!-- END IF MAIL SENT SUCCESSFULLY -->

                            <!-- MAIL SENDING UNSUCCESSFULL -->
                            <h6 class="errorContent">
                                <i class="fa fa-exclamation-circle left" style="color: #e1534f;"></i>There was a problem validating the form please check!
                            </h6>
                            <!-- END MAIL SENDING UNSUCCESSFULL -->

                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="Type" required v-model="reflection_type">
                            </div>

                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="Entry Date" required v-model="reflection_entry_date">
                            </div>
                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="Title" required v-model="reflection_title">
                            </div>

                            <div class="form-field-wrapper">
                                <textarea class="form-full" id="form-message" rows="7" name="form-message" placeholder="Content" required v-model="reflection_body"></textarea>
                            </div>

                            <button class="btn btn-md btn-black form-full" type="submit" id="form-submit" name="submit">Submit</button>
                        </form>
                        <!-- END Contact FORM -->
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Section -->

        <!-- End CONTENT ------------------------------------------------------------------------------>

  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
    data: function() {
      return {
        reflection_type: "",
        reflection_title: "",
        reflection_body: "",
        reflection_entry_date: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/reflections').then(function(response) {
        console.log(response.data);
        this.reflections = response.reflections;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          reflection_type: this.reflection_type,  
          reflection_title: this.reflection_title,
          reflection_body: this.reflection_body,
          reflection_entry_date: this.reflection_entry_date
        };
        axios
          .post('http://localhost:3000/api/reflections', params)
          .then(response => {
            this.$router.push("/reflections");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
};
</script>