const categories = document.querySelectorAll(".categories");
const category = document.querySelectorAll(".category, .fa-house, .fa-star");
const movie = document.querySelector(".home-movie");
const movieContainers = document.querySelectorAll(
  ".home-container, .action-container, .comedy-container, .horror-container, .sci-fi-container, .romance-container, .documentary-container"
);
const searchBar = document.querySelector(".search-bar");
const titles = document.querySelectorAll(".movie-title");
const typesMovie = document.querySelectorAll(
  ".home-movie, .action-movie, .comedy-movie, .horror-movie, .sci-fi-movie, .romance-movie, .documentary-movie"
);

// const activeCategory = function () {
//   categories.forEach((cat) =>
//     cat.addEventListener("click", function (e) {
//       const active = e.target;
//       if (!active) return;
//       category.forEach((name) => name.classList.remove("active-color"));
//       movieContainers.forEach((container) =>
//         container.classList.remove("active")
//       );
//       active.classList.add("active-color");
//       if (active.classList.contains("fa-house")) {
//         document.querySelector(".home-container").classList.add("active");
//       } else {
//         document
//           .querySelector(`.${active.textContent.toLowerCase()}-container`)
//           .classList.add("active");
//       }
//     })
//   );
// };

const searching = function () {
  searchBar.addEventListener("input", function (e) {
    let searchValue = e.target.value.toLowerCase();
    titles.forEach((title) => title.parentElement.classList.add("inactive"));
    if (searchValue.length > 0) {
      searchBar.classList.add("active-search-bar");
      category.forEach((name) => name.classList.remove("active-color"));
      titles.forEach(function (e) {
        if (e.textContent.toLowerCase().includes(searchValue))
          e.parentElement.classList.remove("inactive");
      });
    } else {
      searchBar.classList.remove("active-search-bar");
      homePage();
    }
  });
};

const activeCategory = function () {
  homePage();
  categories.forEach((cat) =>
    cat.addEventListener("click", function (e) {
      const active = e.target;
      if (!active) return;
      category.forEach((name) => name.classList.remove("active-color"));
      active.classList.add("active-color");
      titles.forEach((title) => title.parentElement.classList.add("inactive"));
      if (active.classList.contains("fa-house")) {
        titles.forEach((title) =>
          title.parentElement.classList.remove("inactive")
        );
      } else {
        titles.forEach(function (title) {
          if (
            title.parentElement.classList.contains(
              `${active.textContent.toLowerCase()}-movie`
            )
          )
            title.parentElement.classList.remove("inactive");
        });
      }
    })
  );
};

const homePage = function () {
  document.querySelector(".fa-house").classList.add("active-color");
  titles.forEach((title) => title.parentElement.classList.remove("inactive"));
};

const addToFavourites = function () {
  titles.forEach(function (e) {
    console.log(e.parentElement);
  });
};

activeCategory();
searching();
addToFavourites();
