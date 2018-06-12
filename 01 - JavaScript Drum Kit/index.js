(function() {

  var keys = document.querySelectorAll('.key');
  window.addEventListener('keydown', playSound);
  keys.forEach(function(key) {
    key.addEventListener('transitionend', removeClass);
  });

  function playSound(e) {
    var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

})()
