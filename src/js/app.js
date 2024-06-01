import '../css/app.css';

const burger = document.querySelector("#hamburger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("menu--active");
})