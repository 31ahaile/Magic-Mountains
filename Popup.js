let fadeInterval; 

function openPopup(title, image, text, audioFile) {
  document.getElementById("popup").style.display = "flex";

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
      if (audioPlayer.volume < 1) {
        audioPlayer.volume += 0.05;
      } else {
        clearInterval(fadeInterval);
      }
    }, 100);

  } else {
    audioPlayer.style.display = "none";
    audioSource.src = "";
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  const audioPlayer = document.getElementById("popup-audio");

  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  // stop fading
  clearInterval(fadeInterval);
}
