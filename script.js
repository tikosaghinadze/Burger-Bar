const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  menu.classList.toggle("open");
});
