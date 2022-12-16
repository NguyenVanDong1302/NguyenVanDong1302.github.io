var apiCurses = "https://6397f76c86d04c7633a1c4d5.mockapi.io/apiNews";
var main = document.getElementById("testDescription");
var articleContent = document.querySelector(".article-content");
var showTitle = document.querySelector(".article-title");
fetch(apiCurses)
  .then((response) => response.json())
  .then((data) => {
    // console.log(articleContent);
    let urlStr = location.href;
    const strs = urlStr.split("id=");
    let iddetail = strs.at(-1);

    const result = data.filter((result) => result.idNews === iddetail);
    const NewsofId = result[0];
    console.log(NewsofId);

    function showTitles(NewsofId) {
      return `<h1 class="title">${NewsofId.title}</h1>
        <span class="information-up-post"><p>${NewsofId.userPost}</p> <p>${NewsofId.time} giờ trước</p></span>
        `;
    }

    function ShowArticleContent(NewsofId) {
      const newDescription = NewsofId.description.split("ketthuc");

      var htmls = newDescription.map((result) => {
        var title = result.split("tieude");
        if (title.length > 1) {
          return `<h1 class="title">${title[0]}</h1>`;
        }
        var sosanh = result.slice(1, 6).toLowerCase();
        console.log(result);
        if (sosanh == "https") {
          return `<div class="imgwrap"><img class="image-description" src="${title}" alt=""></div>`;
        } else {
          return `<p class="text-description">${title}</p>`;
        }
      });
      return htmls.join(" ");
    }

    showTitle.innerHTML = showTitles(NewsofId);
    articleContent.innerHTML = ShowArticleContent(NewsofId);
  });

const ButtonMenu = document.querySelector(".button-menu-bars");
const menubars = document.querySelector(".menu-bars-reponsive");
const closeMenuBar = document.querySelector(".button-close-menu-bars");
console.log(ButtonMenu);

ButtonMenu.onclick = function () {
  menubars.classList.toggle("open-menu-bars-responsive");
};
closeMenuBar.onclick = function () {
  menubars.classList.toggle("open-menu-bars-responsive");
};
