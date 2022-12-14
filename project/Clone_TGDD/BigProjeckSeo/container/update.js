
function updateFind(id) {

    const save = document.querySelector("#save");
    const create = document.querySelector('#create')
    create.style.display = 'none'
    save.style.display = "block";
    fetch(courseAPI)
      .then((response) => {
        return response.json();
      })
      .then((x) => {
        var search = x.find((currentValue) => {
          return parseInt(currentValue.id) === id;
        });
        var name = ($('input[name="name"]').value =search.name);
        var description = (document.querySelector('textarea[name="description"]').value = search.description);
        var img = (document.querySelector('input[name="image"]').value = search.img);
        save.onclick = () => {
          HandleUpdateForm(`${search.id}`);
        };
      });
  }


  export default updateFind