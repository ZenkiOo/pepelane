"use strict";

document.querySelectorAll('.vehicle').forEach((vehicle) => {
    vehicle.href = 'rent.html'
})

document.querySelectorAll(".tabs-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document
      .querySelectorAll(".tabs-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-triggers__item--active")
      );
    document
      .querySelectorAll(".tabs__item")
      .forEach((child) => child.classList.remove("tabs__item--active"));

    item.classList.add("tabs-triggers__item--active");
    document.getElementById(id).classList.add("tabs__item--active");
  })
);
document.querySelector(".tabs-triggers__item").click();
