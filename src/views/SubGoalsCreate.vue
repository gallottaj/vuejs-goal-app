<template>
  <div class="create a subgoal">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro dark-bg bg-image overlay-dark parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1529307482987-d09357b12fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Habits</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>/<span>Habits</span>
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
                        <h3>Let's add a habit</h3>
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
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="goal id" required v-model="goal_id">
                            </div>

                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="what is the habit?" required v-model="sub_goal_name">
                            </div>
                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="when is it due?" required v-model="sub_goal_due_date">
                            </div>

                            <div class="form-field-wrapper">
                                <textarea class="form-full" id="form-message" rows="7" name="form-message" placeholder="a brief description" required v-model="sub_goal_description"></textarea>
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
        sub_goal_name: "",
        sub_goal_due_date: "",
        sub_goal_description: "",
        goal_id: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/sub_goals').then(function(response) {
        console.log(response.data);
        this.sub_goals = response.sub_goals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          sub_goal_name: this.sub_goal_name,  
          sub_goal_due_date: this.sub_goal_due_date,
          sub_goal_description: this.sub_goal_description,
          goal_id: this.goal_id
        };
        axios
          .post('http://localhost:3000/api/sub_goals/', params)
          .then(response => {
            this.$router.push("/");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
};
</script>

