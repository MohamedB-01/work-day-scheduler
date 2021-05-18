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
      var text = $(this).siblings(".text-area").val();
      var time = $(this).parent().attr("id");
    
      localStorage.setItem(time, JSON.stringify(text));
  })

});


$(document).ready(function () {
  textEl.forEach( function () {
    console.log(localStorage);
    var time = $(this).parent().attr("id");
    console.log(time);
    var calNotes = localStorage.getItem(time);
    console.log(calNotes);
     //var time = $(this).parent().attr("id");
    // console.log(time);
    // console.log(localStorage);
    // console.log(localStorage.getItem(time));
    // //var storedText = localStorage.getItem(time);
    //document.querySelectorAll(".text-area").innerHTML = localStorage.getItem(time);
   // console.log(storedText);
    // textVal = $(`.text-area`).val(storedText);
    // textEl.textcontent = textVal
  });
});


// $(document).ready(function () {
//   textEl.forEach( function () {
//     var time = $(this).parent().attr("id");
//     console.log(time);
//     var storedText = localStorage.getItem(time);
//     console.log(storedText);
//     textVal = $(`.text-area`).val(storedText);
//     textEl.textcontent = textVal
//   }
//   );
  
// });