var actualAddress = document.querySelectorAll(".street-address address");
var mapLink = document.querySelectorAll(".mapbox-map a");
var textLink = document.querySelectorAll(".biz-directions");

var address = actualAddress[0].innerHTML.replace(/<(?:.|\n)*?>/gm, ' ').replace(/\s{2,}/g, ' ').trim();

var addressURL = encodeURIComponent(address);

var addressHrefValue = "https://www.google.com/maps/search/"+addressURL;

mapLink[0].href = addressHrefValue;
mapLink[0].addEventListener('click', function(){
	window.location.replace(addressHrefValue);
});
textLink[0].href = addressHrefValue;
textLink[0].addEventListener('click', function(){
	window.location.replace(addressHrefValue);
});