<template>
    <div class="home">
     <!-- CONTENT --------------------------------------------------------------------------------->

        <!-- Process -->
        <section id="process" class="ptb ptb-sm-80">
            <div class="wow fadeInLeft container text-center">
                <h3>Easy Process</h3>
                <div class="spacer-60"></div>
                <div class="row">
                    <div class="col-md-2 col-sm-4 col-6">
                        <div class="tipped" data-title="Step 1 - Journal" data-tipper-options='{"direction":"top"}'>
                            <div class="page-icon-top"><i class="ion ion-ios-compose-outline"></i></div>
                          <a v-bind:href="'/#/journals-create'" class="btn btn-primary">Create a journal</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 col-6">
                        <div class="tipped" data-title="Step 2 - Set Goals" data-tipper-options='{"direction":"top"}'>
                            <div class="page-icon-top"><i class="ion ion-ios-paper-outline"></i></div>
                          <a v-bind:href="'/#/goals-create'" class="btn btn-primary">Create a goal</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 col-6">
                        <div class="tipped" data-title="Step 3 - Set Sub-Goals" data-tipper-options='{"direction":"top"}'>
                            <div class="page-icon-top"><i class="ion ion-ios-gear-outline"></i></div>
                          <a v-bind:href="'/#/subgoals-create'" class="btn btn-primary">Set Sub-Goals</a>
                        </div>
                    </div>
                      <div class="col-md-2 col-sm-4 col-6">
                        <div class="tipped" data-title="Step 4 - Reflect " data-tipper-options='{"direction":"top"}'>
                            <div class="page-icon-top"><i class="ion ion-ios-people-outline"></i></div>
                            <h6>Reflect</h6>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4 col-6">
                        <div class="tipped" data-title="Step6 - Delivery" data-tipper-options='{"direction":"top"}'>
                            <div class="page-icon-top"><i class="ion ion-ios-clock-outline"></i></div>
                            <h6>Delivery</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Process -->

        <!-- Work Section -->
        <section id="work" class="wow fadeIn pt pt-sm-80 text-center">
            <div class="container">
                <h3>Journals</h3>
                <div class="spacer-30"></div>
              </div>

            <!-- Work Gallary -->
            <div class="container-fluid ">
                <div class="row">
                    <div class="col container-grid nf-col-4">
                        <div class="nf-item branding design coffee">
                            <div class="item-box">
                                <a class="btn btn-primar" href="/#/goals/2" title="Journal">
                                  <img class="item-container" src="img/portfolio/1.jpg" alt="1" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Journal Title</h5>
                                            <p class="white">Goal Title</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item photo">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/2.jpg" title="Vivamus elementum semper">
                                    <img class="item-container" src="img/portfolio/2.jpg" alt="2" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Vivamus elementum semper</h5>
                                            <p class="white">Photo</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item branding design coffee">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/3.jpg" title="Quisque rutrum">
                                    <img class="item-container" src="img/portfolio/3.jpg" alt="4" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Quisque rutrum</h5>
                                            <p class="white">Branding, Design, Coffee</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item branding design">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/4.jpg" title="Tellus eget condimentum">
                                    <img class="item-container" src="img/portfolio/4.jpg" alt="4" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Tellus eget condimentum</h5>
                                            <p class="white">Design</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item branding design">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/5.jpg" title="Nullam quis ant">
                                    <img class="item-container" src="img/portfolio/5.jpg" alt="5" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Nullam quis ant</h5>
                                            <p class="white">Branding, Design</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item photo">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/6.jpg" title="Sed fringilla mauris">
                                    <img class="item-container" src="img/portfolio/6.jpg" alt="6" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Sed fringilla mauris</h5>
                                            <p class="white">Photo</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item design">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/7.jpg" title="Augue velit cursus">
                                    <img class="item-container" src="img/portfolio/7.jpg" alt="7" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Augue velit cursus</h5>
                                            <p class="white">Design</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="nf-item coffee">
                            <div class="item-box">
                                <a class="cbox-gallary1" href="img/portfolio/8.jpg" title="Donec sodales sagittis">
                                    <img class="item-container" src="img/portfolio/8.jpg" alt="8" />
                                    <div class="item-mask">
                                        <div class="item-caption">
                                            <h5 class="white">Donec sodales sagittis</h5>
                                            <p class="white">Coffee</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- End Work Gallary -->
        </section>
        <!-- End Work Section -->

        <!--About Section-->
        <section id="about" class="wow fadeIn ptb ptb-sm-80">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 offset-md-2">
                        <h3 class="h4">About Studio</h3>
                        <div class="spacer-15"></div>
                        <p class="lead">Integer tincidunt Cras dapibus. <a class="tipped" data-title="Sample Text" data-tipper-options='{"direction":"top"}'><b>Vivamus elementum</b></a> ultricies nisi vel augue. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante dapibus.</p>
                    </div>
                </div>
                <div class="row mt-80">
                    <!-- Welcome Content -->
                    <div class="col-md-7 mb-30">
                        <h4>PROGRESS</h4>
                        <div class="spacer-15"></div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>
                        <div class="spacer-15"></div>
                        <a class="btn-link-a">More About</a>
                    </div>
                    <!-- End Welcome Content -->

                    <!-- Skills -->
                    <div class="col-md-5">
                        <div class="skillbar" data-percent="55%">
                            <div class="skillbar-title">goal 1</div>
                            <div class="skill-bar-percent">55%</div>
                            <div class="skillbar-bar"></div>
                        </div>

                        <div class="skillbar" data-percent="80%">
                            <div class="skillbar-title">development</div>
                            <div class="skill-bar-percent">80%</div>
                            <div class="skillbar-bar"></div>
                        </div>

                        <div class="skillbar" data-percent="40%">
                            <div class="skillbar-title">Photography</div>
                            <div class="skill-bar-percent">40%</div>
                            <div class="skillbar-bar"></div>
                        </div>

                        <div class="skillbar" data-percent="70%">
                            <div class="skillbar-title">branding</div>
                            <div class="skill-bar-percent">70%</div>
                            <div class="skillbar-bar"></div>
                        </div>
                    </div>
                    <!-- End Skills -->
                </div>
            </div>
        </section>
        <!-- End About Section-->

        <hr />

        <!-- Counter Section -->
        <section id="counter" class="overlay-dark80 light-color ptb-80" style="background-image: url('img/full/23.jpg');" data-stellar-background-ratio="0.5">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-3 mb-sm-30">
                        <h1 class="counter" data-count="59">0</h1>
                        <h6>awards</h6>
                    </div>
                    <div class="col-md-3 mb-sm-30">
                        <h1 class="counter" data-count="1054">0</h1>
                        <h6>Clients</h6>
                    </div>
                    <div class="col-md-3 mb-sm-30">
                        <h1 class="counter" data-count="34">0</h1>
                        <h6>Team</h6>
                    </div>
                    <div class="col-md-3 mb-sm-30">
                        <h1 class="counter" data-count="154">0</h1>
                        <h6>Project</h6>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Counter Section -->

        <hr />

              <!-- Scroll Top -->
        <a class="scroll-top">
            <i class="fa fa-angle-double-up"></i>
        </a>
        <!-- End Scroll Top -->

    </div>
    <!-- Site Wraper End -->

        <!-- END CONTENT ---------------------------------------------------------------------------->

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
      goals: [],
      users: []
    };
  },
  created: function() {
    console.log('showing all goals');
    axios.get('http://localhost:3000/api/goals').then(response => {
      console.log(response.data);
      this.goals = response.data;
    }),
    console.log('showing all users');
    axios.get('http://localhost:3000/api/users').then(response => {
      console.log(response.data);
      this.users = response.data;
    }),
    console.log('showing all sub_goals');
    axios.get('http://localhost:3000/api/sub_goals').then(response => {
      console.log(response.data);
      this.sub_goals = response.data;
    }),
    console.log('showing all journals');
    axios.get('http://localhost:3000/api/journals').then(response => {
      console.log(response.data);
      this.journals = response.data;          
    });
  },
  methods: {},
  computed: {}
};
</script>