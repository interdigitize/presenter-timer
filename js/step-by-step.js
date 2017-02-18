// select the start button in the index.html
var getCountdownTime = document.querySelector('.start');
var timeinterval;
var play = true;

//------------FUNCTIONS--------------
//need to put in minutes or hours in a common denominator to countdown
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - 1;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function startCountdown(){
  // gets the value from the html input and stores it in a var
  var countdownHours = document.getElementById('hours').value;
  var countdownMins = document.getElementById('mins').value;
  var countdownSecs = document.getElementById('secs').value;
  var countdown = countdownStartTime*60;

  // assigns html elements to JS variables by id or class
  var clock = document.getElementById('clockdiv');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(countdown);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
    }
    updateClock();
      timeinterval = setInterval(updateClock, 1000);

      function toggle (){
        console.log("before conditional", play, "clicked");
        if (play === true){
          play = false;
          clearInterval(timeinterval)
        }
        else {
          timeinterval = setInterval(updateClock, 1000);
          play = true;
        }
        console.log(play, "clicked");
      }
      document.getElementById("pause").addEventListener("click", toggle);

  }





//------------EVENT LISTENERS------------
//when the start button is clicked, the function startCounting runs
getCountdownTime.addEventListener('click', startCountdown);


// add a pause button





// clear old time if a new time is entered
