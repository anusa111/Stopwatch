var seconds = 00;
var tens = 00;
var minutes = 00;
var outputSeconds = document.getElementById("second");
var outputTens = document.getElementById("tens");
var outputMinutes = document.getElementById("minute");
var buttonStart = document.getElementById("btn-start");
var buttonReset = document.getElementById("btn-reset");
var buttonStop = document.getElementById("btn-stop");
var Interval;
buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});
buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});
buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  outputSeconds.innerHTML = seconds;
  outputTens.innerHTML = tens;
  outputMinutes.innerHTML = minutes;
});
function startTime() {
  tens = tens + 1;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    outputTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    outputSeconds.innerHTML = "0" + seconds;
    tens = 0;
    outputTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    outputSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    outputMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    outputSeconds.innerHTML = "0" + seconds;
  }
  if (minutes > 9) {
    outputMinutes.innerHTML = minutes;
  }
}
