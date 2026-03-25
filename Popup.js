function openPopup(title, image, text, audioFile) {
  // Show popup
  document.getElementById("popup").style.display = "flex";

  // Set content
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").innerText = text;

  const audioPlayer = document.getElementById("popup-audio");
  const audioSource = document.getElementById("popup-audio-source");

  if (audioFile) {
    // Load audio from audio/ folder
    audioSource.src = "audio/" + audioFile;
    audioPlayer.style.display = "block";
    audioPlayer.load();
  } else {
    // Hide and reset audio
    audioPlayer.style.display = "none";
    audioSource.src = "";
    audioPlayer.load();
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  const audioPlayer = document.getElementById("popup-audio");

  // Stop audio
  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  // Hide popup
  popup.style.display = "none";
}
