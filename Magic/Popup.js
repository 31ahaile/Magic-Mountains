function openPopup(title, image, text) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("click", function(e) {
  const popup = document.getElementById("popup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});