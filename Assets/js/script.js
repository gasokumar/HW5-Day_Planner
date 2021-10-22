$(document).ready(function () {
  //DEPENDENCIES ===========================================
  var saveBtns = document.getElementsByClassName("saveBtn");
  var description = document.querySelector(".description");
  var currentDay = document.querySelector("#currentDay");
  var timeBlocks = document.querySelector(".container");
  var rows = document.getElementsByClassName("row");

  //DATA =========================

  // Setting the day, month, and date at the top of the screen
  var today = moment().format("[Today is] dddd, MMMM Do");
  currentDay.innerHTML = today;

  //FUNCTIONS =====================

  $(".saveBtn").on("click", function () {
    var rowHour = $(this).parent().attr("id"); // Gets id from parent of saveBtn (where row id that tells you the hour of the box is)
    var description = $(this).siblings(".description").val(); // Gets the text from the description box

    localStorage.setItem(rowHour, description);
  });

  // Loads the locaStorage items into their respective description boxes
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});

function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour, currentHour);

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourTracker(); //re-run function
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
// THEN the saved events persists
