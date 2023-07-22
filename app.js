"use strict";

// Average inputs
const gbAverages = document.querySelector(".gb-avg");
const bbAverages = document.querySelector(".bb-avg");
const nineAverages = document.querySelector(".nine-avg");
const eightAverages = document.querySelector(".eight-avg");
const sevenAverages = document.querySelector(".seven-avg");
const sixAverages = document.querySelector(".six-avg");
const fiveAverages = document.querySelector(".five-avg");
const fourAverages = document.querySelector(".four-avg");
const threeAverages = document.querySelector(".three-avg");
const pWedgeAverages = document.querySelector(".p-wedge-avg");
const sWedgeAverages = document.querySelector(".s-wedge-avg");

const avg = document.querySelectorAll(".avg");
const addBtn = document.querySelector(".add");
const refreshBtn = document.querySelector(".refresh");

// Inputs to be looped through
const gb = document.querySelectorAll(".gb");
const bb = document.querySelectorAll(".bb");
const nine = document.querySelectorAll(".nine");
const eight = document.querySelectorAll(".eight");
const seven = document.querySelectorAll(".seven");
const six = document.querySelectorAll(".six");
const five = document.querySelectorAll(".five");
const four = document.querySelectorAll(".four");
const three = document.querySelectorAll(".three");
const pWedge = document.querySelectorAll(".p-wedge");
const sWedge = document.querySelectorAll(".s-wedge");

let gbSum,
  bbSum,
  nineSum,
  eightSum,
  sevenSum,
  sixSum,
  fiveSum,
  fourSum,
  threeSum,
  pWedgeSum,
  sWedgeSum;

function gbAvg(item) {
  gbSum = gbSum + Number(item.value) / 4;
}

function bbAvg(item) {
  bbSum = bbSum + Number(item.value) / 4;
}

function nineAvg(item) {
  nineSum = nineSum + Number(item.value) / 4;
}

function eightAvg(item) {
  eightSum = eightSum + Number(item.value) / 4;
}

function sevenAvg(item) {
  sevenSum = sevenSum + Number(item.value) / 4;
}

function sixAvg(item) {
  sixSum = sixSum + Number(item.value) / 4;
}

function fiveAvg(item) {
  fiveSum = fiveSum + Number(item.value) / 4;
}

function fourAvg(item) {
  fourSum = fourSum + Number(item.value) / 4;
}

function threeAvg(item) {
  threeSum = threeSum + Number(item.value) / 4;
}

function pWedgeAvg(item) {
  pWedgeSum = pWedgeSum + Number(item.value) / 4;
}

function sWedgeAvg(item) {
  sWedgeSum = sWedgeSum + Number(item.value) / 4;
}

addBtn.addEventListener("click", () => {
  gbSum = 0;
  bbSum = 0;
  nineSum = 0;
  eightSum = 0;
  sevenSum = 0;
  sixSum = 0;
  fiveSum = 0;
  fourSum = 0;
  threeSum = 0;
  pWedgeSum = 0;
  sWedgeSum = 0;

  gb.forEach(gbAvg);
  bb.forEach(bbAvg);
  nine.forEach(nineAvg);
  eight.forEach(eightAvg);
  seven.forEach(sevenAvg);
  six.forEach(sixAvg);
  five.forEach(fiveAvg);
  four.forEach(fourAvg);
  three.forEach(threeAvg);
  pWedge.forEach(pWedgeAvg);
  sWedge.forEach(sWedgeAvg);

  gbAverages.textContent = gbSum;
  bbAverages.textContent = bbSum;
  nineAverages.textContent = nineSum;
  eightAverages.textContent = eightSum;
  sevenAverages.textContent = sevenSum;
  sixAverages.textContent = sixSum;
  fiveAverages.textContent = fiveSum;
  fourAverages.textContent = fourSum;
  threeAverages.textContent = threeSum;
  pWedgeAverages.textContent = pWedgeSum;
  sWedgeAverages.textContent = sWedgeSum;
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
