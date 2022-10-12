let cart 
var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count, id) {
    // console.log(name, price, count,id);
    this.name = name;
    this.price = price;
    this.count = count;
    this.id = id;
  }

  // Save cart
  function saveCart() {
    window.localStorage.setItem("shoppingCart", JSON.stringify(cart));

    // console.log(cart)
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
  obj.addItemToCart = function (name, price, count, id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count, id);
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
      (cartArray[i].price).toLocaleString() +
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
      parseInt(cartArray[i].total).toLocaleString()+ "đ"
      "</td>" +
      "</tr>";
  }
  $(".show-cart").html(output);
  $(".total-cart").html((shoppingCart.totalCart().toLocaleString()));
  $(".total-pricee").html((shoppingCart.totalCart().toLocaleString()));
  $(".total-count").html(shoppingCart.totalCount());
  var product = document.querySelector(".list-cart");
  product.innerHTML = cart.map(
    (item) => `
    <div class="product-item">
    <div class="imgsp">
        <a href="#">
            <img src="${item.img}" alt="">
        </a>
        <div>
            <button ><span class= "delete-item" data-id=${item.id}>Xoá</span></button>
        </div>
    </div>
    <div class="name-container">
        <a href="#">${item.name}</a>
    </div>
    <div class="product-price">
        <span>
            ${parseInt(
              item.price
            ).toLocaleString()} đ
        </span>
    </div>
    <div class="choosenumber">
        <div class="minus minus-item" data-id=${item.id}>
            <i style="background-color: rgb(204, 204, 204);"></i>
        </div>
        <input type="text" maxlength="3" class="number" value=${item.count} style="border: none;  pointer-events: all; ">
        <div class="plus plus-item" data-id=${item.id} style="pointer-events: all;">
            <i style="background-color: rgb(40, 138, 214);"></i>
            <i style="background-color: rgb(40, 138, 214);"></i>
        </div>
    </div>
</div>
  `
  );
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
$(".list-cart").on("click", ".minus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.removeItemFromCart(id);
  displayCart();
});
$(".list-cart").on("click", ".plus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.addItemToCart(1, 2, 3, id);
  displayCart();
});
$(".list-cart").on("click", ".delete-item", function (event) {
  var id = $(this).data("id");
  //   console.log(id);
  shoppingCart.removeItemFromCartAll(id);
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
  var price = Number($(this).data("price"));
  var id = Number($(this).data("id"));
  console.log(name, price, 1, id);
  shoppingCart.addItemToCart(name, price, 1, id);
  displayCart();
});
let totalCart = 0;
if (cart) {
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    totalCart += cart[i].count;
  }
}

