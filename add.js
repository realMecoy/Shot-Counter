"use strict";

// const input = document.querySelector("input");
const par1 = document.getElementById("par1");
const par2 = document.getElementById("par2");
const par3 = document.getElementById("par3");
const par4 = document.getElementById("par4");
const par5 = document.getElementById("par5");
const par6 = document.getElementById("par6");
const par7 = document.getElementById("par7");
const par8 = document.getElementById("par8");
const par9 = document.getElementById("par9");

const stroke1 = document.getElementById("stroke1");
const stroke2 = document.getElementById("stroke2");
const stroke3 = document.getElementById("stroke3");
const stroke4 = document.getElementById("stroke4");
const stroke5 = document.getElementById("stroke5");
const stroke6 = document.getElementById("stroke6");
const stroke7 = document.getElementById("stroke7");
const stroke8 = document.getElementById("stroke8");
const stroke9 = document.getElementById("stroke9");

const parTotal = document.getElementById("par-total");
const strokesTotal = document.getElementById("total");

// const parTotalInput = document.getElementById("par-total-input");
// const strokesTotalInput = document.getElementById("strokes-total-input");

function compareInputs() {
  if (stroke1.value === par1.value) {
    stroke1.style.color = "orange";
  } else if (stroke1.value > par1.value) {
    stroke1.style.color = "red";
  } else {
    stroke1.style.color = "steelblue";
  }

  if (stroke2.value === par2.value) {
    stroke2.style.color = "orange";
  } else if (stroke2.value > par2.value) {
    stroke2.style.color = "red";
  } else {
    stroke2.style.color = "steelblue";
  }

  if (stroke3.value === par3.value) {
    stroke3.style.color = "orange";
  } else if (stroke3.value > par3.value) {
    stroke3.style.color = "red";
  } else {
    stroke3.style.color = "steelblue";
  }

  if (stroke4.value === par4.value) {
    stroke4.style.color = "orange";
  } else if (stroke4.value > par4.value) {
    stroke4.style.color = "red";
  } else {
    stroke4.style.color = "steelblue";
  }

  if (stroke5.value === par5.value) {
    stroke5.style.color = "orange";
  } else if (stroke5.value > par5.value) {
    stroke5.style.color = "red";
  } else {
    stroke5.style.color = "steelblue";
  }

  if (stroke6.value === par6.value) {
    stroke6.style.color = "orange";
  } else if (stroke6.value > par6.value) {
    stroke6.style.color = "red";
  } else {
    stroke6.style.color = "steelblue";
  }

  if (stroke7.value === par7.value) {
    stroke7.style.color = "orange";
  } else if (stroke7.value > par7.value) {
    stroke7.style.color = "red";
  } else {
    stroke7.style.color = "steelblue";
  }

  if (stroke8.value === par8.value) {
    stroke8.style.color = "orange";
  } else if (stroke8.value > par8.value) {
    stroke8.style.color = "red";
  } else {
    stroke8.style.color = "steelblue";
  }

  if (stroke9.value === par9.value) {
    stroke9.style.color = "orange";
  } else if (stroke9.value > par9.value) {
    stroke9.style.color = "red";
  } else {
    stroke9.style.color = "steelblue";
  }
}

// function compareTotals() {
//   if (strokesTotalInput.value !== parTotalInput.value) {
//     strokesTotalInput.style.color = "orange";
//   } else if (strokesTotalInput.value > parTotalInput.value) {
//     strokesTotalInput.style.color = "red";
//   } else {
//     strokesTotalInput.style.color = "steelblue";
//   }
// }

let sum;

function totalStrokes(item) {
  sum = sum + Number(item.value);
}

let sum2;

function totalPars(item) {
  sum2 = sum2 + Number(item.value);
}
const strokes = document.querySelectorAll(".strokes");
const par = document.querySelectorAll(".par");

document.querySelector(".add-up").addEventListener("click", () => {
  sum = 0;
  sum2 = 0;

  compareInputs();
  // compareTotals();

  strokes.forEach(totalStrokes);
  par.forEach(totalPars);

  strokesTotal.textContent = sum;
  parTotal.textContent = sum2;

  strokesTotal.style.background = "rgb(0, 174, 255)";
  parTotal.style.background = "rgb(0, 174, 255)";
});
