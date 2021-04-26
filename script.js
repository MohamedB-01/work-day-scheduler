var timeDisplayEl = $('#currentDay');
var currentHour = moment().format('H');
var timeBlockArr = $(".timeblock");

var textEl = document.querySelectorAll(".form-control");

var saveBtn = document.querySelectorAll(".btn")
var textInput = localStorage.getItem("textInput");
function storeState() {
  localStorage.setItem("textInput", textInput);
}

for (var i = 0; i < timeBlockArr.length; i++) {
  var blockHour = i + 9
  
  if (blockHour > currentHour){
    $(textEl[i]).addClass("bg-secondary");
  } else if (blockHour == currentHour) {
    $(textEl[i]).addClass("bg-danger");
  } else {
    $(textEl[i]).addClass("bg-success");
  };
};


function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };
  setInterval(displayTime, 1000);

