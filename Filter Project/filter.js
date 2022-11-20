(function () {
    const buttons = document.querySelectorAll(".btn");
    const storeItems = document.querySelectorAll(".store-item");
    console.log(buttons);

    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        if (filter === "all") {
          storeItems.forEach(function (item) {
            item.style.display = "block";
          });
        } else if (filter === "cakes") {
          storeItems.forEach(function (item) {
            if (item.classList.contains("CAKES")) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        } else if (filter === "cupcakes") {
          storeItems.forEach(function (item) {
            if (item.classList.contains("CUPCAKES")) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        } else if (filter === "doughnuts") {
          storeItems.forEach(function (item) {
            if (item.classList.contains("DOUGHNUTS")) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        }
      });
    });

  const Buttons = document.querySelectorAll(".btn");
  const StoreItems = document.querySelectorAll(".store-item");

  Buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      StoreItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

(function () {
  const searchBox = document.querySelector("#search-btn");
  const storeItems = document.querySelectorAll(".store-item");

  searchBox.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      if (item.textContent.includes(searchFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();