<template>
  <div class="home">
    <!-- Intro Section -->
        <section class="inner-intro dark-bg bg-image overlay-dark parallax parallax-background1" data-background-img="img/full/26.jpg">
            <div class="container">
                <div class="row title">
                    <h2 class="h2">Habits</h2>
                    <div class="page-breadcrumb">
                      <a>Home</a>/<a>Blog</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Intro Section -->
        
        <!-- Blog Post Section -->
        <section class="ptb ptb-sm-80">
            <div class="container">
                <div class="row">
                    <!-- Post Item -->
                    <div class="col-lg-9 col-md-9">
                        <div class="row">

                            <div class="col-md-12 blog-post-hr">

                                <div class="blog-post mb-30">
                                    <div class="post-media">
                                        <div class="owl-carousel item1-carousel nf-carousel-theme">
                                      </div>
                                    </div>
                                    <div class="post-meta"><span>added March 16, 2015</span></div>
                                    <div class="post-header">
                                        <h4><a>{{sub_goal.sub_goal_name}}</a></h4>
                                    </div>
                                    <div class="post-entry">
                                        <p><a>{{sub_goal.sub_goal_description}}</a></p>
                                    </div>
                                    <div class="post-more-link pull-right"><a href="blog-single-slider-post.html">Mark Complete<i class="fa fa-long-arrow-right right"></i></a></div>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <!-- Pagination Nav -->
                        <div class="pagination-nav text-left mt-60 mtb-xs-30">
                            <ul>
                                <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                        <!-- End Pagination Nav -->

                    </div>
                    <!-- End Post Item -->

                    <!-- Sidebar -->
                    <div class="col-lg-3 col-md-3 mt-sm-60">

                        
                      <div class="sidebar-widget"> 
                          <h5>Recent Journals</h5>
                            <hr>
                            <ul class="widget-post">
                                <li>
                                    <a class="widget-post-media">
                                        <img src="img/portfolio/21.jpg">
                                    </a>
                                    <div class="widget-post-info">
                                        <h6><a>veritatis et quasi</a></h6>
                                        <div class="post-meta"><span>March 16, 2015</span></div>
                                    </div>
                                </li>
                                <li>
                                    <a class="widget-post-media">
                                        <img src="img/portfolio/32.jpg">
                                    </a>
                                    <div class="widget-post-info">
                                        <h6><a>Sed fringilla mauris</a></h6>
                                        <div class="post-meta"><span>March 09, 2015</span></div>
                                    </div>
                                </li>
                                <li>
                                    <a class="widget-post-media">
                                        <img src="img/portfolio/31.jpg">
                                    </a>
                                    <div class="widget-post-info">
                                        <h6><a>harum quidem rerum</a></h6>
                                        <div class="post-meta"><span>March 04, 2015</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-widget">
                            <div class="skillbar" data-percent="80%">
                            <div class="skillbar-title">Completion:</div>
                            <div class="skill-bar-percent">80%</div>
                            <div class="skillbar-bar"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End Sidebar -->
                </div>
            </div>
        </section>
        <!-- End Blog Post Section -->

        <!-- End CONTENT ------------------------------------------------------------------------------>
      </div>
</template>


<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "this is a sub_goal",
      sub_goal: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/sub_goals/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.sub_goal = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>