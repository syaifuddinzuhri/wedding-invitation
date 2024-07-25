document.addEventListener("DOMContentLoaded", function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-animation"), // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./cincin.json",
  });

  const btnOpen = document.querySelector(".btn-open");
  const openBox = document.querySelector(".open-box");
  const audio = document.getElementById("audio");
  const invitationBox = document.querySelector(".invitation-box");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const seekSlider = document.getElementById("seekSlider");
  const audioPlayer = document.querySelector(".circle-audio-player");

  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.classList.remove("play");
      playPauseBtn.classList.add("pause");
      audioPlayer.classList.add("playing");
    } else {
      audio.pause();
      playPauseBtn.classList.remove("pause");
      playPauseBtn.classList.add("play");
      audioPlayer.classList.remove("playing");
    }
  });
  // openBox.style.display = "none";
  // invitationBox.classList.add("show");
  // AOS.init();

  btnOpen.addEventListener("click", function () {
    openBox.classList.add("hidden");

    // Show the invitation box after the transition
    setTimeout(function () {
      openBox.style.display = "none";
      invitationBox.classList.add("show");
      AOS.init();
      audio.play();
      audioPlayer.classList.add("playing");
    }, 500); // Match the duration of the CSS transition
  });

  const countdownDate = new Date(2024, 5, 14, 13, 0, 0).getTime();

  // Update the countdown every second
  const countdownTimer = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    // Display the countdown
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    // If the countdown is over, stop the timer
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
    }
  }, 1000); // Update every second

  // Function to format time with leading zeros
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
});
function copyText(value) {
  navigator.clipboard.writeText(value);
}
