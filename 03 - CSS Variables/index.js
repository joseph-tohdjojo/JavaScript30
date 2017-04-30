document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }

  function initApplication() {
    var input = document.querySelectorAll('.controls input');

    input.forEach(function(val, i, inputList) {
      val.addEventListener('change', handleUpdate);
      val.addEventListener('mousemove', handleUpdate)
    });

    function handleUpdate(ev) {
      var suffix = this.dataset.sizing || '';

      document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
    }
  }
}
