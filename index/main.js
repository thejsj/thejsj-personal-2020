document.addEventListener("DOMContentLoaded", function () {
  var confettiElement = document.getElementById("confetti-canvas");
  var confettiSettings = {
    target: confettiElement,
    max: 50,
    size: 5,
    clock: 100,
  };

  var confettiStart = document.getElementById("confetti-start");
  var isEnabled = false;
  confettiStart.addEventListener("click", function () {
    isEnabled = !isEnabled;
    if (isEnabled) {
      confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    } else {
      confetti.clear();
    }
  });
});
