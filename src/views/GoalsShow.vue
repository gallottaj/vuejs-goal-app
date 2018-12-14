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
                        <div class="spacer-30"></div>

                            <ul class="countdown">
                                <li>
                                    <span class="days">29</span>
                                    <p class="days_ref">days</p>
                                </li>
                                <li class="seperator">:</li>
                                <li>
                                    <span class="hours">11</span>
                                    <p class="hours_ref">hours</p>
                                </li>
                                <li class="seperator">:</li>
                                <li>
                                    <span class="minutes">16</span>
                                    <p class="minutes_ref">minutes</p>
                                </li>
                                <li class="seperator">:</li>
                                <li>
                                    <span class="seconds">32</span>
                                    <p class="seconds_ref">seconds</p>
                                </li>
                            </ul>   

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
                                <a href= '/#/reflections/1'><h5>Reflection 1</h5></a>
                                <p>Exercise 10 minutes nightly for 7 days</p>
                            <div class="page-icon-top"><i class="ion ion-ios-compose-outline"></i></div>
                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Reflection 2</h5>
                                <p>Exercise 15 minutes nightly for 7 days</p>
                            <div class="page-icon-top"><i class="ion ion-ios-compose-outline"></i></div>

                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Reflection 3</h5>
                                <p>Walk outside at lunch for 25 minutes for 7 days</p>
                            <div class="page-icon-top"><i class="ion ion-ios-compose-outline"></i></div>

                            </div>
                            <div class="col-md-6 mb-30">
                                <h5>Reflection 4</h5>
                                <p>Track progress</p>
                            <div class="page-icon-top"><i class="ion ion-ios-compose-outline"></i></div>
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
                        <a href='/' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i> Mark Complete</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>Week 2</h5>
                        <p>Exercise 20 minutes each night for 7 days</p>
                        <p>
                        <div class="spacer-30"></div>
                        <a href='/' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i>Mark Complete</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-45">
                        <h5>Week 3</h5>
                        <p>Record progress.</p>
                        <p>
                        <div class="spacer-30"></div>
                        <a href='/' class="btn btn-md btn-color-line"><i class="fa fa-cog left"></i>Mark Complete</a>
                        </p>
                    </div>
                </div> 
             </div>
        </section>
        <!-- End Subgoals -->

        <hr />


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
                        <h6>More Journals</h6>
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

<style>
        /* counter clock css */
        ul.countdown {
            list-style: none;
            padding: 0;
            display: block;
            text-align: center;
            font-family: 'arial', sans-serif !important;
        }

            ul.countdown li {
                display: inline-block;
            }

                ul.countdown li span {
                    font-size: 80px;
                    font-weight: 300;
                    line-height: 80px;
                }

                ul.countdown li.seperator {
                    font-size: 80px;
                    line-height: 70px;
                    vertical-align: top;
                }

                ul.countdown li p {
                    color: #a7abb1;
                    font-size: 14px;
                }
        /* end counter clock css */
</style>

    <script src="js/jquery-1.11.2.min.js" type="text/javascript"></script>
    <script src="js/plugin/jquery.downCount.js" type="text/javascript"></script>

    <script type="text/javascript">
        $('.countdown').downCount({
            date: '06/29/2019 12:00:00',
            offset: +10
        }, function () {
            alert('WOOT WOOT, done!');
        });
    </script>

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