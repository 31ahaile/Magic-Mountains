function openPopup(title, image, text, audioFile) {
  document.getElementById("popup").style.display = "flex";

  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").innerText = text;

  const audioPlayer = document.getElementById("popup-audio");
  const audioSource = document.getElementById("popup-audio-source");

  if (audioFile) {
    audioSource.src = audioFile;
    audioPlayer.style.display = "block";
    audioPlayer.load();
  } else {
    audioPlayer.style.display = "none";
    audioSource.src = "";
    audioPlayer.load(); // fix
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  const audioPlayer = document.getElementById("popup-audio");
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
