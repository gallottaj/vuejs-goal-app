<template>
  <div class="create a goal">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro bg-image overlay-light parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1504722754074-60e9f87d2817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Set a goal</h2>
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
                        <h3>Let's Set A Goal</h3>
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
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="journal id" required v-model="journal_id">
                            </div>

                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="what is the goal?" required v-model="goal_name">
                            </div>
                            <div class="form-field-wrapper">
                                <input class="input-sm form-full" id="form-name" type="text" name="form-name" placeholder="when is it due?" required v-model="due_date">
                            </div>

                            <div class="form-field-wrapper">
                                <textarea class="form-full" id="form-message" rows="7" name="form-message" placeholder="a brief description" required v-model="status"></textarea>
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
        journal_id: "",
        goal_name: "",
        due_date: "",
        status: "",
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/goals').then(function(response) {
        console.log(response.data);
        this.goals = response.goals;
      }.bind(this));
    },
    methods: {
      submit: function() {
        var params = {
          journal_id: this.journal_id,  
          goal_name: this.goal_name,
          due_date: this.due_date,
          status: this.status
        };
        axios
          .post('http://localhost:3000/api/goals', params)
          .then(response => {
            this.$router.push("/subgoals-create");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
};
</script>