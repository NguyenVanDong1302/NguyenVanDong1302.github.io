// ================================= slider super =======================
const rightbtntwo = document.querySelector(".fa-chevron-right-two");
const leftbtntwo = document.querySelector(".fa-chevron-left-two");
const imgNumber = document.querySelectorAll(
  ".slider-product-one-content-items"
);

// console.log(rightbtntwo);
var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count, id, img) {
    // console.log(name, price, count,id);
    this.name = name;
    this.price = price;
    this.count = count;
    this.id = id;
    this.img = img;
  }

  // Save cart
  function saveCart() {
    window.localStorage.setItem("shoppingCart", JSON.stringify(cart));

    console.log(cart);
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(window.localStorage.getItem("shoppingCart"));
  }
  if (window.localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count, id, img) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count, id, img);
    console.log(item);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (name, count, id) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items from cart
  obj.removeItemFromCartAll = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      console.log(cart[item].count);
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    // console.log(cartCopy)
    return cartCopy;
  };

  return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item
//   $('.add-to-cart').click(function(event) {
//     event.preventDefault();
//     var name = $(this).data('name');
//     var price = Number($(this).data('price'));
//     shoppingCart.addItemToCart(name, price, 1);
//     displayCart();
//   });

// Clear items
$(".clear-cart").click(function () {
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var cartArray = shoppingCart.listCart();
  for (var i in cartArray) {
    // console.log(cartArray[i].id);
  }
  var output = "";
  for (var i in cartArray) {
    output +=
      "<tr>" +
      "<td>" +
      cartArray[i].name +
      "</td>" +
      "<td>(" +
      cartArray[i].price.toLocaleString() +
      ")</td>" +
      "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-id=" +
      cartArray[i].id +
      ">-</button>" +
      "<input type='number' class='item-count form-control' data-id='" +
      cartArray[i].id +
      "' value='" +
      cartArray[i].count +
      "'>" +
      "<button class='plus-item btn btn-primary input-group-addon' data-id='" +
      cartArray[i].id +
      "'>+</button></div></td>" +
      "<td><button class='delete-item btn btn-danger' data-id=" +
      cartArray[i].id +
      ">X</button></td>" +
      " = " +
      "<td>" +
      parseInt(cartArray[i].total).toLocaleString() +
      "đ";
    "</td>" + "</tr>";
  }
  $(".show-cart").html(output);
  $(".total-cart").html(shoppingCart.totalCart().toLocaleString());
  $(".total-count").html(shoppingCart.totalCount());
}

// Delete item button

$(".show-cart").on("click", ".delete-item", function (event) {
  var id = $(this).data("id");
  //   console.log(id);
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
});

// -1
$(".show-cart").on("click", ".minus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.removeItemFromCart(id);
  displayCart();
});
// +1
$(".show-cart").on("click", ".plus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.addItemToCart(1, 2, 3, id);
  displayCart();
});

// Item count input
$(".show-cart").on("change", ".item-count", function (event) {
  var id = $(this).data("id");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(id, count);
  displayCart();
});

displayCart();

$(".add-to-cart").click(function (event) {
  event.preventDefault();
  var name = $(this).data("name");
  var img = $(this).data("img");
  var price = Number($(this).data("price"));
  var id = Number($(this).data("id"));
  // console.log(name, price, 1,id,img)
  shoppingCart.addItemToCart(name, price, 1, id, img);
  displayCart();
});

document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://632fc662591935f3c8851f34.mockapi.io/api/apiphone";
  let buyBtn = document.querySelector(".add-to-cart");
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      const id = location.href.slice(54, 66);
      console.log(id);
      let urlStr = location.href;
      const strs = urlStr.split("id=");
      console.log(strs);
      let iddetail = strs.at(-1);

      const dataDetail = data.find((item) => item.id == iddetail);
      if (dataDetail) {
        buyBtn.setAttribute("data-name", dataDetail.name);
        buyBtn.setAttribute("data-price", dataDetail.price);
        buyBtn.setAttribute("data-id", dataDetail.id);
        buyBtn.setAttribute("data-img", dataDetail.img);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

let index = 0;

rightbtntwo.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
});
leftbtntwo.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
});

setInterval(function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }

  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
}, 30000);




