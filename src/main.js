(function () {
  let hour = document.querySelector(".hour");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  let countDownTimer = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  });

  stopBtn.addEventListener("click", () => {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", () => {
    stopInterval();
    hour.value = "";
    minutes.value = "";
    seconds.value = "";
  });

  function timer() {
    if (seconds.value > 60) {
      minutes.value++;
      seconds.value = seconds.value % 60;
    }

    if (minutes.value > 60) {
      hour.value++;
      minutes.value = minutes.value % 60;
    }

    if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) {
      hour.value = "";
      minutes.value = "";
      seconds.value = "";
      stopInterval();
    } else if (seconds.value != 0) {
      seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
    } else if (minutes.value != 0 && seconds.value == 0) {
      seconds.value = 59;
      minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
    } else if (hour.value != 0 && minutes.value == 0) {
      minutes.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

  function stopInterval(state) {
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    clearInterval(countDownTimer);
  }
})();
