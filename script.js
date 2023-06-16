function playMusic() {
    var audio = document.getElementById("birthdaySong");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
  