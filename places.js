 
  
  writeRandomPlace = function () {
    var country = new Array();
    country[0] = 'Spain';
    country[1] = 'Thailand';
    country[2] = 'Russia';
    country[3] = 'Australia';
    country[4] = 'New Zealand';
    country[5] = 'USA';
    country[6] = 'France';
    country[7] = 'Fiji';
    country[8] = 'Canada';
    country[9] = 'Mexico';
    country[10] = 'Brazil';
    country[11] = 'Japan';
    country[12] = 'China';
    country[13] = 'Switzerland';
    country[14] = 'Egypt';
    country[15] = 'Italy';
    country[16] = 'Morocco';
    country[17] = 'China';
    country[18] = 'Singapore';
    country[19] = 'Germany';
    country[20] = 'Greece';
    country[21] = 'Sri Lanka';
    country[22] = 'South Africa';
    country[23] = 'Maldives';
    country[24] = 'Mauritius';
    country[25] = 'Turkey';
    country[26] = 'Scotland';
    country[27] = 'Iceland';
    country[28] = 'India';
    country[29] = 'Norway';
    country[30] = 'Sweden';
    var rand = Math.floor(Math.random()*country.length);
    document.getElementById('placeDisplay').innerHTML = country[rand];
  };