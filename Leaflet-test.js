
const map = L.map('map').setView([30, -20], 2);


L.tileLayer('https://tile.openstreetmap.bzh/osmfr/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);



// Jackson Hole
L.marker([43.7904, -110.6818])
  .addTo(map)
  .bindPopup("Grand Teton National Park");

// Tuscany 
L.marker([43.3407, 11.0439])
  .addTo(map)
  .bindPopup("Tuscany");

// Liberia, Costa Rica
L.marker([10.6346, -85.4407])
  .addTo(map)
  .bindPopup("Liberia, Costa Rica");

// Lake Tahoe
L.marker([39.0968, -120.0324])
  .addTo(map)
  .bindPopup("Lake Tahoe");

// Kiawah Island
L.marker([32.6082, -80.0848])
  .addTo(map)
  .bindPopup("Kiawah Island, South Carolina");

// Snoqualmie
L.marker([47.5287, -121.8250])
  .addTo(map)
  .bindPopup("Snoqualmie, Washington");
