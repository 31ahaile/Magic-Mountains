function openPopup(title, image, text, audio) {

  document.getElementById("popup-title").innerText = title;

  document.getElementById("popup-image").src = image;

  document.getElementById("popup-text").innerText = text;

  document.getElementById("popup-audio-source").src = "audio/" + audio;

  document.getElementById("popup-audio").load();

  document.getElementById("popup").style.display = "flex";

}


function closePopup() {

  document.getElementById("popup").style.display = "none";

  document.getElementById("popup-audio").pause();

  document.getElementById("popup-audio").currentTime = 0;

}
