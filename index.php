<?php
session_start();
$loggedin = false;
if (isset($_SESSION['loggedin']) || $_SESSION['loggedin'] == true) {
  $loggedin = true;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Food ordering Website Design</title>
  <!-- custom css file link  -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/all.min.css">
</head>

<body>

  <!-- header section starts  -->

  <header class="header">

    <a href="#features" class="logo"><i class="fas fa-motorcycle"></i> RSTRL <u>(Rok Saako To Rok Lo)</u></a>

    <nav class="navbar">
      <a href="#home">home</a>
      <a href="#features">features</a>
      <a href="#products">products</a>
      <a href="#categories">categories</a>
      <a href="#review">review</a>
      <a href="#blogs">blogs</a>
    </nav>

    <div class="icons">
      <div class="fas fa-bars" id="menu-btn"></div>
      <div class="fas fa-search" id="search-btn"></div>
      <div class="fas fa-shopping-cart" id="cart-btn"></div>
      <div class="fas fa-user" id="login-btn"></div>
    </div>

    <form action="" class="search-form">
      <input type="search" id="search-box" placeholder="search here...">
      <label for="search-box"><i class="fas fa-search"></i>></label>
    </form>

    <form class="shopping-cart">
      <!-- <label for="cart-btn" class="fas fa-cart"></label> -->
      <h2>shopping cart</h2>
      <div class="cart-items" data-cart-items-container>
        <h2>No Items in Cart</h2>
      </div>

      <h3 class="total">total: Rs. <span data-total-price>0</span>/-</h3>

      <?php
      if ($loggedin) {
        echo '<div class="address">
                <h3>shipping address</h3>
                <input type="text" name="name" placeholder="name" id="name" required>
                <input type="text" name="address" placeholder="address" id="address" required>
                <input type="text" name="city" placeholder="city" id="city" required>
                <input type="text" name="state" placeholder="state" id="state" required>
                <input type="text" name="zip" placeholder="zip" id="zip" required>
                <input type="text" name="country" placeholder="country" id="country" required>
                <input type="text" name="phone" placeholder="phone" id="phone" required>
                <input type="text" name="email" placeholder="email" id="email" required>
                <button class="btn" data-buy-btn>Buy Now</button>
              </div>';
      }
      ?>

      <!-- <label -->
    </form>


    <div class="login-form">


      <?php
      if ($loggedin) {
        echo '<div class="loggedin-info">
                <h2>Welcome, ' . $_SESSION['name'] . '</h2></h2>
                <a href="logout.php" class="logout-btn">logout</a>
              </div>';
      } else {
        echo "<div id='login'>
                <form action='./login.php' method='POST'>
                  <h3>login now</h3>
                  <input type='email' name='email' placeholder='Your Email' class='box'>
                  <input type='password' name='password' placeholder='Your Password' class='box'>
                  <p>forget your password <a href='#'>click here</a></p>
                  <p>don't have an account <a href='javascript:void(0)' id='to-register-btn'>create now</a></p>
                  <input type='submit' value='login now' class='btn'>
                </form>
              </div>
              <div id='register'>
                <form action='./register.php' method='POST'>
                  <h3>register here</h3>
                  <input type='text' name='name' placeholder='Your Name' class='box'>
                  <input type='email' name='email' placeholder='Your Email' class='box'>
                  <input type='password' name='password' placeholder='Your Password' class='box'>
                  <input type='password' name='cpassword' placeholder='Confirm Password' class='box'>
                  <p>already have an account <a href='javascript:void(0)' id='to-login-btn'>login now</a></p>
                  <input type='submit' value='register now' class='btn'>
                </form>
              </div>";
      }

      ?>


    </div>

    <!-- to move from login to create acount -->


    <!--   <form action="" class="login-form">
              <h3>create account</h3>
              <input type="username" placeholder="your name" class="box">
              <input type="email" placeholder="your email" class="box">
              <input type="password" placeholder="your password" class="box">
              <p><input type="checkbox" placeholder="I accept all the terms & conditions"></p>
          </form> -->

  </header>

  <!-- header section ends -->

  <!-- home section starts  -->

  <section class="home" id="home">

    <div class="content">
      <h3>SuperFast and <span>fresh</span> products for you</h3>
      <p>Best Pick from Safe Hands for the safety of India.</p>
      <a href="#" class="btn">shop now</a>
    </div>

  </section>

  <!-- home section ends -->

  <!-- features section starts  -->

  <section class="features" id="features">

    <h1 class="heading"> our <span>features</span> </h1>

    <div class="box-container">

      <div class="box">
        <img src="image/feature-img-1.png" alt="">
        <h3>fresh and organic</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
        <a href="#" class="btn">read more</a>
      </div>

      <div class="box">
        <img src="image/feature-img-2.png" alt="">
        <h3>free delivery</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
        <a href="#" class="btn">read more</a>
      </div>

      <div class="box">
        <img src="image/feature-img-3.png" alt="">
        <h3>easy payments</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
        <a href="#" class="btn">read more</a>
      </div>

    </div>

  </section>

  <!-- features section ends -->

  <!-- products section starts  -->
  <section class="products" id="products">
    <h1 class="heading"> our <span>products</span> </h1>
    <div class="swiper product-slider">
      <div class="swiper-wrapper" data-products>
      </div>
    </div>
  </section>
  <!-- products section ends -->

  <!-- categories section starts  -->

  <section class="categories" id="categories">

    <h1 class="heading">Other product <span>categories</span> </h1>

    <div class="box-container">

      <div class="box">
        <img src="image/cat-1.png" alt="">
        <h3>vegitables</h3>
        <p>upto 20% off</p>
        <a href="#" class="btn">shop now</a>
      </div>

      <div class="box">
        <img src="image/cat-2.png" alt="">
        <h3>fresh fruits</h3>
        <p>upto 25% off</p>
        <a href="#" class="btn">shop now</a>
      </div>

      <div class="box">
        <img src="image/cat-3.png" alt="">
        <h3>dairy products</h3>
        <p>upto 30% off</p>
        <a href="#" class="btn">shop now</a>
      </div>

      <div class="box">
        <img src="image/e.jfif" alt="">
        <h3>Food orders</h3>
        <p>upto 50% off</p>
        <a href="#" class="btn">shop now</a>
      </div>

    </div>

  </section>

  <!-- categories section ends -->

  <!-- review section starts  -->

  <section class="review" id="review">

    <h1 class="heading"> customer's <span>review</span> </h1>

    <div class="swiper review-slider">

      <div class="swiper-wrapper">

        <div class="swiper-slide box">
          <img src="image/pic-1.png" alt="">
          <p>One of the Best Grocory weebsites for best & fresh Grocery.</p>
          <h3>Sazzadur Rahman</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div class="swiper-slide box">
          <img src="image/pic-2.png" alt="">
          <p>SuperFast Delivery🥰😍👩‍💻.</p>
          <h3>Kukil Bharadwaj</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div class="swiper-slide box">
          <img src="image/pic-3.png" alt="">
          <p>Nice website😊. Awesome rates and discouts❤️.</p>
          <h3>Sagar Protim Barauh</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div class="swiper-slide box">
          <img src="image/pic-4.png" alt="">
          <p>AWESOME SERVICE , LOVELY CUSTOMER CARE , HAPPY BEING A CUSTOMER🥰❤️.</p>
          <h3>Simanta Thakuria</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>

      </div>

    </div>

  </section>

  <!-- review section ends -->

  <!-- blogs section starts  -->

  <section class="blogs" id="blogs">

    <h1 class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">

      <div class="box">
        <img src="image/fg.jfif" alt="">
        <div class="content">
          <div class="icons">
            <a href="#"> <i class="fas fa-user"></i> by user </a>
            <a href="#"> <i class="fas fa-calendar"></i> 31st dec, 2021 </a>
          </div>
          <h3>Fast food delivery service </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>

      <div class="box">
        <img src="image/blog-2.jpg" alt="">
        <div class="content">
          <div class="icons">
            <a href="#"> <i class="fas fa-user"></i> by user </a>
            <a href="#"> <i class="fas fa-calendar"></i> 1st jan, 2022 </a>
          </div>
          <h3>fresh and organic vegitables and fruits</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>

      <div class="box">
        <img src="image/dairy.jfif" alt="">
        <div class="content">
          <div class="icons">
            <a href="#"> <i class="fas fa-user"></i> by user </a>
            <a href="#"> <i class="fas fa-calendar"></i> 2nd jan, 2022 </a>
          </div>
          <h3>fresh dairy products</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>

    </div>

  </section>

  <!-- blogs section ends -->

  <!-- footer section starts  -->

  <section class="footer">

    <div class="box-container">
      <div class="box">
        <h3> RSTRL<i class="fas fa-motorcycle" aria-hidden="true"></i> </h3>
        <p>#Rok Saako To Rok Lo🚲🚫</p>
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
      </div>

      <div class="box">
        <h3>contact info</h3>
        <a href="#" class="links"> <i class="fas fa-phone"></i> +91-86388-02866 </a>
        <a href="#" class="links"> <i class="fas fa-phone"></i> +91-91275-28879 </a>
        <a href="#" class="links"> <i class="fas fa-envelope"></i> _manashkar107@gmail.com </a>
        <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i> Azara, India - 781017 </a>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="#home" class="links"> <i class="fas fa-arrow-right"></i> home </a>
        <a href="#features" class="links"> <i class="fas fa-arrow-right"></i> features </a>
        <a href="#products" class="links"> <i class="fas fa-arrow-right"></i> products </a>
        <a href="#categories" class="links"> <i class="fas fa-arrow-right"></i> categories </a>
        <a href="#review" class="links"> <i class="fas fa-arrow-right"></i> review </a>
        <a href="#blogs" class="links"> <i class="fas fa-arrow-right"></i> blogs </a>
      </div>

      <div class="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <input type="email" placeholder="your email" class="email">
        <input type="submit" value="subscribe" class="btn">
        <img src="image/payment.png" class="payment-img" alt="">
      </div>
    </div>

    <div class="credit"> created by <span> mr. Manash Kar </span> | all rights reserved | @ ig_manash_kar </div>

  </section>

  <!-- footer section ends -->

  <!-- <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script> -->

  <!-- custom js file link  -->
  <script src="./data/products.js"></script>
  <script src="./js/script.js"></script>

</body>

</html>