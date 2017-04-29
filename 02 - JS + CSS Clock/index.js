document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }

  function initApplication() {

    var hourHand = document.querySelector('.hour-hand');
    var minHand = document.querySelector('.min-hand');
    var secHand = document.querySelector('.second-hand');
    var digHour = document.querySelector('.digital-hour');
    var digMin = document.querySelector('.digital-minute');
    var digSec = document.querySelector('.digital-second');
    var amPM = document.querySelector('.ampm');
    var secondSound = document.querySelector('.second-sound');
    var soundCheckbox = document.querySelector('.play-sound input');
    var playSound = soundCheckbox.checked;
    secondSound.volume = 0.4;

    soundCheckbox.addEventListener('change', function() {
      playSound = soundCheckbox.checked;
    });

    window.setInterval(function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var secs = new Date().getSeconds();
      var hoursDeg = ((hours / 60) * 360) + 90;
      var minsDeg = ((mins / 60) * 360) + 90;
      var secsDeg = ((secs / 60) * 360) + 90;

      if(playSound) secondSound.play();

      amPM.innerHTML = hours < 12 ? 'AM' : 'PM';
      digMin.innerHTML = mins < 10 ? '0' + mins : mins;
      digSec.innerHTML = secs < 10 ? '0' + secs : secs;
      digHour.innerHTML =
        hours < 10
          ? '0' + hours
          : hours < 12
            ? hours
            : hours - 12 < 10
              ? '0' + (hours - 12)
              : hours - 12;


      hourHand.style.transform = 'rotate(' + hoursDeg + 'deg)';
      minHand.style.transform = 'rotate(' + minsDeg + 'deg)';
      secHand.style.transform = 'rotate(' + secsDeg + 'deg)';
    }, 1000);

  }
}
