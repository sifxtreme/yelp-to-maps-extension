var actualAddress = document.querySelectorAll(".street-address address");
var mapLink = document.querySelectorAll(".mapbox-map a");
var textLink = document.querySelectorAll(".biz-directions");

var address = actualAddress[0].innerHTML.replace(/<(?:.|\n)*?>/gm, ' ').replace(/\s{2,}/g, ' ').trim();

var addressURL = encodeURIComponent(address);

mapLink[0].href = "https://www.google.com/maps/search/"+addressURL;
textLink[0].href = "https://www.google.com/maps/search/"+addressURL;