"use strict";

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return "It's a hole in one";
//   } else if (strokes === par - 2) {
//     return "It's an eagle";
//   } else if (par === 5 && strokes === 2) {
//     return "It's a double eagle";
//   } else if (strokes === par - 1) {
//     return "It's a birdie";
//   } else if (strokes === par) {
//     return "It's a par";
//   } else if (strokes === par + 1) {
//     return "It's a bogey";
//   } else if (strokes === par + 2) {
//     return "It's a double bogey";
//   } else {
//     return "It's a ringer";
//   }
// }

// console.log(golfScore(5, 2));

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const enterBtn = document.querySelector(".add-up");
const resetBtn = document.querySelector(".reset");
const h3 = document.querySelector("h3");
let count = 0;

addBtn.addEventListener("click", function () {
  count++;
  h3.innerHTML = count;
  h3.style.color = "rgb(0, 174, 255)";
});

subtractBtn.addEventListener("click", function () {
  count > 0 ? count-- : (count = 0);
  h3.innerHTML = count;
});
let score = "";

resetBtn.addEventListener("click", function () {
  count = 0;
  h3.innerHTML = count;
  h3.style.color = "#474747";
});
