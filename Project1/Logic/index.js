const BtnTogSidebar = document.querySelector(".btn-toggler-sidebar");
const Sidebar = document.querySelector(".sidebar");
const BtnTogNav = document.querySelector(".button-toggler-navbar");
const NavWrapper = document.querySelector(".navbar-wrapper");
const ListBtnShowMenu = document.querySelectorAll(".dropdown-menu-feature");
const Navbar = document.querySelector(".navbar-wrapper");
const quantityInput = document.querySelector(".quantity input");

const BlurContainer = document.querySelector(".blur-container");

// console.log(/);

BlurContainer.addEventListener("click", () => {
  BlurContainer.classList.toggle("d-none");
  Sidebar.classList.remove("show-sidebar");
  NavWrapper.classList.remove("navbar-toggle");
});

BtnTogNav.addEventListener("click", () => {
  NavWrapper.classList.toggle("navbar-toggle");
  BlurContainer.classList.toggle("d-none");
});

// console.log(BtnShowMenu);
for (let i = 0; i < ListBtnShowMenu.length; i++) {
  ListBtnShowMenu[i].addEventListener("click", () => {
    const Btn = document.querySelector(`.show-toggle-${i + 1}`);
    Btn.classList.toggle("show-menu");
  });
}

console.log(BtnTogSidebar);
BtnTogSidebar.addEventListener("click", () => {
  Sidebar.classList.toggle("show-sidebar");
  BlurContainer.classList.toggle("d-none");
});

