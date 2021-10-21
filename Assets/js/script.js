var currentDay = document.querySelector("#currentDay");
var timeBlocks = document.querySelector(".container");

var today = moment().format("[Today is] dddd, MMMM Do");
currentDay.innerHTML = today;
// currentDay.innerHTML = nowMoment;
