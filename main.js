const categories = document.querySelectorAll(".categories");
const category = document.querySelectorAll(".category, .fa-house, .fa-star");
const movie = document.querySelector(".home-movie");
const movieContainers = document.querySelectorAll(
  ".home-container, .action-container, .comedy-container, .horror-container, .sci-fi-container, .romance-container, .documentary-container"
);

categories.forEach((c) =>
  c.addEventListener("click", function (e) {
    const active = e.target;
    if (!active) return;
    category.forEach((name) => name.classList.remove("active-color"));
    movieContainers.forEach((container) =>
      container.classList.remove("active")
    );
    active.classList.add("active-color");
    if (active.classList.contains("fa-house")) {
      document.querySelector(".home-container").classList.add("active");
    } else {
      document
        .querySelector(`.${active.textContent.toLowerCase()}-container`)
        .classList.add("active");
    }
  })
);
