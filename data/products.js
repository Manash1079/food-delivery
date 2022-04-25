const products = () => [
  {
    id: 1,
    pname: "Paneer Tikka",
    price: 200,
    image: "df.jfif",
  },
  {
    id: 2,
    pname: "Chicken Tandoori",
    price: 300,
    image: "product-2.png",
  },
  {
    id: 3,
    pname: "Pav Bhaji",
    price: 130,
    image: "b.jfif",
  },
  {
    id: 4,
    pname: "Masala Dosa",
    price: 150,
    image: "d.jfif",
  },
  {
    id: 5,
    pname: "Matka Thali",
    price: 300,
    image: "c.jfif",
  },
  {
    id: 6,
    pname: "Maharaja Thali",
    price: 349,
    image: "f.jfif",
  },
  {
    id: 7,
    pname: "Bahubali Thali",
    price: 429,
    image: "h.jfif",
  },
  {
    id: 8,
    pname: "Idli",
    price: 129,
    image: "a.jfif",
  },
  {
    id: 9,
    pname: "Chinesse Susi",
    price: 320,
    image: "w.jfif",
  },
  {
    id: 10,
    pname: "Chinesse Noodles",
    price: 80,
    image: "x.jfif",
  },
  {
    id: 11,
    pname: "Ice-cream",
    price: 100,
    image: "y.jfif",
  },
  {
    id: 12,
    pname: "Burger",
    price: 150,
    image: "z.jfif",
  },
];

/* 
  <div class="swiper-slide box">
            <img src="image/df.jfif" alt="">
            <h3> Panner Tikka</h3>
            <div class="price">RS 200/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/product-2.png" alt="">
            <h3>Chicken Tandoori</h3>
            <div class="price"> RS 300/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/b.jfif" alt="">
            <h3>Pav Bhaji</h3>
            <div class="price"> RS 130/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/d.jfif" alt="">
            <h3>Masala Dosa</h3>
            <div class="price"> RS 150/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/c.jfif" alt="">
            <h3>Matka Thali</h3>
            <div class="price"> RS 300/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/f.jfif" alt="">
            <h3>Maharaja Thali</h3>
            <div class="price"> RS 349/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/h.jfif" alt="">
            <h3>Bahubali Thali</h3>
            <div class="price"> RS 429/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/a.jfif" alt="">
            <h3>Idli</h3>
            <div class="price"> RS 129/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/w.jfif" alt="">
            <h3>Chinesse Susi </h3>
            <div class="price"> RS 320/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/x.jfif" alt="">
            <h3>Chinesse Noodles</h3>
            <div class="price"> RS 80/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/y.jfif" alt="">
            <h3>Ice-cream</h3>
            <div class="price"> RS 100/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/z.jfif" alt="">
            <h3>Burger</h3>
            <div class="price"> RS 150/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/3rd.jfif" alt="">
            <h3>Dhokla</h3>
            <div class="price"> RS 139/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/4th images.jpg" alt="">
            <h3>Mix veg Salad</h3>
            <div class="price">RS 99/-</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div> 
        
        */

/* 
<div class="swiper product-slider">

        <div class="swiper-wrapper">

          <div class="swiper-slide box">
            <img src="image/fg.jfif" alt="">
            <h3>Non-veg Thali</h3>
            <div class="price">RS 230/- </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/6th.jfif" alt="">
            <h3>Palak Panner</h3>
            <div class="price">RS 210/-</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/7th.jfif" alt="">
            <h3>Chicken curry</h3>
            <div class="price">RS 240/-</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

          <div class="swiper-slide box">
            <img src="image/8th.jfif" alt="">
            <h3>Veg Thali</h3>
            <div class="price">RS 220/-</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="add-to-cart-btn">add to cart</a>
          </div>

        </div>

      </div> 

*/
