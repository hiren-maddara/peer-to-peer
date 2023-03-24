document.addEventListener("DOMContentLoaded", (e) => {
  const btnMenuToggle = document.querySelector(".nav__menu--btn");
  const navMenu = document.querySelector(".nav__list");

  window.addEventListener("load", function (e) {
    if (e.target.innerWidth < 760) navMenu.classList.add("--collapse");
    if (e.target.innerWidth > 760) navMenu.classList.remove("--collapse");
  });

  btnMenuToggle.addEventListener("click", (e) => {
    navMenu.classList.toggle("--collapse");
  });

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 760) navMenu.classList.add("--collapse");
    if (e.target.innerWidth > 760) navMenu.classList.remove("--collapse");
  });
});
