// declare variables in global scope
var timeDisplayEl = $('#currentDay');
var currentHour = moment().format('H');
var timeBlockArr = $(".timeblock");

var textEl = document.querySelectorAll(".text-area");

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
    $(textEl[i]).addClass("bg-success");
  } else if (blockHour == currentHour) {
    $(textEl[i]).addClass("bg-warning");
  } else {
    $(textEl[i]).addClass("bg-danger");
  };
};


$(document).ready(function () {
  // saveBtn click listener 
  $(".btn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".text-area").val();
      var time = $(this).parent().attr("id");
    
      localStorage.setItem(time, JSON.stringify(text));
  })

});

//function to render local storage values into text area 
$(document).ready(function () {
  $(".text-area").each( function () {
    var time = $(this).parent().attr("id");
    var calNotes = localStorage.getItem(time);
    $(this).val(calNotes);
   
  });
});


