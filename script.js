var timeDisplayEl = $('#currentDay');
var currentHour = moment().format('hh')
console.log(currentHour);
var hourLableEl = document.querySelectorAll(".hour-lable")
console.log(hourLableEl.value);
function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };
  setInterval(displayTime, 1000);

