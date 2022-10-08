//current position
var pos = 0;
//number of slides
var totalSlides = $("#slider-wrap ul li").length;
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
  //automatic slider
  // var autoSlider = setInterval(slideRight, 3000);

  // //for each slide
  // $.each($('#slider-wrap ul li'), function() {
  //    //set its color
  //    var c = $(this).attr("data-color");
  //    $(this).css("background",c);

  //    //create a pagination
  //    var li = document.createElement('li');
  //    $('#pagination-wrap ul').append(li);
  // });

  //counter
  // countSlides();

  //pagination
  // pagination();

  //hide/show controls/btns when hover
  //pause automatic slide when hover
  $("#slider-wrap").hover(
    function () {
      $(this).addClass("active");
      clearInterval(autoSlider);
    },
    function () {
      $(this).removeClass("active");
      autoSlider = setInterval(slideRight, 4000);
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

  //*> optional
  // countSlides();
  // pagination();
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

// ===================

document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://632fc662591935f3c8851f34.mockapi.io/api/apiphone";

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      //   console.log("Success:", data);
      const products = document.querySelector(".test-id-detail");
      function showData(products, data) {
        products.innerHTML = data.length
          ? data
              .map((item) => {
                return `
				 
				  
						<div class="list-product-item">
						<a href="detail.html?id=${item.id}"> <img src="${item.img}" alt=""> </a>
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
      showData(products, data);
	//   hihihi();

      //   thực hiện chức năng search

      const input = document.querySelector(".id-detail-test");
    
    //   input.addEventListener("keyup", (event) => {
        // const target = event.target;
        // const value = target.value;
        // const convertToLowerCase = value.toLowerCase();
        const filterData = data.filter((item) =>
          item.id === iddetail
        );
        showData(products, filterData);
    //   });
	  
	// apiidsearch()
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
  let iddetail = strs.at(-1);
  console.log(iddetail);

  const datax = iddetail
    ? data.find((item) => +item.id === +iddetail)
    : undefined;
  // const found = data.find((item) => item.id === iddetail);
  console.log(datas);
});
