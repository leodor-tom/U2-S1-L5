const nav = document.querySelector("nav");
const btn = document.querySelector(".menu-btn");
document.addEventListener("scroll", (event) => {
  if (window.scrollY >= 350) {
    nav.classList.add("white");
    btn.classList.add("green");
  } else {
    nav.classList.remove("white");
    btn.classList.remove("green");
  }
});
