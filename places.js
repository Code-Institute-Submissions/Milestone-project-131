 
  
  writeRandomPlace = function () {
    var places = new Array();
    places[0] = 'Spain';
    places[1] = 'Thailand';
    places[2] = 'Russia';
    places[3] = 'Australia';
    places[4] = 'New Zealand';
    places[5] = 'USA';
    places[6] = 'France';
    places[7] = 'Fiji';
    places[8] = 'Canada';
    places[9] = 'Mexico';
    places[10] = 'Brazil';
    places[11] = 'Japan';
    places[12] = 'China';
    places[13] = 'Switzerland';
    places[14] = 'Egypt';
    places[15] = 'Italy';
    places[16] = 'Morocco';
    places[17] = 'China';
    places[18] = 'Singapore';
    places[19] = 'Germany';
    places[20] = 'Greece';
    var rand = Math.floor(Math.random()*places.length);
    document.getElementById('placeDisplay').innerHTML = places[rand];
  }