$(document).ready(function () {
  //DEPENDENCIES ====================================================
  var currentDay = document.querySelector("#currentDay");

  //DATA =============================================================

  // Setting the day, month, and date at the top of the screen
  var today = moment().format("[Today is] dddd, MMMM Do");
  currentDay.innerHTML = today;

  // Loads the locaStorage items into their respective description boxes upon reload
  //Selects item by going to id then description, then puts in relevant stored data
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  //FUNCTIONS =========================================================

  //Save Function
  // Used jQuery to get each block by their id, and the selects their description (text box). Then puts that description in local storage
  //Selects save button, then on click
  $(".saveBtn").on("click", function () {
    var rowHour = $(this).parent().attr("id"); // Gets id from parent of saveBtn (div that holds id for respective hour)
    var description = $(this).siblings(".description").val(); //Gets description from sibling of button (description box)
    localStorage.setItem(rowHour, description); // Puts the key:value of rowHour: description into local storage when the save button is clicked.
  });

  // Changes classes depending on the block's relation to the current hour, resulting in a color change depending on whether the block is in the past, present, or future.
  // This function is responsible for the color change for each block
  function hourTracker() {
    //Set a variable to hold the current hour
    var currentHour = moment().hour();
    // Used jQuery to select each block (each day has a box/row and has a class of time.block)
    //For each time block
    $(".time-block").each(function () {
      // Set a variable that sets the id of each block (id = to the hour of the day) to an integer. ParseInt ensures an integer value is stored.
      var blockHour = parseInt($(this).attr("id"));
      // If that integer is lower than the current hour, adds the class "past" along with its associated css to the block
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        // If that integer is equal to the current hour, adds the class "present" along with its associated css to the block
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        // If that integer is larger than (in the future) than the current hour,
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  // Run hourTracker when the docment loads
  hourTracker();
});
