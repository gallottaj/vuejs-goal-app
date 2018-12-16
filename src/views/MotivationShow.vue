<template>
  <div class="motivation">
          <!-- CONTENT --------------------------------------------------------------------------------->

        <!-- Blog Post Section -->
        <section class="ptb ptb-sm-80">
            <div class="container">
                <div class="row">
                    <!-- Post Bar -->
                    <div class="col-lg-9 col-md-9 blog-post-hr">
                        <div class="blog-post mb-30">
                            <h3 class="h3">Nasa's Astronomy Picture of The Day</h3>
                            

                            <div class="post-media">
                                <img alt="" v-bind:src="body.url">
                            </div>

                            <div class="post-header">
                                <h2>{{body.title}}</h2>
                            </div>

                              <div class="post-meta"><span>copright <a>{{body.copyright}}</a>,</span> <span>{{body.date}}</span></div>

                            <div class="post-entry">
<!--                                 <p>{{body.explanation}}</p>
 -->                              
                                <blockquote>
                                    {{body.explanation}}
                                </blockquote>
                              <!--   <p class="lead">Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                <ul>
                                    <li>Excepturi sint occaecati cupiditate</li>
                                    <li>Molestias excepturi sint</li>
                                    <li>Similique sunt in culpa qui officia</li>
                                    <li>Deserunt mollitia animi</li>
                                </ul> -->
                               <!--  <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p> -->
                            </div>

                            <!-- <div class="post-tag pull-left"><span><a>Branding</a>,</span><span><a>Design</a></span></div> -->
                        </div>

                        <hr />

                        <div class="post-author">
                            <div class="post-author-img pull-left">
                                <img alt="author" src="img/user-av.jpg">
                            </div>
                            <div class="post-author-details pull-left">
                                <h6>Joe Gallotta</h6>
                                <ul class="social">
                                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                </ul>

                            </div>
                        </div>

                        <hr />



                        <div class="mtb-60">
                            <h4>Leave a comment</h4>
                            <div class="row mt-30">
                                <form class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="input-lg form-full" value="" placeholder="Name" name="name" id="name" required />
                                        </div>
                                        <div class="col-md-4">
                                            <input type="email" class="input-lg form-full" value="" placeholder="Email" name="email" id="email2" required />
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="input-lg form-full" value="" placeholder="Website" name="website" id="website" required />
                                        </div>
                                        <div class="col-md-12">
                                            <textarea placeholder="Message" name="message" id="message" class="form-full" required></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-lg btn-black">Post</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <!-- End Post Bar -->

                </div>
            </div>
        </section>
        <!-- End Blog Post Section -->
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      body: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/nasa_apod').then(function(response) {
      console.log(response.data.body);
      this.body = response.data.body;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>