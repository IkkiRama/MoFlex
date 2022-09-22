let menu = document.querySelector(".menu input");
let navMobile = document.querySelector(".navMobile");
let scrollTop = document.querySelector(".toTop");

menu.addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  let posisi = window.scrollY > 200;
  scrollTop.classList.toggle("show", posisi);
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    scrollTop.classList.toggle("show");
  }
});

const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
scrollTop.addEventListener("click", () => toTop());
