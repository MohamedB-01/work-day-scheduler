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

// function to grab saved input from local storage 
function init() {

    

  timeBlockArr.each(function () {
      var savedValue = $(this).attr("id");
      var savedText = localStorage.getItem(savedValue);

      if  (savedText !== null) {
          $(this).children("savedText").val (savedText);
          savedText.text() = savedText;
      };
  });
};

  
//function to save input to local storage 
for (var i; i < saveBtn.length; i++) {
  saveBtn[i].on("click", function (event) {
    event.preventDefault();
    
    var textInput = $(this).siblings(".form-control").val();

    localStorage.setItem(textInput);
    textInput.text() = textInput
  } );
};
  



init();

