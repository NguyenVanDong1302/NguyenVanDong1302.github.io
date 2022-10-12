// ================================= slider super =======================
const rightbtntwo = document.querySelector(".fa-chevron-right-two");
const leftbtntwo = document.querySelector(".fa-chevron-left-two");
const imgNumber = document.querySelectorAll(
  ".slider-product-one-content-items"
);

// console.log(rightbtntwo);

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
