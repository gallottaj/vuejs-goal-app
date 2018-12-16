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
                                <li class="nav-menu-item mega-menu">
                                    <a href="/">Journals</a>
                                    <div class="nav-dropdown mega-dropdown">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <ul>
                                                        <li><span class="dropdown-title">Grid</span></li>
                                                        <li><a href="portfolio-grid-2col.html">2 Columns</a></li>
                                                        <li><a href="/#/">View All</a></li>
                                                        <li><a href="portfolio-grid-3col.html">3 Columns</a></li>
                                                        <li><a href="portfolio-grid-3col-no_spacing.html">3 Columns no-Spacing</a></li>
                                                        <li><a href="portfolio-grid-4col.html">4 Columns</a></li>
                                                        <li><a href="portfolio-grid-4col-no_spacing.html">4 Columns no-Spacing</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3">
                                                    <ul>
                                                        <li><span class="dropdown-title">Masonry</span></li>
                                                        <li><a href="portfolio-masonry-2col.html">2 Columns</a></li>
                                                        <li><a href="portfolio-masonry-2col-no_spacing.html">2 Columns no-Spacing</a></li>
                                                        <li><a href="portfolio-masonry-3col.html">3 Columns</a></li>
                                                        <li><a href="portfolio-masonry-3col-no_spacing.html">3 Columns no-Spacing</a></li>
                                                        <li><a href="portfolio-masonry-4col.html">4 Columns</a></li>
                                                        <li><a href="portfolio-masonry-4col-no_spacing.html">4 Columns no-Spacing</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li><span class="dropdown-title">Lightbox</span></li>
                                                        <li><a href="portfolio-lightbox-grid.html">Grid</a></li>
                                                        <li><a href="portfolio-lightbox-masonry.html">Masonry</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3">
                                                    <ul>
                                                        <li><span class="dropdown-title">Wide</span></li>
                                                        <li><a href="portfolio-wide-grid.html">Grid</a></li>
                                                        <li><a href="portfolio-wide-grid-no_spacing.html">Grid no-Spacing</a></li>
                                                        <li><a href="portfolio-wide-masonry.html">Masonry</a></li>
                                                        <li><a href="portfolio-wide-masonry-no_spacing.html">Masonry no-Spacing</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li><span class="dropdown-title">Classical</span></li>
                                                        <li><a href="portfolio-classical-spacing.html">Spacing</a></li>
                                                        <li><a href="portfolio-classical-no_spacing.html">no-Spacing</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3">
                                                    <ul>
                                                        <li><span class="dropdown-title">Single</span></li>
                                                        <li><a href="portfolio-single1.html">Single 1</a></li>
                                                        <li><a href="portfolio-single2.html">Single 2</a></li>
                                                        <li><a href="portfolio-single3.html">Single 3</a></li>
                                                        <li><a href="portfolio-single4.html">Single 4</a></li>
                                                        <li><a href="portfolio-single5-slider.html">Single 5 - Slider</a></li>
                                                        <li><a href="portfolio-single6-video.html">Single 6 - Video</a></li>
                                                        <li><a href="portfolio-single7-youtube.html">Single 7 - youtube</a></li>
                                                        <li><a href="portfolio-single8-vimeo.html">Single 8 - vimeo</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-menu-item">
                                    <a href="#">Goals</a>
                                    <div class="nav-dropdown col3-dropdown center">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li><span class="dropdown-title">Grid</span></li>
                                                    <li><a href="blog-grid-2col.html">2 Columns</a></li>
                                                    <li><a href="blog-grid-2col-sidebar.html">2 Columns - sidebar</a></li>
                                                    <li><a href="blog-grid-3col.html">3 Columns</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li><span class="dropdown-title">Masonry</span></li>
                                                    <li><a href="blog-masonry-2col.html">2 Columns</a></li>
                                                    <li><a href="blog-masonry-2col-sidebar.html">2 Columns - sidebar</a></li>
                                                    <li><a href="blog-masonry-3col.html">3 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li><span class="dropdown-title">One Columns</span></li>
                                                    <li><a href="blog-1col.html">no-sidebar</a></li>
                                                    <li><a href="blog-1col-sidebar.html">with sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li><span class="dropdown-title">Blog Detail</span></li>
                                                    <li><a href="blog-single-image-post.html">Image Post</a></li>
                                                    <li><a href="blog-single-slider-post.html">Slider Post</a></li>
                                                    <li><a href="blog-single-video-post.html">Video Post</a></li>
                                                    <li><a href="blog-single-audio-post.html">Audio Post</a></li>
                                                    <li><a href="blog-single-youtube-post.html">Youtube Post</a></li>
                                                    <li><a href="blog-single-vimeo-post.html">Vimeo Post</a></li>
                                                    <li><a href="blog-single-quote-post.html">Quote Post</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-menu-item">
                                    <a href="#">Habits</a>
                                    <div class="nav-dropdown">
                                        <ul>
                                            <li><a href="element-components.html">Components</a></li>
                                            <li><a href="element-tabs-and-accordian.html">Tabs & Accordian</a></li>
                                            <li><a href="element-slider.html">Slider</a></li>
                                            <li><a href="element-team.html">Team</a></li>
                                            <li><a href="element-pricing.html">Pricing</a></li>
                                            <li><a href="element-video-and-audio.html">Video / Audio</a></li>
                                            <li><a href="element-typography.html">Typography</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-menu-item">
                                    <a href="#">Reflections</a>
                                    <div class="nav-dropdown col2-dropdown left">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul>
                                                    <li><a href="shop-2col.html">Shop 2 Columns</a></li>
                                                    <li><a href="shop-3col.html">Shop 3 Columns</a></li>
                                                    <li><a href="shop-4col.html">Shop 4 Columns</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <ul>
                                                    <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                    <li><a href="shop-detail.html">Shop Detail</a></li>
                                                    <li><a href="shop-checkout.html">Checkout</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
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

                            <div class="nav-icon-item">
                                <span class="nav-icon-trigger cart-menu_btn align-middle"><i class="ion ion-ios-cart-outline"></i></span>
                                <div class="cart-menu-bar">
                                    <ul class="cart-menu-list">
                                        <li>
                                            <a class="product-img">
                                                <img src="img/product/02.jpg" alt="fashion">
                                            </a>
                                            <div class="product-content">
                                                <a href="javascript:void(0)" class="product-remove">
                                                    <i class="ion ion-android-close"></i>
                                                </a>
                                                <a class="product-title">Digital Trending Z Camera</a>
                                                <div class="product-cart-collateral">
                                                    <span class="qty-cart">1</span><span>x</span><span class="product-price-amount color--dark"><span class="currency-sign">$</span>399.00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a class="product-img">
                                                <img src="img/product/02.jpg" alt="fashion">
                                            </a>
                                            <div class="product-content">
                                                <a href="javascript:void(0)" class="product-remove">
                                                    <i class="ion ion-android-close"></i>
                                                </a>
                                                <a class="product-title">Digital Trending Z Camera</a>
                                                <div class="product-cart-collateral">
                                                    <span class="qty-cart">1</span><span>x</span><span class="product-price-amount color--dark"><span class="currency-sign">$</span>399.00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="lead dark cart-total">
                                        <span>Subtotle</span>
                                        <span class="float-right"><span class="currency-sign">$</span>798</span>
                                    </p>
                                    <a class="btn btn-xs btn-color-b form-full" href="shop-checkout.html">Checkout</a>
                                </div>
                            </div>

                            <div class="nav-icon-item">
                                <span class="nav-icon-trigger sidebar-menu_btn align-middle"><i class="ion ion-navicon"></i></span>
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
