

// ===========================================================================================

document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://632fc662591935f3c8851f34.mockapi.io/api/apiphone";

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      //   console.log("Success:", data);
      const product = document.querySelector(".detail-top");

      function showData(product, data) {
        product.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <div class="main-content-title">
                <span> ${item.type_product} > ${item.name} </span>
            </div>
            <div class="row-page">
                <div class="row-page-left">
                    <span> ${item.type_product} ${item.name} </span>
                    <div class="row-page-left-img">
                        <img src="img/image_star/logo.png" alt="">
                    </div>
                    <div class="main-content-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="main-content-sosanh">
                        <span>${item.numreview}</span>

                        <i class="fa-light fa-plus"></i>
                        <span>So sánh</span>
                    </div>
                </div>
                <div class="main-content-link">
                    <div class="main-content-link-title">
                        <span> <i class="fa-solid fa-thumbs-up"></i> </span>
                        <span> Thích </span>

                        <span>8,8k</span>
                    </div>
                    <div class="main-content-link-title">
                        <span>Chia sẻ</span>
                    </div>
                </div>
            </div>
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }

      const slider = document.querySelector("#slider");
      function showSlider(slider, data) {
        slider.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <li>
                                    <img src="${item.img2}"
                                        alt="">
                                    <!-- <i class="fa fa-image"></i> -->
                                </li>
                                <li>
                                    <img src="${item.img3}" alt="">
                                    <!-- <i class="fa fa-image"></i> -->
                                </li>
                    
                    
                                <li>
                                    <img src="${item.img4}" alt="">
                                </li>
                                <li>
                                    <img src="${item.img5}" alt="">
                                </li>
                    
                                <li>
                                    <img src="${item.img6}" alt="">
                                </li>
                    
                                <li>
                                    <img src="${item.img7}" alt="">
                                </li>
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }
      const right_price = document.querySelector(".detail-right-price");
      function showPrice(righ_price, data) {
        righ_price.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <p class="right-item-price">${parseInt(item.price).toLocaleString()}₫</p>
                <span>${parseInt(item.price_sale).toLocaleString()}₫</span>
                <p class="detail-right-price-sale">-${item.sale}%</p>
                                   
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }


      const right_config = document.querySelector(".detail-right-config");
      function showConfig(right_config, data) {
        right_config.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <div class="detail-right-config-title">
                Cấu hình ${item.type_product} ${item.name}
            </div>
            <div class="detail-right-config-title-items">
                <div class="detail-right-config-title-item">
                    <span>Màn hình</span>
                    <span>${item.screen}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Hệ điều hành</span>
                    <span>${item.hdh}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Camera sau</span>
                    <span>${item.camera_back}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Camera trước</span>
                    <span>${item.camera_font}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Chip</span>
                    <span>${item.chip}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>RAM</span>
                    <span>${item.ram}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Dung lượng lưu trữ</span>
                    <span>${item.disk}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>SIM</span>
                    <span>${item.sim}</span>
                </div>
                <div class="detail-right-config-title-item">
                    <span>Pin, Sạc</span>
                    <span> ${item.pin}</span>
                </div>
            </div>
            <div class="hdsdeng">
                <i class="fa-solid fa-paperclip"></i>
                <a href="">Hướng Dẫn Sử Dụng Tiếng Anh</a>
                [PDF, 0.2MB]
            </div>

            <div class="detail-right-config-bonus">
                <span>Xem thêm cấu hình chi tiết </span> <i class="fa-solid fa-caret-right"></i>
            </div>
                                   
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }

      const product_old = document.querySelector(".detail-left-sale-items");
      function showProld(product_old, data) {
        product_old.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <div class="detail-left-sale-item-s">
                <a href="">Xem ${item.type_product} ${item.name} cũ giá từ <span>${parseInt(item.sale_old).toLocaleString()}₫</span></a>
            </div>
            <div class="detail-left-sale-item">
                <span> Tiết kiệm đến </span> <b> ${item.sale}% </b>
            </div>
                                   
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }


      const list_product_sale = document.querySelector(".detail-right-access");
      function showPrsale(list_product_sale, data) {
        list_product_sale.innerHTML = data.length
          ? data
              .map((item) => {
                return `
                <div class="detail-right-access-title">
                <p>Phụ kiện nên có cho ${item.name}</p>
            </div>

            <div class="detail-right-access-items">
                <div class="detail-right-access-item">
                    <img src="${item.product_img_1}"
                        alt="">
                    <div class="detail-right-access-item-title">
                        <li>${item.product_name_1}</li>
                        <li></li>
                        <li>${parseInt(item.product_price_1).toLocaleString()}₫</li>
                        <div class="detail-right-access-item-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>${item.product_numreview_1}</span>
                        </div>
                    </div>
                </div>
                <div class="detail-right-access-item">
                    <img src="${item.product_img_2}"
                        alt="">
                    <div class="detail-right-access-item-title">
                        <li>${item.product_name_2}</li>
                        <li></li>
                        <li>${parseInt(item.product_price_2).toLocaleString()}₫</li>
                        <div class="detail-right-access-item-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>${item.product_numreview_2}</span>
                        </div>
                    </div>
                </div>
                <div class="detail-right-access-item">
                    <img src="${item.product_img_3}"
                        alt="">
                    <div class="detail-right-access-item-title">
                        <li>${item.product_name_3}</li>
                        <li></li>
                        <li>${parseInt(item.product_price_3).toLocaleString()}₫</li>
                        <div class="detail-right-access-item-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>${item.product_numreview_3}</span>
                        </div>
                    </div>
                </div>
         
                </div>
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }

      const left_detail_product = document.querySelector(".detail-left-dt");
      function showDetail_prd(left_detail_product, data) {
        left_detail_product.innerHTML = data.length
          ? data
              .map((item) => {
                return `
               
                <div class="detail-left-parameter">
                <img src="${item.img_detail}" alt="">
            </div>
            
            <div class="detail-left-info-product">
            <div class="detail-left-info-product-title">
            Thông tin sản phẩm
            </div>
            <div class="detail-left-info-product-title-content">
            ${item.detail}
            </div>
            <div class="detail-left-info-product-title">
            ${item.detail_title}
            </div>
                <div class="detail-left-info-product-title-content-2">
                   ${item.detail_2}
                   </div>
                   </div>            
                   <div class="detail-left-parameter">
                   <img src="${item.img8}" alt="">
               </div>
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }
      const name_product_review = document.querySelector(".detail-left-assess-top");
      function showName_rw(name_product_review, data) {
        name_product_review.innerHTML = data.length
          ? data
              .map((item) => {
                return `
               
                Đánh giá ${item.type_product} ${item.name}
						`;
              })
              .join(" ")
          : "<div>Dữ liệu trống</div>";
      }
      // ============================================================================================
      // show san pham theo id 
      showData(product, data);
      // showSlider(slider, data);
      const filterData = data.filter((item) => item.id === iddetail);
      showData(product, filterData);
      showSlider(slider,filterData);
      showPrice(right_price,filterData);
      showConfig(right_config,filterData);
      showProld(product_old,filterData);
      showPrsale(list_product_sale,filterData);
      showDetail_prd(left_detail_product,filterData);
      showName_rw(name_product_review,filterData);
      logicapi();
      

      const sortBy = document.getElementById("sort");
      let sortData = [];
      const namex = document.querySelectorAll(".clname");
      //   console.log(namex);
      if (sortBy) {
        sortBy.onchange = (event) => {
          console.log(event.target.value);
          const { value } = event.target;
          if (value === 1) {
            sortData = [...data].sort();
          } else if (value === 2) {
            sortData = [...data].sort(compareByName).reverse();
          } else {
            sortData = data;
          }
          // element.innerHTML = mapDatas(sortData)
        };
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  let datas = [];
  let urlStr = location.href;
  const strs = urlStr.split("id=");
  console.log(strs);
  let iddetail = strs.at(-1);
  // console.log(iddetail);

  const datax = iddetail
    ? data.find((item) => +item.id === +iddetail)
    : undefined;
  // const found = data.find((item) => item.id === iddetail);
  console.log(datas);
});



//current position
function logicapi(){
  
var pos = 0;
//number of slides
var totalSlides = $("#slider-wrap ul li").length;
// var totalSlides = 6;
//get the slide width
var sliderWidth = $("#slider-wrap").width();


$(document).ready(function () {
  /*****************
	 BUILD THE SLIDER
	*****************/
  //set width to be 'x' times the number of slides
  $("#slider-wrap ul#slider").width(sliderWidth * totalSlides);

  //next slide
  $("#next").click(function () {
    slideRight();
  });

  //previous slide
  $("#previous").click(function () {
    slideLeft();
  });

  /*************************
	 //*> OPTIONAL SETTINGS
	************************/

  $("#slider-wrap").hover(
    function () {
      $(this).addClass("active");
      clearInterval(autoSlider);
    },
    function () {
      $(this).removeClass("active");
      autoSlider = setInterval(slideRight, auto);
    }
  );
}); //DOCUMENT READY

/***********
 SLIDE LEFT
************/
function slideLeft() {
  pos--;
  if (pos == -1) {
    pos = totalSlides - 1;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  
}

/************
 SLIDE RIGHT
*************/
function slideRight() {
  pos++;
  if (pos == totalSlides) {
    pos = 0;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  //*> optional
  countSlides();
  pagination();
}

/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides() {
  $("#counter").html(pos + 1 + " / " + totalSlides);
}

function pagination() {
  $("#pagination-wrap ul li").removeClass("active");
  $("#pagination-wrap ul li:eq(" + pos + ")").addClass("active");
}
}