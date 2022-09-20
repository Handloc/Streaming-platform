const houseIcon = document.querySelector(".fa-house");
const starIcon = document.querySelector(".fa-star");
const categories = document.querySelector("#categories");
const category = document.querySelectorAll(".category");

starIcon.addEventListener("click", function (e) {
  if (houseIcon.classList.contains("active-color")) {
    starIcon.classList.add("active-color");
    houseIcon.classList.remove("active-color");
  }
});

houseIcon.addEventListener("click", function (e) {
  if (starIcon.classList.contains("active-color")) {
    houseIcon.classList.add("active-color");
    starIcon.classList.remove("active-color");
  }
});

categories.addEventListener("click", function (e) {
  const active = e.target;
  if (!active) return;
  category.forEach((c) => c.classList.remove("active-color"));
  active.classList.add("active-color");
});
