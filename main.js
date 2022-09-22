const categories = document.querySelectorAll(".categories");
const category = document.querySelectorAll(".category, .fa-house, .fa-star");
const movie = document.querySelectorAll(".home-movie");

categories.forEach((c) =>
  c.addEventListener("click", function (e) {
    const active = e.target;
    if (!active) return;
    category.forEach((name) => name.classList.remove("active-color"));
    active.classList.add("active-color");
  })
);

document
  .querySelector(".home-movie")
  .addEventListener("mouseenter", function (e) {
    document.querySelector(".movie-title").style.visibility = "hidden";
    document.querySelector(".movie-short-info").style.visibility = "visible";
  });

document
  .querySelector(".home-movie")
  .addEventListener("mouseleave", function (e) {
    document.querySelector(".movie-short-info").style.visibility = "hidden";
    document.querySelector(".movie-title").style.visibility = "visible";
  });
