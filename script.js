"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter-button");
const slider = document.getElementById("filter-slider");
const cards = document.querySelectorAll(".meme-card");

function filterMemes(category) {
  cards.forEach(function (card) {
    card.hidden = category !== "all" && !card.classList.contains(category);
  });

  filters.forEach(function (button, index) {
    const active = button.value === category;
    button.classList.toggle("active", active);

    if (active) {
      slider.style.transform = "translateX(" + index * 100 + "%)";
    }
  });
}

filters.forEach(function (button) {
  button.addEventListener("click", function () {
    filterMemes(button.value);
  });
});

filterMemes("all");

window.addEventListener("pageshow", function () {
  filterMemes("all");
});

document.getElementById("start-tournament").addEventListener("click", function () {
  document.getElementById("tournament-message").hidden = false;
});

const auraButton = document.getElementById("aura-button");
const auraCounter = document.getElementById("aura-count");
const auraActions = document.getElementById("aura-actions");
let aura = 0;

auraButton.addEventListener("click", function () {
  aura = aura + 1;
  auraCounter.textContent = aura;

  const plusOne = document.createElement("span");
  plusOne.className = "plus-one";
  plusOne.textContent = "+1";
  plusOne.style.left = 15 + Math.random() * 70 + "%";
  auraActions.appendChild(plusOne);

  setTimeout(function () {
    plusOne.remove();
  }, 750);
});
