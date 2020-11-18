//Google maps api

let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5074, lng: 0.1278 }, /* London coordinates*/
    zoom: 6
  });
}