const categories = document.querySelectorAll(".categories");
const category = document.querySelectorAll(".category, .fa-house, .fa-star");
const movieContainers = document.querySelectorAll(
  ".home-container, .action-container, .comedy-container, .horror-container, .sci-fi-container, .romance-container, .documentary-container"
);
const searchBar = document.querySelector(".search-bar");
const titles = document.querySelectorAll(".movie-title");
const typesMovie = document.querySelectorAll(
  ".home-movie, .action-movie, .comedy-movie, .horror-movie, .sci-fi-movie, .romance-movie, .documentary-movie"
);
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const closeButton = document.querySelectorAll(".close-modal-button");
const favouriteMovie = document.querySelectorAll(".modal-favourite");

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
      } else if (active.classList.contains("favourite-movies")) {
        titles.forEach(function (title) {
          if (title.parentElement.classList.contains("favourite-movie"))
            title.parentElement.classList.remove("inactive");
        });
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

const showModal = function () {
  titles.forEach(function (title) {
    title.parentElement.addEventListener("click", function () {
      document
        .querySelector(
          `.${title.textContent
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll(":", "")
            .replaceAll(",", "")}-modal`
        )
        .classList.remove("inactive");
      overlay.classList.remove("inactive");
    });
  });
};

const closeModal = function () {
  overlay.addEventListener("click", function () {
    overlay.classList.add("inactive");
    modals.forEach((modal) => modal.classList.add("inactive"));
  });
};

const closeModalButton = function () {
  closeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      overlay.classList.add("inactive");
      modals.forEach((modal) => modal.classList.add("inactive"));
    });
  });
};

const addToFavourites = function () {
  favouriteMovie.forEach(function (favButton) {
    favButton.addEventListener("click", function () {
      favButton.classList.toggle("favourite");
      titles.forEach(function (title) {
        if (
          title.textContent ==
          favButton.nextElementSibling.nextElementSibling.textContent
        ) {
          title.parentElement.classList.toggle("favourite-movie");
        }
      });
    });
  });
};

activeCategory();
searching();
showModal();
closeModal();
closeModalButton();
addToFavourites();
