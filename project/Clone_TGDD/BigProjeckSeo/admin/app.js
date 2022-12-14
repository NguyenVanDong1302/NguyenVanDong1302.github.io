var courseAPI = "https://632fc662591935f3c8851f34.mockapi.io/api/apiSEO";
var main = document.getElementById("main-show-data");
var $ = document.querySelector.bind(document);

function start() {
  // console.log('run');
  getCourses(renderCourses);
  handleCreateForm();
  HandleBtnAdd();
}

start();

function getCourses(callback) {
  fetch(courseAPI)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      response.json();
    })
    .then(callback);
}

function handleCreateForm() {
  var createBtn = $("#create");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector(
      'textarea[name="description"]'
    ).value;
    var image = document.querySelector('input[name="image"]').value;
    let formData = {
      name: name,
      description: description,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}

function updateFind(id) {
  const save = document.querySelector("#save");
  const create = document.querySelector("#create");
  create.style.display = "none";
  save.style.display = "block";
  fetch(courseAPI)
    .then((response) => {
      return response.json();
    })
    .then((x) => {
      var search = x.find((currentValue) => {
        return parseInt(currentValue.id) === id;
      });
      console.log(search);
      var name = ($('input[name="name"]').value = search.name);
      var description = (document.querySelector(
        'textarea[name="description"]'
      ).value = search.description);
      var img = (document.querySelector('input[name="image"]').value =
        search.img);
      save.onclick = () => {
        HandleUpdateForm(`${search.id}`);
      };
    });
}

function HandleDeleteCourses(id) {
  fetch(courseAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      response.json();
    })
    .then(callback);
}

function UpdateCourse(id, formData) {
  fetch(courseAPI + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    response.json();
  });
}

function HandleUpdateForm(id) {
  var name = document.querySelector('input[name="name"]').value;
  var description = document.querySelector(
    'textarea[name="description"]'
  ).value;
  var img = document.querySelector('input[name="image"]').value;
  let formData = {
    name: name,
    description: description,
  };
  UpdateCourse(id, formData, () => {
    getCourses(renderCourses);
  });
}

function renderCourses(courses) {
  var htmls = courses.map((currentValue) => {
    return `
    <tr id="list-courses" >
        <td>${currentValue.name}</td>
        <td>${currentValue.brand}</td>
        <td>${parseInt(currentValue.price).toLocaleString()}đ</td>
        <td>${currentValue.warehouse}</td>
        <td>${currentValue.description.slice(0, 100)}...</td>   
        <td><img src="${currentValue.img}" alt="${
      currentValue.name
    }" style="height:40px;"></td>   
        <td class="text-center">
            <button class="btn btn-danger" onclick="HandleDeleteCourses(${
              currentValue.id
            })">Delete</button>
            <button class=" btn btn-warning" id="update-btn" data-toggle="modal" data-target="#myModal" onclick="updateFind(${
              currentValue.id
            })">Update</button>     
        </td>
    </tr>
    `;
  });

  main.innerHTML = htmls.join("");
}

function HandleBtnAdd() {
  var btnAdd = document.querySelector(".btn-add");
  btnAdd.onclick = () => {
    var name = (document.querySelector('input[name="name"]').value = null);
    var description = (document.querySelector(
      'input[name="description"]'
    ).value = null);
    const save = document.querySelector("#save");
    const create = document.querySelector("#create");
    create.style.display = "block";
    save.style.display = "none";
  };
}

const updateBtn = document.querySelector("#update-btn");
