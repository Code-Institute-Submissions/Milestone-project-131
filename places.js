 
  
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
    places[21] = 'Sri Lanka';
    places[22] = 'South Africa';
    places[23] = 'Maldives';
    places[24] = 'Mauritius';
    places[25] = 'Turkey';
    places[26] = 'Scotland';
    places[27] = 'Iceland';
    places[28] = 'India';
    places[29] = 'Norway';
    places[30] = 'Sweden';
    var rand = Math.floor(Math.random()*places.length);
    document.getElementById('placeDisplay').innerHTML = places[rand];
  };