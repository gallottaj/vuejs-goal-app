<template>
  <div class="journal">
        <!-- CONTENT --------------------------------------------------------------------------------->
        <!-- Intro Section -->
        <section class="inner-intro dark-bg bg-image overlay-dark parallax parallax-background1" data-background-img="img/full/21.jpg">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Journal 1</h2>
                    <div class="page-breadcrumb">
                        <a>Home</a>/<a>Sub-Goals</a>/<span>Reflections</span>
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
                                <strong class="dark-color">Due Date :</strong>{{goal.due_date}}
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
                                <h5>Fully responsive</h5>
                                <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Flexible & Customizable</h5>
                                <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>html 5 video & Audio</h5>
                                <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Clean code & design</h5>
                                <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <hr />

                <!-- Service Section -->
        <section id="service" class="ptb ptb-sm-80">
            <div class="wow fadeInLeft container text-center">
                <h3>SubGoals</h3>
                <div class="spacer-60"></div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 1</h5>
                        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 2</h5>
                        <p>Donec sodales sagittis magna. hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus, augue velit cursus nunc.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 3</h5>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 4</h5>
                        <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 5</h5>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>SubGoal 6</h5>
                        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Service Section -->

        <hr />

        <section class="ptb ptb-sm-80">
            <div class="container text-center">
                <h4>Reflections</h4>
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