<template>
  <div class="journal">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro dark-bg bg-image overlay-dark parallax parallax-background1" data-background-img="https://images.unsplash.com/photo-1529307482987-d09357b12fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Journal 1</h2>
                    <div class="page-breadcrumb">
                        <a>View</a>/<a>Update</a>/<a>Delete</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Intro Section -->

        <!-- Work Detail Section -->
        <section class="pt pt-sm-80">
            <div class="container">
                <div class="row mtb-60 mtb-xs-30">
                    <div class="col-md-4 mb-30">
                        <div class="project-detail-block">
                            <p>
                                <strong class="dark-color">Goal:</strong> {{goal.goal_name}}
                            </p>

                            <p>
                                <strong class="dark-color">Due Date :</strong> {{goal.due_date}}
                            </p>
                            <div class="skillbar" data-percent="80%">
                            <div class="skillbar-title">Completion:</div>
                            <div class="skill-bar-percent">80%</div>
                            <div class="skillbar-bar"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6 mb-30">

                                <h5>Week 1</h5>
                                <p>Exercise 10 minutes nightly for 7 days</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Week 2</h5>
                                <p>Exercise 15 minutes nightly for 7 days</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Week 3</h5>
                                <p>Walk outside at lunch for 25 minutes for 7 days</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Week 4</h5>
                                <p>Track progress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <hr />

                <!-- Subgoals -->
        <section id="service" class="ptb ptb-sm-80">
            <div class="wow fadeInLeft container text-center">
                <h3>Habits</h3>
                <div class="spacer-60"></div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>Week 1</h5>
                        <p>Exercise 10 minutes each night for 7 days</p>
                        <p>
                        <div class="spacer-30"></div>
                        <a href='/#/subgoals/2' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i> Complete! </a>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>Week 2</h5>
                        <p>Exercise 20 minutes each night for 7 days</p>
                        <p>
                        <div class="spacer-30"></div>
                        <a href='/#/' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i>Complete! </a>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>Week 3</h5>
                        <p>Record progress.</p>
                        <p>
                        <div class="spacer-30"></div>
                        <a href='/#/' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i>Complete!</a>
                        </p>
                    </div>
                </div> 
             </div>
        </section>
        <!-- End Subgoals -->

        <hr />

        <section class="ptb ptb-sm-80">
            <div class="container text-center">
                <a href='/#/reflections'>Reflections</a>
                <div class="row">
                    <div class="col-lg-4 spacing-grid">
                        <div class="item-box">
                            <a>
                                <img alt="1" src="img/portfolio/1.jpg" class="item-container">
                                <div class="item-mask">
                                    <div class="item-caption">
                                        <h5 class="white">Consequat massa quis</h5>
                                        <p class="white">Branding, Design, Coffee</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 spacing-grid">
                        <div class="item-box">
                            <a>
                                <img alt="1" src="img/portfolio/3.jpg" class="item-container">
                                <div class="item-mask">
                                    <div class="item-caption">
                                        <h5 class="white">Consequat massa quis</h5>
                                        <p class="white">Branding, Design, Coffee</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 spacing-grid">
                        <div class="item-box">
                            <a>
                                <img alt="1" src="img/portfolio/5.jpg" class="item-container">
                                <div class="item-mask">
                                    <div class="item-caption">
                                        <h5 class="white">Consequat massa quis</h5>
                                        <p class="white">Branding, Design, Coffee</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Work Detail Section -->

        <!-- Work Next Prev Bar -->
        <section class="mb-60">
            <div class="container">
                <div class="item-nav">
                    <a class="item-prev" href="">
                        <div class="prev-btn"><i class="fa fa-angle-left"></i></div>
                        <div class="item-prev-text xs-hidden">
                            <h6>Prev Project</h6>
                        </div>
                    </a>

                    <a class="item-all-view">
                        <h6>All Work</h6>
                    </a>

                    <a class="item-next" href="">
                        <div class="next-btn"><i class="fa fa-angle-right"></i></div>
                        <div class="item-next-text xs-hidden">
                            <h6>Next Project</h6>
                        </div>
                    </a>
                </div>
            </div>
        </section>                            
        <!-- End Work Next Prev Bar -->
      </div>
</template>


<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "this is a goal",
      goal: [],
      sub_goal: []
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