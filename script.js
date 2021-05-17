// declare variables in global scope
var timeDisplayEl = $('#currentDay');
var currentHour = moment().format('H');
var timeBlockArr = $(".timeblock");

var textEl = document.querySelectorAll(".form-control");

var saveBtn = document.querySelectorAll(".btn")


// function to display current time. 
function displayTime() {
  var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);

// loope around timeblocks to set background color according to past, present and future status. 
for (var i = 0; i < timeBlockArr.length; i++) {
  var blockHour = i + 9
  
  if (blockHour > currentHour){
    $(textEl[i]).addClass("bg-warning");
  } else if (blockHour == currentHour) {
    $(textEl[i]).addClass("bg-danger");
  } else {
    $(textEl[i]).addClass("bg-success");
  };
};


$(document).ready(function () {
  // saveBtn click listener 
  $(".btn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".form-control").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time , text);
  })

})
