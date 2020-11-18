  writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = '"Live with no excuses and travel with no regrets."';
    quotes[1] = '"We travel not to escape life but for life not to escape us."';
    quotes[2] = '"Don\'t listen to what they say, go see"';
    quotes[3] = '"Once a year, go someplace you’ve never been before."';
    quotes[4] = '"Never let your memories be greater than your dreams."';
    quotes[5] = '"It is better to travel well than to arrive."';
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  };