<template>
  <div id="app">
    <!-- Header ("header--dark", "header-transparent", "header--sticky")-->
        <header id="header" class="header header--dark header--sticky">
            <!-- Nav Bar -->
            <nav id="navigation" class="header-nav">
                <div class="container">
                    <div class="row d-flex flex-md-row align-items-center">
                        <div class="logo mr-auto">
                            <!--logo-->
                            <a href="/#/">
                            <img src="img/Original on Transparent.png" alt="logo"/>
                            </a>
                            <!--End logo-->
                        </div>

                        <!-- HOME -->

                        <div class="nav-menu ml-auto">
                            <ul class="">
                                <li class="nav-menu-item">
                                  <a href="/#/">Home</a>
                                    <div class="nav-dropdown">
                                        <ul>
                                            <li class="nav-menu-item">
                                                <a href="#">Login / Register</a>
                                                <ul class="nav-dropdown-sub">
                                                    <li><a href="/#/login">Login</a></li>
                                                    <li><a href="/#/signup">Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li> 

                                <!-- JOURNALS -->

                                <li class="nav-menu-item">
                                  <a href="/">Journals</a>
                                </li>

                                <!-- REFLECTIONS -->

                                <li class="nav-menu-item">
                                    <a href="/#/reflections">Reflections</a>
                                </li>

                                <!-- HABIT TRACKER -->

                                <li class="nav-menu-item">
                                    <a href="/#/habittracker">Habit Tracker</a>
                                </li>

                                <!-- MOTIVATION -->

                                <li class="nav-menu-item">
                                    <a href="/#/motivation">Inspire</a>
                                </li>
                                
                            </ul>
                        </div>

                        <div class="nav-icons">
                            <div class="nav-icon-item d-lg-none">
                                <span class="nav-icon-trigger menu-mobile-btn align-middle"><i class="ion"></i></span>
                            </div>
                            <div class="nav-icon-item">
                                <span class="nav-icon-trigger search-menu_btn align-middle"><i class="ion ion-ios-search"></i></span>
                                <div class="search-menu-bar">
                                    <form>
                                        <input class="seach-input input--sm form-full" id="seach_input" name="seach_input" placeholder="Please Enter Keywords" type="search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- End Nav Bar -->
        </header>
        <!-- End Header -->

    <router-view/>

    <!-- FOOTER -->
        <footer class="footer">
            <div class="ptb-60">
                <div class="container">
                    <!--Footer Info -->
                    <div class="row footer-info">
                        <div class="col-lg-3 col-md-12 col-sm-12">
                            <div class="footer-block">
                                <a class="footer-logo mb-25" href="home.html">
                                    <img src="img/Original on Transparent.png" />
                                </a>
                                <ul class="social">
                                    <li><a target="_blank" href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                    <li><a target="_blank" href="https://instagram.com/"><i class="fa fa-instagram"></i></a></li>
                                    <li><a target="_blank" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank" href="https://vimeo.com/"><i class="fa fa-vimeo-square"></i></a></li>
                                    <li><a target="_blank" href="https://www.behance.net/"><i class="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-block">
                                <h6 class="link-title">Company</h6>
                                <ul class="link">
                                    <li><a href="#">About Company</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Locations</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-block">
                                <h6 class="link-title">Service</h6>
                                <ul class="link">
                                    
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-block">
                                <h6 class="link-title">Extra</h6>
                                <ul class="link">
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blog</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer-block">
                                <h6 class="link-title">Contact</h6>
                                <p>502, DieSachbearbeiter, Schönhauser Allee, 167c10435 Berlin,Germany.</p>
                                <ul class="link">
                                    <li><a href="mailto:yourname@domain.com"><i class="fa fa-envelope-o left"></i>yourname@domain.com</a></li>
                                    <li><a><i class="fa fa-phone left"></i>+40 (0) 012 345 6789</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Footer Info -->
                </div>
            </div>
            <hr />

            <!-- Copyright Bar -->
            <section class="copyright ptb-60">
                <div class="container">
                    <p class="">
                        © 2018 <a><b>Mazel Template</b></a>. All Rights Reserved.
                        <br />
                        Template  by <a target="_blank" href="http://nileforest.com/"><b>nileforest</b></a>
                    </p>
                </div>
            </section>
            <!-- End Copyright Bar -->

        </footer>
        <!-- END FOOTER -->

        <!-- Scroll Top -->
        <a class="scroll-top">
            <i class="fa fa-angle-double-up"></i>
        </a>
        <!-- End Scroll Top -->
  </div>
</template>

<style>
</style>
