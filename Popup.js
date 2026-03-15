function openPopup(title, image, text, audio) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").innerText = text;

  const audioPlayer = document.getElementById("popup-audio");
  const audioSource = document.getElementById("popup-audio-source");

  if (audio) {
    // If an audio file is provided (like Tuscany.wav), show and load it
    audioSource.src = "audio/" + audio;
    audioPlayer.style.display = "block"; 
    audioPlayer.load();
  } else {
    // If no audio file, clear the source and hide the player
    audioSource.src = "";
    audioPlayer.style.display = "none";
  }

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  
  const audioPlayer = document.getElementById("popup-audio");
  
  // Only pause and reset the audio if the player is currently active
  if (audioPlayer.style.display === "block") {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
}
