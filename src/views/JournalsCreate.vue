<template>
  <div class="create journal">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1543964496-d83d90140d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">This is a new journal</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>/<span>Journal</span>
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
                        <h3>Create New Entry</h3>
                        <p class="lead">Nullam dictum felis eu pede mollis pretium leo eget bibendum sodales augue velit cursus. tellus eget condimentum rhoncus sem quam semper libero.</p>
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
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="journal title" required v-model="entry_type">
                            </div>
                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="your user id" required v-model="user_id">
                            </div>

                            <div class="form-field-wrapper">
                                <textarea class="form-full" id="form-message" rows="7" name="form-message" placeholder="a brief description" required></textarea>
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
        entry_type: "",
        entry_body: "",
        entry_title: "",
        user_id: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/journals').then(function(response) {
        console.log(response.data);
        this.journals = response.journals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          entry_type: this.entry_type,
          entry_body: this.entry_body,
          entry_title: this.entry_title,
          user_id: this.user_id
        };
        axios
          .post('http://localhost:3000/api/journals', params)
          .then(response => {
            this.$router.push("/home");
          // })
          // .catch(error => {
          //   this.errors = error.response.data.errors;
          });
      }
    }
};
</script>