// ========================================== api hot =================
let dataProduct = null;
const products = document.querySelector(".list-product-items");
function showData(products, data) {
  products.innerHTML = data.length
    ? data
        .map((item) => {
          return `
                <div class="list-product-item">
                <div class="list-product-item-img">
                <a href="detail.html?id=${item.id}"> <img src="${item.img}" alt=""> </a>
                </div>
                <div class="list-product-item-text">
                    <li class="clname">${item.name}</li>
                    <li class="jsprice"> ${parseInt(item.price).toLocaleString()}₫</li>
                    <li>${item.star}<i class="fa-solid fa-star"></i>
                    <span> (${item.numreview}) </span>
                    </li>
                </div>
            </div>
                `;
        })
        .join(" ")
    : "<div>Dữ liệu trống</div>";
}
document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://632fc662591935f3c8851f34.mockapi.io/api/apiphone";

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);

      showData(products, data);

      // thực hiện chức năng search

      const input = document.querySelector(".inputx ");
      input.addEventListener("keyup", (event) => {
        const target = event.target;
        const value = target.value;
        const convertToLowerCase = value.toLowerCase();
        const filterData = data.filter((item) =>
          item.name.toLowerCase().includes(convertToLowerCase)
        );
        showData(products, filterData);
      });

      dataProduct = data
    
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});
// =========================================================================================


const addressbtn = document.querySelector("#address-form");

const addressclose = document.querySelector("#ad-close");
// console.log(addressclose);
addressbtn.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});
addressclose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});
// =========================================================================================



// api 64 tỉnh thành

if ((address_2 = localStorage.getItem("address_2_saved"))) {
  $('select[name="calc_shipping_district"] option').each(function () {
    if ($(this).text() == address_2) {
      $(this).attr("selected", "");
    }
  });
  $("input.billing_address_2").attr("value", address_2);
}
if ((district = localStorage.getItem("district"))) {
  $('select[name="calc_shipping_district"]').html(district);
  $('select[name="calc_shipping_district"]').on("change", function () {
    var target = $(this).children("option:selected");
    target.attr("selected", "");
    $('select[name="calc_shipping_district"] option')
      .not(target)
      .removeAttr("selected");
    address_2 = target.text();
    $("input.billing_address_2").attr("value", address_2);
    district = $('select[name="calc_shipping_district"]').html();
    localStorage.setItem("district", district);
    localStorage.setItem("address_2_saved", address_2);
  });
}
$('select[name="calc_shipping_provinces"]').each(function () {
  var $this = $(this),
    stc = "";
  c.forEach(function (i, e) {
    e += +1;
    stc += "<option value=" + e + ">" + i + "</option>";
    $this.html('<option value="">Tỉnh / Thành phố</option>' + stc);
    if ((address_1 = localStorage.getItem("address_1_saved"))) {
      $('select[name="calc_shipping_provinces"] option').each(function () {
        if ($(this).text() == address_1) {
          $(this).attr("selected", "");
        }
      });
      $("input.billing_address_1").attr("value", address_1);
    }
    $this.on("change", function (i) {
      i = $this.children("option:selected").index() - 1;
      var str = "",
        r = $this.val();
      if (r != "") {
        arr[i].forEach(function (el) {
          str += '<option value="' + el + '">' + el + "</option>";
          $('select[name="calc_shipping_district"]').html(
            '<option value="">Quận / Huyện</option>' + str
          );
        });
        var address_1 = $this.children("option:selected").text();
        var district = $('select[name="calc_shipping_district"]').html();
        localStorage.setItem("address_1_saved", address_1);
        localStorage.setItem("district", district);
        $('select[name="calc_shipping_district"]').on("change", function () {
          var target = $(this).children("option:selected");
          target.attr("selected", "");
          $('select[name="calc_shipping_district"] option')
            .not(target)
            .removeAttr("selected");
          var address_2 = target.text();
          $("input.billing_address_2").attr("value", address_2);
          district = $('select[name="calc_shipping_district"]').html();
          localStorage.setItem("district", district);
          localStorage.setItem("address_2_saved", address_2);
        });
      } else {
        $('select[name="calc_shipping_district"]').html(
          '<option value="">Quận / Huyện</option>'
        );
        district = $('select[name="calc_shipping_district"]').html();
        localStorage.setItem("district", district);
        localStorage.removeItem("address_1_saved", address_1);
      }
    });
  });
});

// ====================== slide ====================

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function sort() {
  let value = document.querySelector("#sort");
  if (dataProduct && value.value == 1) {
    let dataFilter = [...dataProduct];
    let newData = dataFilter.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    showData(products, newData);
  } else if (dataProduct && value.value == 2) {
    let dataFilter = [...dataProduct];
    let newData = dataFilter.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    showData(products, newData);
  } else if (dataProduct && value.value == 0) {
    console.log(dataProduct);
    showData(products, dataProduct);
  }
}
