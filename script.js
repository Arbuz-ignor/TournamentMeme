"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("start-tournament").addEventListener("click", function () {
  document.getElementById("tournament-message").hidden = false;
});
