var apiCurses = "https://632fc662591935f3c8851f34.mockapi.io/api/News";
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
        <img class="image-description" src = '${NewsofId.imageIndex}' >
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
        if (sosanh == "https") {
          return `<div class="imgwrap"><img class="image-description" src="${title}" alt=""> </div>`;
        } else {
          return `<p class="text-description">${title}</p>`;
        }
      });
      return htmls.join(" ");
    }

    showTitle.innerHTML = showTitles(NewsofId);
    articleContent.innerHTML = ShowArticleContent(NewsofId);
  });
