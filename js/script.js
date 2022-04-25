const searchForm = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-cart");
const loginForm = document.querySelector(".login-form");
const navbar = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};


// cart work
let inCart = [];
const productsContainer = document.querySelector("[data-products]");
const cartItemsContainer = document.querySelector("[data-cart-items-container]");

const uname = document.querySelector("#name");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const buyBtn = document.querySelector("[data-buy-btn]");

const allProducts = products();

allProducts.map((product) => {
  productsContainer.innerHTML += `<div class="swiper-slide box">
  <img src=${"image/" + product.image} alt="">
  <h3>${product.pname}</h3>
  <div class="price">Rs. ${product.price}/-</div>
  <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
  </div>
  <button
    onclick="handleAddToCart(${product.id})"
    class="add-to-cart-btn"
    data-add-cart-btn=${product.id}
  >
    add to cart
  </button>
</div>`;
});

const handleAddToCart = id => {
  if (inCart.map(item => item.id).includes(id)) return;

  const product = allProducts.find(product => product.id === id);
  inCart = [...inCart, { ...product, qty: 1 }];

  cartItemsContainer.innerHTML = inCart.map(item => {
    return `<div class="box" data-cart-item=${item.id}>
      <img src=${"image/" + item.image} alt="">
      <div class="content">
        <div class="item-detials">
          <div class="action">
            <h3>${item.pname}</h3>
            <a onclick="handleRemoveCart(${item.id})">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          <div class="qty">
            <div>
              <label for="qty">quantity: </label>
              <input 
                type="number" 
                name="qty" 
                id="qty" 
                value=${item.qty} 
                min="1"
                data-qty-id=${item.id}
              >
            </div>
            <span>Rs. <span class="price" data-price-id=${item.id}>${item.price}</span></span>
          </div>
        </div>
      </div>
      </div>`;
  });

  const addToCartBtn = document.querySelector(`[data-add-cart-btn='${id}']`);
  addToCartBtn.innerHTML = "added";

  updatePrice();
};

cartItemsContainer.addEventListener("change", e => {
  const id = e.target.dataset.qtyId;
  const price = allProducts.find(product => product.id.toString() === id).price;

  updateIndividualPrice(id, price);
  updatePrice();
});

const updateIndividualPrice = (id, price) => {
  const qty = document.querySelector(`[data-qty-id='${id}']`).value;
  const priceEl = document.querySelector(`[data-price-id='${id}']`);

  priceEl.innerHTML = price * qty;

  inCart.map(product => {
    if (product.id.toString() === id) {
      product.qty = qty;
      product.price = price * qty;
    }
  });
};

const updatePrice = () => {
  let total = 0;
  inCart.map(product => {
    total += product.price;
  });
  document.querySelector("[data-total-price]").innerHTML = total;
};

const handleRemoveCart = id => {
  inCart = inCart.filter(item => item.id !== id);

  const cartItem = document.querySelector(`[data-cart-item='${id}']`);
  cartItem.remove();

  updatePrice();

  const addToCartBtn = document.querySelector(`[data-add-cart-btn='${id}']`);
  addToCartBtn.innerHTML = "add to cart";

  if (inCart.length === 0) cartItemsContainer.innerHTML = "<h2>No items in cart</h2>";
};
if (buyBtn) {
  buyBtn.addEventListener("click", e => {
    e.preventDefault();

    if (
      inCart.length === 0 ||
      uname.value === "" ||
      address.value === "" ||
      city.value === "" ||
      state.value === "" ||
      country.value === "" ||
      zip.value === "" ||
      phone.value === "" ||
      email.value === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const addressData = {
      name: uname.value,
      address: address.value,
      city: city.value,
      state: state.value,
      country: country.value,
      zip: zip.value,
      phone: phone.value,
      email: email.value,
    };

    const formData = new FormData();

    formData.append("orderData", JSON.stringify(inCart));
    formData.append("addressData", JSON.stringify(addressData));

    var ajax_request = new XMLHttpRequest();

    ajax_request.open("POST", "order.php");
    ajax_request.send(formData);
    ajax_request.onreadystatechange = function () {
      if (ajax_request.readyState == 4) {
        if (ajax_request.status == 200) {
          alert("Order Placed Successfully");
          location.reload();
        } else {
          alert(ajax_request.responseText);
        }
      }
    };
  });
}

const toRegisterBtn = document.querySelector("#to-register-btn");
const toLoginBtn = document.querySelector("#to-login-btn");

const registerUI = document.querySelector("#register");
const loginUI = document.querySelector("#login");

toRegisterBtn.addEventListener("click", () => {
  registerUI.style.display = "block";
  loginUI.style.display = "none";
});

toLoginBtn.addEventListener("click", () => {
  registerUI.style.display = "none";
  loginUI.style.display = "block";
});
