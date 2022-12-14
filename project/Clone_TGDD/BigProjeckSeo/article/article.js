const newsApi = "https://6397f76c86d04c7633a1c4d5.mockapi.io/apiNews";

fetch(newsApi)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data[0]);
    const articleLeftHeader = document.querySelector("#article-left-header");
    const articleLeftContent = document.querySelector(".article-left-content");
    function showHeaderRight(data) {
      return `
     <a href="./detailArticle/detailAritcle.html?id=${data[0].idNews}">
          <div class="article-left-header-left">
            <img src="${data[0].imageIndex}">
            <span class="alhl-title">${data[0].title}</span>
            <span class="alhl-content">${data[0].detail}</span>
            <span class="alhl-time">${data[0].userPost} ${data[0].time} giờ trước</span>
          </div>
    </a>
    <div class="article-left-header-right">
    <a href="./detailArticle/detailAritcle.html?id=${data[1].idNews}">
        <div class="alhr-header">
            <img
                src="${data[1].imageIndex}">
            <span class="alhr-title">${data[1].title}</span>
            <span class="alhr-time">${data[1].userPost} ${data[1].time} giờ trước</span>
        </div>
    </a>
    <div class="alhr-content">
        <a href="./detailArticle/detailAritcle.html?id=${data[2].idNews}">
            <div class="alhr-content-title">
            ${data[2].title}
            </div>
        </a>
        <a href="./detailArticle/detailAritcle.html?id=${data[3].idNews}">
            <div class="alhr-content-title">
            ${data[3].title}
            </div>
        </a>
        <a href="./detailArticle/detailAritcle.html?id=${data[4].idNews}">
            <div class="alhr-content-title">
            ${data[4].title}
            </div>
        </a>
    </div>
</div>
     
        `;
    }

    function showContentRight(articleLeftContent, data) {
      const newData = data.slice(5, data.length);
      console.log(newData);
      articleLeftContent.innerHTML = newData.length
        ? newData
            .map((result) => {
              return `
    <a href="./detailArticle/detailAritcle.html?id=${result.idNews}" >
          <div class="alc-item">
          <img src="${result.imageIndex}">
          <div class="alc-item-detail">
              <span class="alcid-title">${result.title}</span>
              <span class="alcid-time">${result.userPost} ${result.time} giờ trước</span>
          </div>
      </div>
    </a>
        `;
            })
            .join(" ")
        : "<div>Error</div>";
    }

    // console.log(showData(articleLeftHeader, data));
    showContentRight(articleLeftContent, data);
    articleLeftHeader.innerHTML = showHeaderRight(data);
  });
