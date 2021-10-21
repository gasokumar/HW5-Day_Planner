var currentDay = document.querySelector("#currentDay");
var timeBlocks = document.querySelector(".container");

var today = moment().format("[Today is] dddd, MMMM Do");
currentDay.innerHTML = today;

//  use moment to start at 9, and then end at 5 (create timeblocks using a for loop)
// Already CSS for .timeblock class and row class

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
