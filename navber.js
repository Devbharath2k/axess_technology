let navbar = $(`

<link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="mininav.css">
    

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a href="index.html" id="navber-icons" style="color: goldenrod; opacity: 0.8;" width="50px" height="30px"
            class="mx-2"><img src="download/Capture.PNG" width="40px" height="30px" class="mb-2" alt="">
            Axess-Technology</a>
        <button class="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <button class="navbar-toggler shadow-none d-lg-none" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav" style="color: rgb(152, 126, 126);">
            <div class="mx-auto"></div>
            <ul class="navbar-nav ms-auto px-6 text-center fw-semibold text-dark" style="color:black">
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link px-3" style="color:#ede6e7;" href="about.html">company</a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row">
                            <div class="col-4">
                                <ul class="mt-4 text-decoration-none fs-5 text-center">
                                    <div class="hover-me text-dark">
                                        <li class=" big-head" style="color: goldenrod; font-size: 16px;"><a
                                                href="acls" class="text-dark"></a>Company profile</li>
                                        <ul class="text-decoration-none fs-5">
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="about.html ">Blog</a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div class="col-8  justify-content-center" style="background-color: #f7f8fd;">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner mt-3">
                                        <div class="carousel-item active">
                                            <img src="download/customer-relationship-management-concept.png"
                                                class="d-block w-100" height="200px" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="download/WEB5.png" class="d-block w-100" height="200px"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="download/WEB6.png" class="d-block w-100" height="200px"
                                                alt="...">
                                        </div>
                                    </div>
                                </div>
                                <h6 class="mt-3 fs-5">Axess Technology</h6>
                                <p class="align-items-center mt-2 mb-2">Our passion lies in transforming challenges into
                                    opportunities, and ideas into functional, elegant software.
                                    <br>
                                    <br>
                                    <button class="btn btn-primary"><a href="contact.html" class="text-white">get quote</a></button>
                                    
                                </p>
                            </div>
                        </div>
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link  px-4 big-shot" href="#service" style="color:#ede6e7;">services</a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row">
                            <div class="col-4">
                               
                                <ul class="mt-4 text-decoration-none fs-5">
                                    <div class="hover-me">
                                        <li class="big-head" style="color: goldenrod; font-size: 16px;"><a
                                                href=""></a>Software
                                            Development</li>
                                        <ul class="text-decoration-none fs-5">
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="uiuxdesign.html">UI/UX Design</a>
                                            </li>
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="webdevelopment.html">Web Development</a>
                                            </li>
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="softwaretesting.html">Software-Testing</a>
                                            </li>
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="Database.html">database-developer</a>
                                            </li>
                                            <li class="center-icon" style="font-size: 12px;">
                                                <i class="ri-subtract-fill"></i>
                                                <a href="Devops.html">Devops</a>
                                            </li>
                                           
                                        </ul>

                                    </div>
                                </ul>

                            </div>
                            <div class="col-8  justify-content-center" style="background-color: #f7f8fd;">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner mt-3">
                                        <div class="carousel-item active">
                                            <img src="download/WEB10.png" class="d-block w-100" height="200px"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="download/WEB8.png" class="d-block w-100" height="200px"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="download/programming-background-collage (1).png"
                                                class="d-block w-100" height="200px" alt="...">
                                        </div>
                                    </div>
                                </div>
                                <h6 class="mt-3 fs-5">Axess Technolgy</h6>
                                <p class="align-items-center">We specialize in delivering cutting-edge software
                                    solutions tailored to meet your business needs
                                    <br><br>
                                    <button class="btn btn-primary"><a href="contact.html" class="text-white">get quote</a></button>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link  px-4" href="index.html#industies" style="color:#ede6e7;">Industries</a>
                    <!-- <div class="dropdown-menu megamenu" role="menu">
      <div class="row">
          <button class="btn btn-primary">get quote</button>
      </div> -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link  px-4" href="index.html#technology" style="color:#ede6e7;">careers</a>
                    <!-- <div class="dropdown-menu megamenu" role="menu">
    <div class="row">
        <button class="btn btn-primary">get quote</button>
    </div> -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link  px-4" href="hire.html" style="color:#ede6e7">hire talent</a>

                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link  px-4" href="contact.html" style="color:#ede6e7">contact</a>
                    <!-- <div class="dropdown-menu megamenu" role="menu">
        <div class="row">
            <button class="btn btn-primary">get quote</button>
        </div> -->
                </li><!-- navber-end -->
            </ul>
        </div>
    </div>
</nav>

<div class="offcanvas offcanvas-start mini-nav" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header border-0">
        <!-- Header content here -->
    </div>
    <div class="offcanvas-body border-0 ho">
        <div class="navbar" id="main_nav">
            <ul class="navbar-nav w-100">
                <a href="index.html" id="navber-icons" class="mb-5"><img src="download/Capture.PNG"
                        style="color: goldenrod;" width="40px" height="30px" class="mb-2" alt="">
                    Axess-Technology</a>
                <!-- Dropdown button without data-bs-toggle -->
                <div>
                    <div class="off-drop-btn">
                        <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
                            <p>Company</p>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                    </div>
                    <div class="off-drop-menus">
                        <div class="d-flex flex-column">
                            <a href="about.html">Profile</a>
                            <a href="#">Partner-Ships</a>
                            <a href="#">Blogs</a>
                            <a href="#">Carrer</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="off-drop-btn">
                        <div class="d-flex justify-content-between align-items-center">
                            <p>Service</p>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                    </div>
                    <div class="off-drop-menus">
                        <div class="d-flex flex-column">
                            <a href="uiuxdesign.html">UI/Ux Design</a>
                            <a href="webdevelopment.html">Web Development</a>
                            <a href="softwaretesting.html">Software-Testing</a>
                            <a href="Database.html">database-developer</a>
                            <a href="Devops.html">devops</a>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="off-drop-btn">
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="index.html#industies" class="text-dark mt-3 mb-2 fs-5">Industies</a>
                            <!-- <i class="ri-arrow-down-s-line"></i> -->
                        </div>
                    </div>

                </div>
                <div>
                    <div class="off-drop-btn">
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="index.html#industies" class="text-dark mt-3 mb-2 fs-5">Careers</a>
                            <!-- <i class="ri-arrow-down-s-line"></i> -->
                        </div>
                    </div>

                </div>
                <div>
                    <div class="off-drop-btn">
                        <div class="d-flex justify-content-between align-items-center">
                            <a class="text-dark mt-3 mb-2 fs-5" href="hire.html">Hire Talent</a>
                            <!-- <i class="ri-arrow-down-s-line"></i> -->
                        </div>
                    </div>
                   
                </div>

                <div class="off-drop-btn">
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="contact.html" class="text-dark mt-3 mb-2 fs-5">Contact</a>
                        <!-- <i class="ri-arrow-down-s-line"></i> -->
                    </div>
                </div>

                <!-- Other menu items here -->
            </ul>
        </div>
    </div>
</div>

`);

$("body").prepend(navbar);

let addIcon = '<i class="ri-arrow-right-line me-2"></i>';
$(".megamenu .big-head").prepend(addIcon);

$("i.ri-arrow-right-line")
  .parent("li")
  .addClass("dropdown-list d-flex align-items-center");



$(document).ready(function() {
  // Add click event handler to accordion headers
  $(".off-drop-btn").click(function() {
    // Toggle the content of the clicked accordion item
    $(this).next(".off-drop-menus").toggle();
    $(this).toggleClass("active");

    // Close other accordion items except the clicked one
    $(".off-drop-btn").not($(this)).removeClass("active");
    $(".off-drop-menus").not($(this).next()).hide();
  });
});
