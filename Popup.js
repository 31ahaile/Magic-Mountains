let fadeInterval;

function openPopup(title, image, text, audioFile) {
  // ✅ use classList instead of style.display
  document.getElementById("popup").classList.add("active");

  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").innerText = text;

  const audioPlayer = document.getElementById("popup-audio");
  const audioSource = document.getElementById("popup-audio-source");

  clearInterval(fadeInterval);

  if (audioFile) {
    audioSource.src = audioFile;
    audioPlayer.load();
    audioPlayer.style.display = "block";

    audioPlayer.volume = 0;
    audioPlayer.play();

    fadeInterval = setInterval(() => {
      if (audioPlayer.volume < 0.95) {       
        audioPlayer.volume += 0.05;   
      } else {
        audioPlayer.volume = 1;              
        clearInterval(fadeInterval);
      }
    }, 100);

  } else {
    audioPlayer.style.display = "none";
    audioSource.src = "";
  }
}

function closePopup() {

  document.getElementById("popup").classList.remove("active");

  const audioPlayer = document.getElementById("popup-audio");

  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  clearInterval(fadeInterval);
}
