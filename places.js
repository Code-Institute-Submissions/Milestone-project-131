 
  
  writeRandomPlace = function () {
    var city = new Array();
    city[0] = 'Spain';
    city[1] = 'Thailand';
    city[2] = 'Russia';
    city[3] = 'Australia';
    city[4] = 'New Zealand';
    city[5] = 'USA';
    city[6] = 'France';
    city[7] = 'Fiji';
    city[8] = 'Canada';
    city[9] = 'Mexico';
    city[10] = 'Brazil';
    city[11] = 'Japan';
    city[12] = 'China';
    city[13] = 'Switzerland';
    city[14] = 'Egypt';
    city[15] = 'Italy';
    city[16] = 'Morocco';
    city[17] = 'China';
    city[18] = 'Singapore';
    city[19] = 'Germany';
    city[20] = 'Greece';
    city[21] = 'Sri Lanka';
    city[22] = 'South Africa';
    city[23] = 'Maldives';
    city[24] = 'Mauritius';
    city[25] = 'Turkey';
    city[26] = 'Scotland';
    city[27] = 'Iceland';
    city[28] = 'India';
    city[29] = 'Norway';
    city[30] = 'Sweden';
    var rand = Math.floor(Math.random()*city.length);
    document.getElementById('placeDisplay').innerHTML = city[rand];
  };